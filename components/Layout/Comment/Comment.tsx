'use client';

import User from '@/components/UI/User/User';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Button from '@/components/UI/Button/Button';
import { FormEvent, useEffect, useState } from 'react';
import StarIcon from '@/components/UI/Icon/StarIcon';
import { roundNumber } from '@/utils/functions/roundNumber';
import ReplyOnComment from '@/components/Layout/Comment/ReplyOnComment';
import { UserType } from '@/components/PropertyDescription/Layout/PropertyComments';
import { useUserDataOnClient } from '@/hooks/queries/useUserDataOnClient';
import { useLikePropertyQuestion } from '@/hooks/mutations/useLikePropertyQuestion';
import { useUnlikePropertyQuestion } from '@/hooks/mutations/useUnlikePropertyQuestion';
import SnackbarMUI from '@/components/UI/Snackbar/SnackbarMUI';
import { useAddPropertyQuestionReply } from '@/hooks/mutations/useAddPropertyQuestionReply';
import { useLikePropertyReview } from '@/hooks/mutations/useLikePropertyReview';
import { useUnlikePropertyReview } from '@/hooks/mutations/useUnlikePropertyReview';
import { useCreatePropertyReviewReply } from '@/hooks/mutations/useCreatePropertyReviewReply';
import UserReply from '@/components/UI/User/UserReply';
import UserReplySkeleton from '@/components/UI/Skeletons/UserReplySkeleton';

export type CommentResponseType = {
  replierId: string;
  commentId: string;
  replierInitials: string;
  userType: UserType;
  comment: string;
  createdAt: string;
}

type CommentModeType = `PropertyReview` | `PropertyQuestion` | `BlogReview`

type CommentType = {
  id: string;
  userType: UserType;
  abbrInitials: string;
  initials: string;
  text: string;
  likes: string[];
  createdAt: string;
  responses: CommentResponseType[]
  rating?: number;
  commentMode: CommentModeType;
  propertyId: string;
  leaveReplyEnabled?: boolean;
  newReplies: CommentResponseType[];
}

export default function
  Comment({
            id,
            propertyId,
            commentMode,
            userType,
            createdAt,
            likes,
            responses,
            text,
            abbrInitials,
            initials,
            rating,
            leaveReplyEnabled = true,
            newReplies
          }: CommentType) {

  const [loadingReplies, setLoadingReplies] = useState(true);
  const [showReplies, setShowReplies] = useState<boolean>(false);

  const { userData, loading } = useUserDataOnClient();
  const [likesArray, setLikesArray] = useState<string[]>();
  const [repliesArray, setRepliesArray] = useState<CommentResponseType[]>([]);
  const [leaveReplyOpen, setLeaveReplyOpen] = useState<boolean>(false);

  const { likePropertyQuestion } = useLikePropertyQuestion();
  const { unlikePropertyQuestion } = useUnlikePropertyQuestion();

  const { likeReview } = useLikePropertyReview();
  const { unlikeReview } = useUnlikePropertyReview();

  const [validationReplyError, setValidationReplyError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { createQuestionReply, loading: createQuestionReplyLoading } = useAddPropertyQuestionReply();
  const { createPropertyReviewReply, loading: createPropertyReviewReplyLoading } = useCreatePropertyReviewReply();

  useEffect(() => {
    if (likes) {
      setLikesArray(likes);
    }
    if (responses) {
      setLoadingReplies(() => false);
      setRepliesArray(responses);
    }
  }, [likes, repliesArray, responses]);

  let roundedRating = null;

  if (rating) {
    roundedRating = rating ? roundNumber(rating) : null;
  }

  async function handleCommentAction() {
    if (likesArray!.includes(userData!.email)) {
      // optimistic update
      setLikesArray((prevState) => prevState!.filter((like) => like !== userData!.email));

      switch (commentMode) {
        case 'PropertyQuestion':
          await unlikePropertyQuestion(id);
          break;
        case 'PropertyReview':
          await unlikeReview(id);
          break;
      }

    } else {
      // optimistic update
      setLikesArray((prevState) => [...prevState!, userData!.email]);

      switch (commentMode) {
        case 'PropertyQuestion':
          await likePropertyQuestion(id);
          break;
        case 'PropertyReview':
          await likeReview(id);
          break;
      }
    }
  }

  async function handleSubmitReply(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as { reply: string };

    const reply = results.reply.trim() || ``;

    if (reply.length < 2 || reply.length >= 1000) {
      setValidationReplyError(() => 'The reply should be at least 2 to 1000 characters.');
      setSnackbarOpen(() => true);
      return;
    }

    if (!showReplies) {
      setShowReplies(() => true);
    }

    switch (commentMode) {
      case 'PropertyQuestion':
        await createQuestionReply({ propertyId, commentId: id, comment: reply });
        break;
      case 'PropertyReview':
        await createPropertyReviewReply({
          propertyId,
          commentId: id,
          comment: reply
        });

    }
    currObject.reset();
    setLeaveReplyOpen(() => false);
  }

  return (
    <>
      <SnackbarMUI severity={'error'} message={validationReplyError}
                   state={{ open: snackbarOpen, setOpen: setSnackbarOpen }} />
      <div className={`flex flex-col gap-5`}>
        <div className={`flex bp-620:items-center gap-6 flex-col bp-620:flex-row`}>
          <User type={userType} abbrInitials={abbrInitials} initials={initials}
                createdAt={createdAt} />
          {(rating && roundedRating) && (
            <>
              <div className={`flex items-center gap-1`}>
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} size={`md`} state={index < roundedRating ? `filled` : `empty`} />
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          <p className={`leading-relaxed text-zinc-800`}>{text}</p>
        </div>
        <div className={`flex items-center gap-1`}>
          <div onClick={handleCommentAction}>
            {!loading && likesArray && (
              <>
                <ViapropertyIcon icon={likesArray.includes(userData!.email) ? `heart-filled` : `heart`} />
              </>
            )}
          </div>
          <span className={`bg-clip-text text-transparent bg-linear-main-red font-bold`}>{likesArray?.length}</span>
        </div>
        <div className={`flex-col gap-7 ${showReplies ? `flex` : `hidden`}`}>
          {!loadingReplies && repliesArray && repliesArray.length > 0 && repliesArray.map(function(response) {
            return (
              <UserReply
                createdAt={response.createdAt}
                key={response.createdAt}
                comment={response.comment}
                userType={response.userType}
                initials={response.replierInitials} />
            );
          })}
          {newReplies && newReplies?.length > 0 && newReplies.filter((reply) => reply.commentId === id)!
            .map((reply) => (
              <UserReply
                createdAt={reply.createdAt}
                key={reply.createdAt}
                comment={reply.comment}
                userType={reply.userType}
                initials={reply.replierInitials} />
            ))}
          {(createQuestionReplyLoading || createPropertyReviewReplyLoading) && <UserReplySkeleton />}
        </div>

        <div className={`flex gap-3`}>
          {(!leaveReplyOpen && leaveReplyEnabled) && (
            <>
              <div onClick={() => setLeaveReplyOpen(true)}>
                <Button mode={`sm`} label={`Reply`}
                        btnVariant={`black`} />
              </div>
            </>
          )}

          {([...repliesArray, ...newReplies].length > 0 && (
            <div onClick={!showReplies ? () => setShowReplies(true) : () => setShowReplies(false)}>
              <Button mode={`sm`}
                      label={!showReplies ?
                        `See answers (${[...repliesArray, ...newReplies].length})` : `Hide`}
                      btnVariant={`white`} />
            </div>
          ))}

        </div>
        {(leaveReplyOpen && leaveReplyEnabled) && (
          <>
            <ReplyOnComment
              loading={createQuestionReplyLoading || createPropertyReviewReplyLoading}
              onSubmit={handleSubmitReply}
              setLeaveReplyOpen={setLeaveReplyOpen}
              btnLabel={`Add Reply`}
              textareaName={`reply`}
              textareaWidth={`bp-620:w-[370px] w-screen`} />
          </>
        )}
      </div>
    </>
  );
}
