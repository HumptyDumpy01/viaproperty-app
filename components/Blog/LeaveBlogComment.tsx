// 'use client';

/*type LeaveBlogCommentType = {
  // children: ReactNode;
}*/

import BadgeRounded from '@/components/UI/Badge/BadgeRounded';
import StarRating from '@/components/UI/Input/StarRating';
import ViapropertyButton from '@/components/UI/Button/ViapropertyButton';
import React from 'react';

export default function LeaveBlogComment(/*{  }: LeaveBlogCommentType*/) {
  return (
    <>
      <div className={``}>
        <h2 className={`text-4xl leading-tight bg-clip-text text-transparent bg-linear-main-dark-blue font-bold flex w-fit
                mb-8`}>Share your Experience or Ask <br /> a Question</h2>

        <div className={`flex gap-3 mb-9`}>
          <BadgeRounded label={`Leave Review`} setActiveFilter={() => {
          }} />
        </div>

        <form className={`flex flex-col gap-8`}>
          <div className={`flex flex-col gap-6`}>
            <div className={`flex bp-790:items-center items-start bp-790:gap-16 gap-5 flex-col bp-790:flex-row`}>
              <StarRating name={`quality`} label={`Quality`} />
              <StarRating label={`Joy`} name={`joy`} />
            </div>

            <div className={`flex bp-790:items-center items-start bp-790:gap-16 gap-5 flex-col bp-790:flex-row`}>
              <StarRating name={`informativeness`} label={`Informativeness`} />
              <StarRating name={`duration`} label={`Duration`} />
            </div>

          </div>
          <div>
            <h3 className={`bg-clip-text text-transparent bg-linear-main-dark-blue font-bold
                  text-[33px] w-fit mb-8`}>Leave Your Review</h3>
            <div className={`max-w-[734px]`}>
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
