'use client';

import Button from '@/components/UI/Button/Button';
import React from 'react';
import FormInputAndButton from '@/components/Layout/Form/FormInputAndButton';
import FeatureList from '@/components/UI/FeatureList/FeatureList';
import ButtonEmpty from '@/components/UI/Button/ButtonEmpty';

type CallToActionBlockType = {
  type?: `newsletter` | `sell-rent`;
  fullScreen?: boolean;
  paragraph?: string;
  rounded?: boolean;
  // children: ReactNode;
}

const paragraphBoilerplateText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor.`;

export default function
  CallToActionBlock({
                      type = `newsletter`,
                      fullScreen = false,
                      paragraph = paragraphBoilerplateText,
                      rounded = true
                    }: CallToActionBlockType) {
  const newsletterFeatures = [`You’ll receive latest news!`, `Cancel any time!`];
  const sellOrRentFeatures = [`Excellent Viaproperty Support!`, `Free Listing - No Hidden Fees!`];
  return (
    <>
      <section className={`mb-20`}>
        <div
          className={`flex flex-col ${!fullScreen ? `max-w-[1393px]` : `w-screen`} bp-732:h-[518px] h-full bp-732:pb-0 pb-20 mx-auto bg-slate-950 ${rounded ? `rounded-2xl` : ``} pt-20
          px-6`}>
          <div className={`text-center text-white`}>
            {type === `newsletter` && (
              <>
                <h2 className={`bp-1009:text-6xl text-4xl font-bold`}>Jump in! <br className={`mb-2`} />
                  Sign up to <span
                    className={`bg-clip-text text-transparent bg-linear-main-red`}>viaproperty</span> news!</h2>
              </>
            )}
            {type === `sell-rent` && (
              <>
                <h2 className={`bp-1009:text-6xl text-4xl font-bold`}>Want to <span
                  className={`bg-clip-text inline-block text-transparent mb-2 bg-linear-main-red`}>send or rent property?</span>
                  <br />
                  Just do it in a few clicks!</h2>
              </>
            )}
            <p className={`mt-6 mb-11`}>{paragraph}</p>
            {type === `newsletter` && (
              <>
                <FormInputAndButton inputPlaceholder={`Type your email`} inputName={`email`} btnLabel={`Sign Up`}
                                    inputType={`email`} />
              </>
            )}

            {type === `sell-rent` && (
              <div className={`flex gap-5 items-center justify-center mb-8 bp-620:flex-row flex-col`}>
                <Button type={`button`} mode={`md`} label={`Sell Property`} />
                <span className={`uppercase text-xl text-white font-semibold`}>or</span>
                <ButtonEmpty label={`Rent property!`} />
              </div>
            )}

            <div className={`flex flex-col bp-620:flex-row gap-7 items-center mx-auto justify-center`}>
              {type === `newsletter` && newsletterFeatures.map((feature, index) => (
                <FeatureList key={index} text={feature} />
              ))}
              {type === `sell-rent` && sellOrRentFeatures.map((feature, index) => (
                <FeatureList key={index} text={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
