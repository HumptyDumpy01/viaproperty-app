'use client';

import User from '@/components/UI/User/User';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Button from '@/components/UI/Button/Button';
import { useEffect, useState } from 'react';
import StarIcon from '@/components/UI/Icon/StarIcon';
import { roundNumber } from '@/utils/functions/roundNumber';
import ReplyOnComment from '@/components/Layout/Comment/ReplyOnComment';
import { abbreviateInitials } from '@/utils/functions/abbreviateInitials';
import { formatDate } from '@/utils/functions/formatDate';
import { UserType } from '@/components/PropertyDescription/Layout/PropertyComments';
import { useUserDataOnClient } from '@/hooks/queries/useUserDataOnClient';
import { useLikePropertyQuestion } from '@/hooks/mutations/useLikePropertyQuestion';
import { useUnlikePropertyQuestion } from '@/hooks/mutations/useUnlikePropertyQuestion';

export type CommentResponseType = {
  replierId: string;
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
  // children: ReactNode;
}

export default function
  Comment({
            id,
            commentMode,
            userType,
            createdAt,
            likes,
            responses,
            text,
            abbrInitials,
            initials,
            rating
          }: CommentType) {

  const [showReplies, setShowReplies] = useState<boolean>(false);
  const { userData, loading } = useUserDataOnClient();
  const [likesArray, setLikesArray] = useState<string[]>();

  const { likePropertyQuestion } = useLikePropertyQuestion();
  const { unlikePropertyQuestion } = useUnlikePropertyQuestion();


  useEffect(() => {
    if (likes) {
      setLikesArray(likes);
    }
  }, [likes]);

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
      }

    } else {
      // optimistic update
      setLikesArray((prevState) => [...prevState!, userData!.email]);

      switch (commentMode) {
        case 'PropertyQuestion':
          await likePropertyQuestion(id);
          break;
      }
    }
  }

  const [leaveReplyOpen, setLeaveReplyOpen] = useState<boolean>(false);

  return (
    <>
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
          {responses.map(function(response) {
            return (
              <>
                <div className={`pl-12 flex flex-col gap-4 border-l-2 border-r-zinc-200 `}>
                  <User type={response.userType} abbrInitials={abbreviateInitials(response.replierInitials)}
                        initials={response.replierInitials}
                        createdAt={formatDate(response.createdAt)} />
                  <p className={`leading-relaxed text-zinc-800`}>{response.comment}</p>
                </div>
              </>
            );
          })}
        </div>

        <div className={`flex gap-3`}>
          {!leaveReplyOpen && (
            <>
              <div onClick={() => setLeaveReplyOpen(true)}>
                <Button mode={`sm`} label={`Reply`}
                        btnVariant={`black`} />
              </div>
            </>
          )}

          {responses.length > 0 && (
            <div onClick={!showReplies ? () => setShowReplies(true) : () => setShowReplies(false)}>
              <Button mode={`sm`} label={!showReplies ? `See answers (${responses.length})` : `Hide`}
                      btnVariant={`white`} />
            </div>
          )}

        </div>
        {leaveReplyOpen && (
          <>
            <ReplyOnComment setLeaveReplyOpen={setLeaveReplyOpen} btnLabel={`Add Reply`} textareaName={`reply`}
                            textareaWidth={`bp-620:w-[370px] w-screen`} />
          </>
        )}
      </div>
    </>
  );
}
