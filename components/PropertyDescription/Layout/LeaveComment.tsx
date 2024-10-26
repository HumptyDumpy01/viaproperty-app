// 'use client';

import StarRating from '@/components/UI/Input/StarRating';
import ViapropertyButton from '@/components/UI/Button/ViapropertyButton';
import React, { ReactNode } from 'react';


type LeaveCommentType = {
  available: {
    reviews: boolean;
    questions: boolean;
  };
  badges: ReactNode;
}

export default function LeaveComment({ badges, available }: LeaveCommentType) {
  return (
    <>
      <div className={``}>
        <h2 className={`text-4xl leading-tight bg-clip-text text-transparent bg-linear-main-dark-blue font-bold flex w-fit
                mb-8`}>Share your Experience or Ask <br /> a Question</h2>

        <div className={`flex gap-3 mb-9`}>
          {badges}
        </div>

        <form className={`flex flex-col gap-8`}>
          {available.reviews && (
            <div className={`flex flex-col gap-6`}>
              <div className={`flex items-center gap-16`}>
                <StarRating name={`location`} label={`Location`} />
                <StarRating label={`Security`} name={`security`} />
              </div>

              <div className={`flex items-center gap-16`}>
                <StarRating name={`condition`} label={`Condition`} />
                <StarRating name={`noiseLevel`} label={`Noise Level`} />
              </div>

              <div className={`flex items-center gap-16`}>
                <StarRating name={`ownership`} label={`Ownership`} />
                <StarRating name={`amenities`} label={`Amenities`} />
              </div>
            </div>
          )}
          <div>
            <h3 className={`bg-clip-text text-transparent bg-linear-main-dark-blue font-bold
                  text-[33px] w-fit mb-8`}>{available.reviews ? `Leave Your Review` : `Ask Landlord about anything!`}</h3>
            <div className={`w-[734px]`}>
                    <textarea required
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
