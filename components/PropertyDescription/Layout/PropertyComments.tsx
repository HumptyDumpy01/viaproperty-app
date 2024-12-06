'use client';

import BadgeRounded from '@/components/UI/Badge/BadgeRounded';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import { useState } from 'react';
import Button from '@/components/UI/Button/Button';
import Comment from '@/components/Layout/Comment/Comment';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';
import { abbreviateInitials } from '@/utils/functions/abbreviateInitials';
import { formatDate } from '@/utils/functions/formatDate';

export type PropertyRatedType = {
  overall: number;
};

export type UserType = `USER` | `LANDLORD`;

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
  replies: {
    replierId: string;
    replierInitials: string;
    userType: UserType;
    comment: string;
    createdAt: string;
  }[];
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
  replies: {
    replierId: string;
    replierInitials: string;
    userType: UserType;
    comment: string;
    createdAt: string;
  }[];
}

export type PropertyCommentsType = {
  propertyFor: PropertyForType;
  reviews: PropertyReviewsType[];
  questions: PropertyQuestionsType[];
};

export type CommentType = `Reviews` | `Questions`;

export default function PropertyComments({ propertyFor, reviews, questions }: PropertyCommentsType) {
  const [activeFilter, setActiveFilter] = useState<ActiveFilterTypeQuestions>(`Date`);
  const [activeComments, setActiveComments] = useState<CommentType>(
    propertyFor === `rent` ? `Reviews` : `Questions`
  );

  const handleSetActiveComments = (switchTo: CommentType | ActiveFilterTypeQuestions) => {
    if (switchTo === 'Reviews' || switchTo === 'Questions') {
      setActiveComments(switchTo);
    }
  };

  const handleSetActiveFilter = (switchTo: CommentType | ActiveFilterTypeQuestions) => {
    if (switchTo === 'Date' || switchTo === 'Most Liked' || switchTo === 'Answered'
      || switchTo === 'Positive' || switchTo === 'Negative') {
      setActiveFilter(switchTo);
    }
  };

  return (
    <>
      <div>
        <div className={`flex bp-620:gap-14 flex-col bp-620:flex-row mb-7 bp-620:mb-0`}>
          <h2 className={`text-4xl bg-clip-text text-transparent bg-linear-main-red font-bold flex w-fit
                  mb-8`}>Comments</h2>
          <div className={`flex gap-3 flex-wrap`}>
            {propertyFor === `rent` && (
              <>
                <div>
                  <BadgeRounded setActiveFilter={handleSetActiveComments} label={`Reviews`} color={`blue`} type={`lg`}
                                state={activeComments} />
                </div>
              </>
            )}
            <div>
              <BadgeRounded setActiveFilter={handleSetActiveComments} label={`Questions`} color={`blue`} type={`lg`}
                            state={activeComments} />
            </div>
          </div>
        </div>
        {activeComments === `Questions` && questions.length > 0 && (
          <>
            <div className={`flex items-center gap-2.5 mb-12 overflow-x-auto scrollbar-thin`}>
              <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Date`} state={activeFilter} />
              <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Most Liked`} state={activeFilter} />
              <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Answered`} state={activeFilter} />
            </div>
          </>
        )}
        {activeComments === `Reviews` && propertyFor === `rent` && reviews.length > 0 && (
          <>
            <div className={`flex items-center gap-2.5 mb-12 overflow-x-auto scrollbar-thin`}>
              <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Date`} state={activeFilter} />
              <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Most Liked`} state={activeFilter} />
              <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Positive`} state={activeFilter} />
              <BadgeRounded setActiveFilter={handleSetActiveFilter} label={`Negative`} state={activeFilter} />
            </div>
          </>
        )}

        {activeComments === `Questions` && questions.length > 0 && (
          <>
            <div className={`flex flex-col gap-12`}>
              {questions.map(function(question) {
                return (
                  <>
                    <Comment initials={question.user.initials}
                             abbrInitials={abbreviateInitials(question.user.initials)}
                             text={question.comment}
                             likes={question.likes.length}
                             createdAt={formatDate(question.createdAt)}
                             responses={question.replies} userType={`USER`}
                    />
                  </>
                );
              })}
            </div>

            {questions.length > 3 && activeComments === `Questions` && (
              <div className={`w-fit mt-14`}>
                <Button label={`See more`} mode={`md`} linearGradient />
              </div>
            )}
          </>
        )}

        {activeComments === `Reviews` && propertyFor === `rent` && (
          <>
            <div className={`flex flex-col gap-12`}>

              {reviews.length === 0 && (
                <p className={`text-zinc-800`}>No reviews yet. Be the first one to leave!</p>
              )}

              {reviews.length > 0 && reviews.map(function(review) {
                // format 2024-12-06T10:47:48.578Z on August 2024, May 02 at 14:55
                return (
                  <>
                    <Comment rating={review.rated.overall} initials={review.user.initials}
                             abbrInitials={abbreviateInitials(review.user.initials)}
                             text={review.comment}
                             likes={review.likes.length} createdAt={formatDate(review.createdAt)}
                             responses={review.replies} userType={`USER`}
                    />
                  </>
                );
              })}
            </div>

            {reviews.length > 3 && activeComments === `Reviews` && (
              <>
                <div className={`w-fit mt-14`}>
                  <Button label={`See more`} mode={`md`} linearGradient />
                </div>
              </>
            )}
            {/* TODO: HANDLE THE BTN FOR QUESTIONS */}
          </>
        )}

      </div>
    </>
  );
}