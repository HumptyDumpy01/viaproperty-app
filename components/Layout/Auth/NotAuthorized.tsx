'use client';

/*type NotAuthorizedType = {
  // children: ReactNode;
}*/

import Lottie from 'lottie-react';
import AnimationNotFoundJSON from '@/animations/animation-not-found.json';
import HighlightText from '@/components/Typography/HighlightText';
import BulkyLink from '@/components/UI/Link/BulkyLink';

export default function NotAuthorized(/*{  }: NotAuthorizedType*/) {
  return (
    <>
      <div
        className={`max-w-screen-bp-1009 flex flex-col items-center bp-896:items-start bp-896:flex-row gap-7 m-auto`}>
        <div className={`flex w-96 h-56 items-center justify-center mt-7 bp-620:mt-0`}>
          <Lottie className={`w-96`} animationData={AnimationNotFoundJSON} />
        </div>
        <div className={`flex flex-col`}>
          <span
            className={`uppercase bg-clip-text text-transparent inline-block bg-linear-main-red font-bold
            px-4 py-2 border border-red-500 w-fit rounded-full mb-5`}>401 not authorized</span>
          <h1 className={`bg-clip-text mb-6 leading-normal text-transparent bg-linear-main-red font-bold text-3xl`}>Only
            logged in users can start
            selling
            or renting their property!</h1>
          <p className={`text-zinc-800 leading-relaxed mb-10`}>Lorem ipsum dolor sit amet, <HighlightText
            text={`consectetur adipiscing elit, `} />sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>

          <div className={`flex gap-4 items-center flex-col bp-620:flex-row justify-center bp-896:justify-start`}>
            <BulkyLink linkStyle={`red`} href={`/login`} label={`Log in`} />
            <span className={`text-zinc-900 font-semibold`}>OR</span>
            <BulkyLink linkStyle={`emptyBlack`} href={`/register`} label={`Register`} />
          </div>

        </div>
      </div>
    </>
  );
}
