// 'use client';

import StarRating from '@/components/UI/Input/StarRating';
import ViapropertyButton from '@/components/UI/Button/ViapropertyButton';
import React, { FormEvent, ReactNode, useState } from 'react';
import { PropertyForType } from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';
import { LeaveCommentBadgeType } from '@/components/PropertyDescription/Layout/LeaveCommentContainer';
import { propertyQuestionSchema } from '@/utils/schemas/propertyQuestionSchema';
import ErrorMessage from '@/components/Layout/Error/ErrorMessage';


type LeaveCommentType = {
  available: {
    reviews: boolean;
    questions: boolean;
  };
  badges: ReactNode;
  propertyFor: PropertyForType;
  activeLeaveCommentBadge: LeaveCommentBadgeType;
}

export default function LeaveComment({ badges, available, propertyFor, activeLeaveCommentBadge }: LeaveCommentType) {
  const [errorMessage, setErrorMessage] = useState<string>(``);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries());

    if (activeLeaveCommentBadge === `Ask Question`) {
      const validate = propertyQuestionSchema.safeParse(results);

      if (!validate.success) {
        setErrorMessage(validate.error.errors[0].message);
        return;
      }
    } else {

    }
    console.log(results);
  }

  return (
    <>
      <div className={``}>
        <h2 className={`text-4xl leading-tight bg-clip-text text-transparent bg-linear-main-dark-blue font-bold flex w-fit
                mb-8`}>Share your Experience or Ask <br /> a Question</h2>

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
            <h3 className={`bg-clip-text text-transparent bg-linear-main-dark-blue font-bold
                  text-[33px] w-fit mb-8`}>{available.reviews && propertyFor === `rent` ? `Leave Your Review` : `Ask Landlord about anything!`}</h3>
            <div className={`max-w-[734px]`}>
                    <textarea required
                              name={`comment`}
                              className={`w-full text-left p-6 flex h-52 border border-zinc-200 rounded-2xl`}
                              placeholder={`Share your thoughts! Your comment should contain at least 10 characters and less than 700.`} />
            </div>
          </div>
          <div>
            <ViapropertyButton label={`Submit`} bgColor={`bg-linear-main-dark-blue`} />
          </div>
        </form>
      </div>
    </>
  );
}
