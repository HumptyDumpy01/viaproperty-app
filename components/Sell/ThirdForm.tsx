// 'use client';

import { scrollIntoViewFunc } from '@/utils/functions/scrollIntoViewFunc';
import HighlightText from '@/components/Typography/HighlightText';
import TagBadge from '@/components/UI/Badge/TagBadge';
import Features from '@/components/Sell/Features';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import ChooseImage from '@/components/UI/Input/ChooseImage/ChooseImage';
import { activeStateType } from '@/components/Sell/SellInputContent';
import { setActiveStateFunc } from '@/utils/functions/sell/setActiveStateFunc';
import Button from '@/components/UI/Button/Button';

type ThirdFormType = {
  setActiveState?: (prevState: activeStateType) => void;
  mode: `createAdvert` | `editAdvert`;
  // children: ReactNode;
}

export default function ThirdForm({ setActiveState }: ThirdFormType) {

  function setActiveStateDeclaration(activeState: activeStateType) {
    scrollIntoViewFunc(`.sell-heading`);
    if (setActiveState) {
      setActiveStateFunc(activeState, setActiveState);
    }
  }

  return (
    <>
      <form className={`flex flex-col mt-9`}>
        <h2 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-2xl
          mb-10`}>Contact & Viewing Arrangements *</h2>
        <p className={`leading-relaxed text-zinc-900`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          illo odio quas quis. Cumque
          et ipsa libero magni maxime obcaecati <HighlightText text={`possimus saepe. Impedit omnis,`} /> praesentium.
        </p>
        <div className={`mt-6 mb-9`}>
          <div className={`flex gap-3.5 items-center overflow-x-auto scrollbar-thin`}>
            <TagBadge label={`John Doe, +380..89, +380...33`} />
            <TagBadge label={`John Doe, +380..89, +380...33`} />
            <TagBadge label={`John Doe, +380..89, +380...33`} />
          </div>
        </div>
        <div className={`mb-12`}>
          <Features featureHeading={`Contact Details`}>

            <LabelAndInput labelStyle={`grey-and-small`} name={`initials`} placeholder={`e.g. John Doe`}
                           customClassNames={`bp-620:w-72 text-custom-medium`}
                           label={`Initials`} inputType={`text`} />

            <LabelAndInput labelStyle={`grey-and-small`} name={`phone`} placeholder={`e.g. +380...33`}
                           customClassNames={`bp-620:w-72 text-custom-medium`}
                           label={`Phone Number`} inputType={`number`} />
            <div className={`mt-3`}>
              <button type={`button`}
                      className={`bg-clip-text text-lg text-transparent bg-linear-main-red font-bold`}>Add
              </button>
            </div>
          </Features>
        </div>
        <div className={`mb-9`}>
          <h2 className={`text-2xl bg-clip-text text-transparent bg-linear-main-red font-bold mb-6`}>Price & Task
            History</h2>
          <p className={`leading-relaxed text-zinc-900 max-w-4xl`}>Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Alias consequuntur doloribus enim, fugiat harum
            incidunt maiores minus nulla provident <HighlightText
              text={`quam quibusdam quod ratione saepe voluptatem?`} />
          </p>
        </div>
        <div className={`mb-12`}>
          <LabelAndInput required inputType={`text`} labelStyle={`grey-and-small`} name={`propertyPriceHistory`}
                         placeholder={`e.g. The task history of the property was..`}
                         customClassNames={`max-w-[528px] h-[155px]`} type={`textarea`}
                         label={`Tell us about your task history and property price`} />
        </div>
        <div>
          <h2 className={`text-2xl bg-clip-text text-transparent bg-linear-main-red font-bold mb-6`}>Floor Plans
            (Optional)</h2>
          <p className={`leading-relaxed text-zinc-900 max-w-4xl`}>Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Alias consequuntur doloribus enim, fugiat harum
            incidunt maiores minus nulla provident <HighlightText
              text={`quam quibusdam quod ratione saepe voluptatem?`} /></p>

          <div className={`mt-6 mb-9`}>
            <div className={`flex gap-3.5 items-center overflow-x-auto scrollbar-thin`}>
              <TagBadge label={`Floor Plan 1`} />
              <TagBadge label={`Floor Plan 2`} />
            </div>
          </div>

          <div>
            <Features featureHeading={`Floor Plans`}>

              <LabelAndInput labelStyle={`grey-and-small`} name={`heading`} placeholder={`e.g. Overall Building`}
                             customClassNames={`bp-620:w-72 text-custom-medium`}
                             label={`Heading`} inputType={`text`} />

              <LabelAndInput type={`textarea`} labelStyle={`grey-and-small`} name={`short-description`}
                             placeholder={`e.g. This is the overall building floor plan.`}
                             customClassNames={`bp-620:w-72 h-36 text-custom-medium`}
                             label={`Short Description`} inputType={`text`} />
              <div className={`overflow-x-auto scrollbar-thin max-w-[270px]`}>
                <ChooseImage max={3} min={0} />
              </div>
              <div className={`mt-3`}>
                <button type={`button`}
                        className={`bg-clip-text text-lg text-transparent bg-linear-main-red font-bold`}>Add
                </button>
              </div>
            </Features>
          </div>
          <div className={`mt-12`}>

            {/*<Button type={`button`} label={`Next`}*/}
            {/*  // @ts-ignore*/}
            {/*        onClick={() => setActiveState((prevState: activeStateType) => ({*/}
            {/*          ...prevState, stepThree: `completed`, stepFour: `active`*/}
            {/*        }))} />*/}

            {setActiveState && (
              <>
                <Button type={`button`} label={`Next`}
                  // @ts-ignore
                        onClick={() => setActiveStateDeclaration({ stepThree: `completed`, stepFour: `active` })} />
              </>
            )}

            {!setActiveState && (
              <>
                <Button type={`button`} label={`Save Changes`} />
              </>
            )}

          </div>
        </div>
      </form>
    </>
  );
}
