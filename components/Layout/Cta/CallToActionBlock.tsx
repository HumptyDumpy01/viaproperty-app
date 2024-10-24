'use client';

/*type CallToActionBlockType = {
  // children: ReactNode;
}*/

import React from 'react';
import FormInputAndButton from '@/components/Layout/Form/FormInputAndButton';
import FeatureList from '@/components/UI/FeatureList/FeatureList';

export default function CallToActionBlock(/*{  }: CallToActionBlockType*/) {
  return (
    <>
      <section className={`mb-20`}>
        <div
          className={`flex flex-col max-w-[1393px] bp-732:h-[518px] h-full bp-732:pb-0 pb-20 mx-auto bg-slate-950 rounded-2xl pt-20
          px-6`}>
          <div className={`text-center text-white`}>
            <h2 className={`bp-1009:text-6xl text-4xl font-bold`}>Jump in! <br className={`mb-2`} />
              Sign up to <span
                className={`bg-clip-text text-transparent bg-linear-main-red`}>viaproperty</span> news!</h2>
            <p className={`mt-6 mb-11`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor</p>
            <FormInputAndButton inputPlaceholder={`Type your email`} inputName={`email`} btnLabel={`Sign Up`}
                                inputType={`email`} />

            <div className={`flex flex-col bp-620:flex-row gap-7 items-center mx-auto justify-center`}>
              <FeatureList text={`You’ll receive latest news!`} />
              <FeatureList text={`Cancel any time!`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
