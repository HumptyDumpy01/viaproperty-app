'use client';

import BadgeRounded from '@/components/UI/Badge/BadgeRounded';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import { useEffect, useState } from 'react';
import Button from '@/components/UI/Button/Button';
import Comment from '@/components/Layout/Comment/Comment';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';
import { abbreviateInitials } from '@/utils/functions/abbreviateInitials';
import { formatDate } from '@/utils/functions/formatDate';
import { sortArrayByNewestDate } from '@/utils/functions/sorting/sortArrayByNewestDate';
import { sortActiveReviews } from '@/utils/functions/sorting/sortActiveReviews';
import { sortPropertyQuestions } from '@/utils/functions/sorting/sortPropertyQuestions';
import { scrollIntoViewFunc } from '@/utils/functions/scrollIntoViewFunc';
import { useCartDispatch, useCartSelector } from '@/store/hooks';
import { propertyDescriptionSliceActions } from '@/store/features/propertyDescription';
import { useNewQuestionReplySubscription } from '@/hooks/subscriptions/useNewReplySubscription';
import { useNewReviewReplySubscription } from '@/hooks/subscriptions/useNewReviewReplySubscription';

export type PropertyRatedType = {
  overall: number;
};

export type UserType = `USER` | `LANDLORD`;

export type ReplyType = {
  replierId: string;
  replierInitials: string;
  userType: UserType;
  commentId: string;
  comment: string;
  createdAt: string;
}

export type PropertyReviewsType = {
  user: {
    initials: string;
  };
  id: string;
  comment: string;
  likes: string[];
  rated: PropertyRatedType;
  createdAt: string;
  userType: UserType;
  replies: ReplyType[] | [];
}

export type PropertyQuestionsType = {
  user: {
    initials: string;
  };
  id: string;
  comment: string;
  likes: string[];
  createdAt: string;
  userType: UserType;
  replies: ReplyType[] | [];
}

export type PropertyCommentsType = {
  propertyFor: PropertyForType;
  propertyId: string;
  reviews: PropertyReviewsType[];
  questions: PropertyQuestionsType[];
};

export type CommentType = `Reviews` | `Questions`;

export default function
  PropertyComments({
                     propertyFor,
                     propertyId,
                     reviews,
                     questions
                   }: PropertyCommentsType) {
  const dispatch = useCartDispatch();
  const activeCommentsGlobal = useCartSelector((state) => state.propertyDescription.activeComments) as CommentType;
  const optimisticQuestions = useCartSelector((state) => state.propertyDescription.optimisticPropertyQuestions);
  const optimisticReviews = useCartSelector((state) => state.propertyDescription.optimisticPropertyReviews);
  const chosenActiveComments = propertyFor === `sell` ? `Questions` : activeCommentsGlobal;

  const itemsPerPage = 3;
  const [activePage, setActivePage] = useState(1);
  const [activePageQuestions, setActivePageQuestions] = useState(1);

  const [activeFilter, setActiveFilter] = useState<ActiveFilterTypeQuestions>(`Answered`);

  const [sortedReviews, setSortedReviews] = useState(
    sortArrayByNewestDate(reviews)
  );

  const [sortedQuestions, setAllQuestions] = useState(
    sortArrayByNewestDate(questions)
  );

  const { newReply: newQuestionReply, loading: newQuestionReplyLoading, error } = useNewQuestionReplySubscription();
  const {
    newReply: newReviewReply,
    loading: newReviewReplyLoading,
    error: reviewReplyError
  } = useNewReviewReplySubscription();

  const [newQuestionReplies, setNewQuestionReplies] = useState<ReplyType[]>([]);
  const [newReviewReplies, setNewReviewReplies] = useState<ReplyType[]>([]);

  useEffect(() => {
    if (newQuestionReply) {
      setNewQuestionReplies((prevState) => [...prevState, newQuestionReply]);
    }
  }, [newQuestionReply, newQuestionReplyLoading, error]);

  useEffect(() => {
    if (newReviewReply) {
      setNewReviewReplies((prevState) => [...prevState, newReviewReply]);
    }
  }, [newReviewReply, newReviewReplyLoading, reviewReplyError]);

  useEffect(() => {
    const copyQuestions = [...questions];
    const copyReviews = [...reviews];

    if (chosenActiveComments === `Reviews`) {
      sortActiveReviews(activeFilter, reviews, setSortedReviews, copyReviews);
    }

    if (chosenActiveComments === `Questions`) {
      sortPropertyQuestions(activeFilter, questions, setAllQuestions, copyQuestions);
    }
    setActivePage(() => 1);

  }, [activeFilter, chosenActiveComments]);

  const handleSetActiveComments = (switchTo: CommentType | ActiveFilterTypeQuestions) => {
    if (switchTo === 'Reviews' || switchTo === 'Questions') {
      dispatch(propertyDescriptionSliceActions.changeActiveComments(switchTo));
    }
    switch (switchTo) {
      case `Reviews`:
        setActiveFilter(() => `Date`);
        break;
      case `Questions`:
        setActiveFilter(() => `Answered`);
        break;
    }
    setActivePage(() => 1);
  };

  const handleSetActiveFilter = (switchTo: CommentType | ActiveFilterTypeQuestions) => {
    if (switchTo === 'Date' || switchTo === 'Most Liked' || switchTo === 'Answered'
      || switchTo === 'From Higher Rating' || switchTo === 'From Lower Rating') {
      setActivePage(() => 1);
      setActiveFilter(switchTo);
    }
  };

  return (
    <>
      <div className={`flex bp-620:gap-14 flex-col bp-620:flex-row mb-7 bp-620:mb-0`}>
        <h2 className={`text-4xl bg-clip-text text-transparent bg-linear-main-red font-bold flex w-fit
                  mb-8 comment-heading`}>Comments</h2>
        <div className={`flex gap-3 flex-wrap`}>
          <div>
            <BadgeRounded setActiveFilter={handleSetActiveComments} label={`Questions`} color={`blue`} type={`lg`}
                          state={chosenActiveComments} />
          </div>
          {propertyFor === `rent` && (
            <>
              <div>
                <BadgeRounded setActiveFilter={handleSetActiveComments} label={`Reviews`} color={`blue`} type={`lg`}
                              state={chosenActiveComments} />
              </div>
            </>
          )}

        </div>
      </div>
      {chosenActiveComments === `Questions` && sortedQuestions.length > 0 && (
        <>
          <div className={`flex items-center gap-2.5 mb-12 overflow-x-auto scrollbar-thin`}>
            <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Date`} state={activeFilter} />
            <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Most Liked`} state={activeFilter} />
            <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Answered`} state={activeFilter} />
          </div>
        </>
      )}
      {chosenActiveComments === `Reviews` && propertyFor === `rent` && sortedReviews.length > 0 && (
        <>
          <div className={`flex items-center gap-2.5 mb-12 overflow-x-auto scrollbar-thin`}>
            <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Date`} state={activeFilter} />
            <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Most Liked`} state={activeFilter} />
            <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`From Higher Rating`} state={activeFilter} />
            <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`From Lower Rating`} state={activeFilter} />
          </div>
        </>
      )}

      {chosenActiveComments === `Questions` && (
        <>
          <div className={`flex flex-col gap-12`}>
            {sortedQuestions.length === 0 && optimisticQuestions.length === 0 && (
              <>
                <p className={`text-zinc-800`}>No questions yet. Be the first one to ask!</p>
              </>
            )}

            {optimisticQuestions.length > 0 && optimisticQuestions.map((question) => (
              <Comment
                key={question.id}
                propertyId={propertyId}
                commentMode={'PropertyQuestion'}
                id={question.id}
                initials={question.user.initials}
                abbrInitials={abbreviateInitials(question.user.initials)}
                text={question.comment}
                likes={question.likes}
                createdAt={formatDate(question.createdAt)}
                responses={question.replies}
                userType={`USER`}
                newReplies={newQuestionReplies.filter(reply => reply.commentId === question.id)}
              />
            ))}
            {sortedQuestions.length > 0 && sortedQuestions
              .slice(0, activePageQuestions * itemsPerPage)
              .map(function(question) {
                return (
                  <Comment
                    key={question.id}
                    propertyId={propertyId}
                    commentMode={'PropertyQuestion'}
                    id={question.id}
                    initials={question.user.initials}
                    abbrInitials={abbreviateInitials(question.user.initials)}
                    text={question.comment}
                    likes={question.likes}
                    createdAt={formatDate(question.createdAt)}
                    responses={question.replies}
                    userType={`USER`}
                    newReplies={newQuestionReplies.filter(reply => reply.commentId === question.id)}
                  />
                );
              })}
          </div>

          {sortedQuestions.length > activePageQuestions * itemsPerPage && (
            <>
              <div className={`w-fit mt-14`}
                   onClick={() => setActivePageQuestions(activePageQuestions + 1)}
              >
                <Button label={`See More`} mode={`md`} linearGradient />
              </div>
            </>
          )}

          {sortedQuestions.length <= activePageQuestions * itemsPerPage && activePageQuestions > 1 && (
            <>
              <div className={`w-fit mt-14`}
                   onClick={() => {
                     scrollIntoViewFunc(`.comment-heading`);
                     setActivePageQuestions(1);
                   }}
              >
                <Button btnVariant={`grey`} label={`Hide Questions`} mode={`lg`} linearGradient />
              </div>
            </>
          )}
        </>
      )}

      {chosenActiveComments === `Reviews` && propertyFor === `rent` && (
        <>
          <div className={`flex flex-col gap-12`}>

            {sortedReviews.length === 0 && optimisticReviews.length === 0 && (
              <p className={`text-zinc-800`}>No reviews yet. Be the first one to leave!</p>
            )}

            {optimisticReviews.length > 0 && optimisticReviews.map((review) => (
              <Comment
                key={review.id}
                rating={review.rated.overall}
                propertyId={propertyId}
                commentMode={'PropertyReview'}
                id={review.id}
                initials={review.user.initials}
                abbrInitials={abbreviateInitials(review.user.initials)}
                text={review.comment}
                likes={review.likes}
                createdAt={formatDate(review.createdAt)}
                responses={review.replies}
                userType={`USER`}
                newReplies={newReviewReplies.filter(reply => reply.commentId === review.id)}
              />
            ))}

            {sortedReviews.length > 0 && sortedReviews
              .slice(0, activePage * itemsPerPage)
              .map(function(review) {
                return (
                  <Comment
                    key={review.id}
                    propertyId={propertyId}
                    commentMode={'PropertyReview'}
                    id={review.id}
                    rating={review.rated.overall}
                    initials={review.user.initials}
                    abbrInitials={abbreviateInitials(review.user.initials)}
                    text={review.comment}
                    likes={review.likes}
                    createdAt={formatDate(review.createdAt)}
                    responses={review.replies}
                    userType={`USER`}
                    newReplies={newReviewReplies.filter(reply => reply.commentId === review.id)}
                  />
                );
              })}
          </div>

          {sortedReviews.length > activePage * itemsPerPage && (
            <>
              <div className={`w-fit mt-14`}
                   onClick={() => setActivePage(activePage + 1)}
              >
                <Button label={`See More`} mode={`md`} linearGradient />
              </div>
            </>
          )}

          {sortedReviews.length <= activePage * itemsPerPage && activePage > 1 && (
            <>
              <div className={`w-fit mt-14`}
                   onClick={() => {
                     scrollIntoViewFunc(`.comment-heading`);
                     setActivePage(1);
                   }}
              >
                <Button btnVariant={`grey`} label={`Hide Reviews`} mode={`lg`} linearGradient />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}