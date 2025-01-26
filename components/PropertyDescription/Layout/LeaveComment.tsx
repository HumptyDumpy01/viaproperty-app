import StarRating from '@/components/UI/Input/StarRating';
import ViapropertyButton from '@/components/UI/Button/ViapropertyButton';
import React, { FormEvent, ReactNode, useState } from 'react';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';
import { LeaveCommentBadgeType } from '@/components/PropertyDescription/Layout/LeaveCommentContainer';
import { propertyQuestionSchema } from '@/utils/schemas/propertyQuestionSchema';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';
import { useUserDataOnClient } from '@/hooks/queries/useUserDataOnClient';
import { Skeleton } from '@mui/material';
import { useCreatePropertyQuestion } from '@/hooks/mutations/useCreatePropertyQuestion';
import { scrollIntoViewFunc } from '@/utils/functions/scrollIntoViewFunc';
import gql from 'graphql-tag';
import { useCartDispatch } from '@/store/hooks';
import { propertyDescriptionSliceActions } from '@/store/features/propertyDescription';

const QUESTION_ADDED_SUBSCRIPTION = gql`
    subscription OnQuestionAdded {
        questionAdded {
            id
            propertyId
            userId
            likes
            createdAt
            replies {
                comment
            }
        }
    }
`;

type LeaveCommentType = {
  available: {
    reviews: boolean;
    questions: boolean;
  };
  badges: ReactNode;
  propertyFor: PropertyForType;
  activeLeaveCommentBadge: LeaveCommentBadgeType;
  propertyId: string;
}

export type AddedQuestionType = {
  id: string;
  propertyId: string;
  userId: string;
  likes: string[],
  createdAt: string;
  replies: [];
}

export default function LeaveComment({
                                       badges,
                                       available,
                                       propertyFor,
                                       activeLeaveCommentBadge,
                                       propertyId
                                     }: LeaveCommentType) {
  const dispatch = useCartDispatch();
  const { userData, loading } = useUserDataOnClient();
  const { createQuestion, loading: creatingQuestion } = useCreatePropertyQuestion();
  const [errorMessage, setErrorMessage] = useState<string>(``);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries());

    if (activeLeaveCommentBadge === `Ask Question`) {
      const validate = propertyQuestionSchema.safeParse(results);

      if (!validate.success) {
        scrollIntoViewFunc(`.comment-secondary-heading`);
        setErrorMessage(validate.error.errors[0].message);
        return;
      }

      try {
        if (!userData?.initials) {
          scrollIntoViewFunc(`.comment-secondary-heading`);
          setErrorMessage(`You need to be logged in to ask a question. Please refresh the page and try again.`);
          return;
        }
        const addedQuestion = await createQuestion({
          propertyId,
          userId: userData?.id,
          comment: (results.comment as string).trim()
          // @ts-ignore
        }).then((res) => res.data.createPropertyQuestion as AddedQuestionType);

        console.log(`Executing addedQuestion: `, addedQuestion);
        console.log(userData.initials);

        dispatch(propertyDescriptionSliceActions.pushOptimisticPropertyQuestion({
          createdAt: addedQuestion.createdAt,
          user: {
            initials: userData.initials
          },
          id: addedQuestion.id,
          comment: results.comment.toString(),
          likes: addedQuestion.likes,
          userType: `USER`,
          replies: []
        }));

        dispatch(propertyDescriptionSliceActions.changeActiveComments('Questions'));
        scrollIntoViewFunc(`.comment-heading`);

      } catch (e: any) {
        scrollIntoViewFunc(`.comment-secondary-heading`);
        setErrorMessage(`Error creating question: ${
          e.message || `An error occurred while creating your question.`
        }`);
      }
    } else {
      // Handle review submission
    }
    // console.log(results);
  }

  return (
    <>
      <h2
        className={`text-4xl leading-tight bg-clip-text text-transparent bg-linear-main-dark-blue font-bold flex w-fit mb-8`}>
        Share your Experience or Ask <br /> a Question
      </h2>

      <div className={`flex gap-3 mb-9`}>
        {badges}
      </div>

      {errorMessage && (
        <div className={`mb-5`}>
          <ErrorMessage errorMessage={errorMessage} />
        </div>
      )}
      <form onSubmit={handleSubmit} className={`flex flex-col gap-8`}>
        {available.reviews && propertyFor === `rent` && (
          <div className={`flex flex-col gap-6`}>
            <div className={`flex bp-790:items-center items-start bp-790:gap-16 gap-5 flex-col bp-790:flex-row`}>
              <StarRating name={`location`} label={`Location`} />
              <StarRating label={`Security`} name={`security`} />
            </div>

            <div className={`flex bp-790:items-center items-start bp-790:gap-16 gap-5 flex-col bp-790:flex-row`}>
              <StarRating name={`condition`} label={`Condition`} />
              <StarRating name={`noiseLevel`} label={`Noise Level`} />
            </div>

            <div className={`flex bp-790:items-center items-start bp-790:gap-16 gap-5 flex-col bp-790:flex-row`}>
              <StarRating name={`ownership`} label={`Ownership`} />
              <StarRating name={`amenities`} label={`Amenities`} />
            </div>
          </div>
        )}
        <div>
          <h3 className={`bg-clip-text text-transparent bg-linear-main-dark-blue font-bold text-[33px] w-fit mb-8
            comment-secondary-heading`}>
            {available.reviews && propertyFor === `rent` ? `Leave Your Review` : `Ask Landlord about anything!`}
          </h3>
          <div className={`max-w-[734px]`}>
              <textarea maxLength={1000} minLength={5} required
                        name={`comment`}
                        className={`w-full text-left p-6 flex h-52 border border-zinc-200 rounded-2xl`}
                        placeholder={`Share your thoughts! Your comment should contain at least 10 characters and less than 700.`} />
          </div>
        </div>
        <div>
          {loading || creatingQuestion ? (
            <Skeleton variant={`rounded`} sx={{ borderRadius: `20px` }} width={200} height={65} />
          ) : (
            <ViapropertyButton disabled={loading} label={`Submit`} bgColor={`bg-linear-main-dark-blue`} />
          )}
        </div>
      </form>
    </>
  );
}
