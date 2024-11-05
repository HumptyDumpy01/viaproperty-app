'use client';

import { switchSteps } from '@/utils/functions/sell/switchSteps';
import BadgeStages from '@/components/UI/Badge/BadgeStages';
import FirstForm from '@/components/Sell/FirstForm';
import SecondForm from '@/components/Sell/SecondForm';
import ThirdForm from '@/components/Sell/ThirdForm';
import FourthForm from '@/components/Sell/FourthForm';
import FifthForm from '@/components/Sell/FifthForm';
import HighlightText from '@/components/Typography/HighlightText';
import { useState } from 'react';
import { activeStateType } from '@/components/Sell/SellInputContent';
import BulkyLink from '@/components/UI/Link/BulkyLink';
import Link from 'next/link';
import DeleteAdvert from '@/components/Sell/DeleteAdvert';

type SellFormsType = {
  mode: `createAdvert` | `editCurrentAdvert`;
  // children: ReactNode;
}
export type ActiveEditStepType = `Step 1` | `Step 2` | `Step 3` | `Step 4` | `Delete Advert`;

export default function SellForms({ mode }: SellFormsType) {

  const createAdvertStack = {
    stepOne: `active`,
    stepTwo: `disabled`,
    stepThree: `disabled`,
    stepFour: `disabled`,
    finishingSteps: `disabled`
  } as activeStateType;

  const [activeState, setActiveState] = useState<activeStateType>(createAdvertStack);
  const [activeEditStage, setActiveEditStage] = useState<ActiveEditStepType>(`Step 1`);

  const heading = activeState.stepOne === `active` ? `Fill in the most important!`
    : activeState.stepTwo === `active` ? `Add some details!`
      : activeState.stepThree === `active` ? `Good! Let's intersperse your advert with extras!`
        : activeState.stepFour === `active` ? `We are so close! Let's finish the advert!` : activeState.finishingSteps === `completed` ? `Huzzah! A New advert was successfully created!` : ``;

  return (
    <>
      <div className={`mb-7`}>
        {mode === `editCurrentAdvert` && (
          <Link className={`flex items-center gap-2 bg-clip-text text-transparent bg-linear-main-red font-bold
            border  border-red-500 rounded-full px-4 py-2 text-[15.5px] w-fit mb-5`}
                href={`/account-settings?page=account-settings&subpage=my-adverts`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
              <path
                d="M4.87683 9.16541C4.72949 9.31555 4.52967 9.3999 4.32133 9.3999C4.11298 9.3999 3.91316 9.31555 3.76582 9.16541L0.230049 5.56131C0.0827471 5.41112 -1.32019e-06 5.20744 -1.33876e-06 4.99507C-1.35732e-06 4.7827 0.082747 4.57902 0.230049 4.42882L3.76582 0.824728C3.91401 0.678836 4.11248 0.598108 4.3185 0.599933C4.52451 0.601758 4.72158 0.685988 4.86726 0.834484C5.01294 0.982979 5.09558 1.18386 5.09737 1.39385C5.09916 1.60385 5.01996 1.80616 4.87683 1.95721L2.74987 4.19416L10.2143 4.19416C10.4227 4.19416 10.6225 4.27854 10.7699 4.42874C10.9172 4.57894 11 4.78265 11 4.99507C11 5.20748 10.9172 5.4112 10.7699 5.5614C10.6225 5.7116 10.4227 5.79598 10.2143 5.79598L2.74987 5.79598L4.87683 8.03292C5.02414 8.18311 5.10688 8.38679 5.10688 8.59916C5.10688 8.81154 5.02414 9.01521 4.87683 9.16541Z"
                fill="#FB3838" />
            </svg>
            Go Back</Link>
        )}
        <h2 className={`text-3xl bg-clip-text text-transparent bg-linear-main-red font-bold
          mb-5`}>{mode === `createAdvert` ? heading : `Let's Edit your advert!`}</h2>
        <p className={`text-zinc-800`}>{
          mode === `createAdvert` ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
            : `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        }</p>
      </div>


      {mode === `editCurrentAdvert` && (
        <>
          <div className={`flex gap-2.5 items-center overflow-x-auto scrollbar-thin`}>
            <div onClick={() => setActiveEditStage(`Step 1`)}>
              <BadgeStages state={activeEditStage === `Step 1` ? `active` : `completed`} label={`Step 1`} />
            </div>
            <div onClick={() => setActiveEditStage(`Step 2`)}>
              <BadgeStages state={activeEditStage === `Step 2` ? `active` : `completed`} label={`Step 2`} />
            </div>
            <div onClick={() => setActiveEditStage(`Step 3`)}>
              <BadgeStages state={activeEditStage === `Step 3` ? `active` : `completed`} label={`Step 3`} />
            </div>
            <div onClick={() => setActiveEditStage(`Step 4`)}>
              <BadgeStages state={activeEditStage === `Step 4` ? `active` : `completed`} label={`Step 4`} />
            </div>

            <div onClick={() => setActiveEditStage(`Delete Advert`)}>
              <BadgeStages state={`active`} label={`Delete Advert`} />
            </div>
          </div>
        </>
      )}

      {mode === `createAdvert` && (
        <>
          <div className={`flex gap-2.5 items-center overflow-x-auto scrollbar-thin`}>
            <div
              onClick={activeState.stepOne === `completed` ? () => switchSteps(`stepOne`, setActiveState) : undefined}>
              <BadgeStages state={activeState.stepOne} label={`Step 1`} object={`stepOne`} />
            </div>
            <div
              onClick={activeState.stepTwo === `completed` ? () => switchSteps(`stepTwo`, setActiveState) : undefined}>
              <BadgeStages state={activeState.stepTwo} label={`Step 2`} object={`stepTwo`} />
            </div>
            <div className={``}
                 onClick={activeState.stepThree === `completed` ? () => switchSteps(`stepThree`, setActiveState) : undefined}>
              <BadgeStages state={activeState.stepThree} label={`Step 3`} object={`stepThree`} />
            </div>
            <div
              onClick={activeState.stepFour === `completed` ? () => switchSteps(`stepFour`, setActiveState) : undefined}>
              <BadgeStages state={activeState.stepFour} label={`Step 4`} object={`stepFour`} />
            </div>
            <div
              onClick={activeState.stepFour === `completed` ? () => switchSteps(`finishingSteps`, setActiveState) : undefined}>
              <BadgeStages state={activeState.finishingSteps} label={`Finishing Steps`} object={`finishingSteps`} />
            </div>
          </div>
        </>
      )}

      {mode === `createAdvert` && (
        <>
          {activeState.stepOne === `active` && <FirstForm mode={`createAdvert`} setActiveState={setActiveState} />}
          {activeState.stepTwo === `active` && <SecondForm mode={`createAdvert`} setActiveState={setActiveState} />}
          {activeState.stepThree === `active` && <ThirdForm mode={`createAdvert`} setActiveState={setActiveState} />}
          {activeState.stepFour === `active` && <FourthForm mode={`createAdvert`} setActiveState={setActiveState} />}
          {activeState.finishingSteps === `active` &&
            <FifthForm mode={`createAdvert`} setActiveState={setActiveState} />}

          {activeState.finishingSteps === `completed` && (
            <div className={`mt-9`}>
              <p className={`leading-relaxed text-zinc-900 max-w-4xl mb-12`}>Ut enim ad minim veniam, quis nostrud
                exercitation ullamco
                laboris nisi ut
                aliquip ex ea commodo consequat.
                Duis aute irure dolor in <HighlightText
                  text={`reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} /></p>

              <div className={`flex flex-col gap-6`}>
                <BulkyLink linkStyle={`red`} href={`#`} label={`See My Adverts`} />
                <BulkyLink linkStyle={`emptyBlack`} href={`/`} label={`Home`} />
              </div>
            </div>
          )}
        </>
      )}

      {mode === `editCurrentAdvert` && (
        <>
          {activeEditStage === `Step 1` && <FirstForm defaultValues={{
            title: `Arizona Cottage`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            location: `Arizona`,
            locationDescription: `Lorem ipsum dolor sit amet, consectetur.`,
            images: [],
            ownership: `freehold`,
            propertyArea: 200,
            price: 150000
          }} mode={`editAdvert`} />}

          {activeEditStage === `Step 2` && <SecondForm defaultValues={{
            bedrooms: 2,
            baths: 2,
            parkingSlots: 1,
            showers: 1,
            kitchens: 1,
            beds: 2,
            propertyTags: [`Garden`, `Balcony`, `Swimming Pool`, `Fireplace`, `Terrace`, `Furnished`, `Basement`, `Air Conditioning`, `Security System`],
            discount: 3,
            featureDescription: [{
              heading: `Lorem Ipsum dolor sit amet`,
              shortDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
              images: [`https://via.placeholder.com/150`, `https://via.placeholder.com/150`, `https://via.placeholder.com/150`]
            }]

          }} mode={`editAdvert`} />}
          {activeEditStage === `Step 3` && <ThirdForm defaultValues={{
            floorPlans: [{
              heading: `Overall Building`,
              shortDescription: `This is the overall building floor plan.`,
              images: [`https://via.placeholder.com/150`, `https://via.placeholder.com/150`, `https://via.placeholder.com/150`]
            }],

            contactAndViewingArrangements: [
              {
                initials: `John Doe`,
                phones: [`+1234567890`, `+1234567890`]
              },
              {
                initials: `Jane Doe`,
                phones: [`+1234567890`, `+1234567890`]
              }
            ],

            priceAndTaskHistory: {
              history: `The task history of the property was..`
            }
          }} mode={`editAdvert`} />}
          {activeEditStage === `Step 4` && <FourthForm defaultValues={{
            extraPricingFeatures: [{
              title: `Garage`,
              price: 100
            }, {
              title: `Garden`,
              price: 200
            }],
            videoTour: `https://www.youtube.com/watch?v=9bZkp7q19f0`
          }} mode={`editAdvert`} />}
          {activeEditStage === `Delete Advert` && (
            <>
              <DeleteAdvert />
            </>
          )}
        </>
      )}
    </>
  );
}
