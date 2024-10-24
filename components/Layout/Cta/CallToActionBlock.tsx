// 'use client';

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
        <div className={`flex flex-col max-w-[1393px] h-[518px] mx-auto bg-slate-950 rounded-2xl pt-20`}>
          <div className={`text-center text-white`}>
            <h2 className={`text-6xl font-bold`}>Jump in! <br className={`mb-2`} />
              Sign up to <span
                className={`bg-clip-text text-transparent bg-linear-main-red`}>viaproperty</span> news!</h2>
            <p className={`mt-6 mb-11`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor</p>
            <FormInputAndButton inputPlaceholder={`Type your email`} inputName={`email`} btnLabel={`Sign up`}
                                inputType={`email`} />

            <div className={`flex gap-7 items-center mx-auto justify-center`}>
              <FeatureList text={`You’ll receive latest news!`} />
              <FeatureList text={`Cancel any time!`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
