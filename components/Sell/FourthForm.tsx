// 'use client';

import { activeStateType } from '@/components/Sell/SellInputContent';
import HighlightText from '@/components/Typography/HighlightText';
import TagBadge from '@/components/UI/Badge/TagBadge';
import Features from '@/components/Sell/Features';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Button from '@/components/UI/Button/Button';
import { scrollIntoViewFunc } from '@/utils/functions/scrollIntoViewFunc';
import { setActiveStateFunc } from '@/utils/functions/sell/setActiveStateFunc';

type FourthFormType = {
  setActiveState: (prevState: activeStateType) => void;
  // children: ReactNode;
}

export default function FourthForm({ setActiveState }: FourthFormType) {

  function setActiveStateDeclaration(activeState: activeStateType) {
    scrollIntoViewFunc(`.sell-heading`);
    setActiveStateFunc(activeState, setActiveState);
  }

  return (
    <>
      <form className={`flex flex-col mt-9`}>
        <h2 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-2xl
          mb-10`}>Add Extra Pricing Features(Optional)</h2>
        <p className={`leading-relaxed text-zinc-900`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          illo odio quas quis. Cumque
          et ipsa libero magni maxime obcaecati <HighlightText text={`possimus saepe. Impedit omnis,`} /> praesentium.
        </p>
        <div className={`mt-6 mb-9`}>
          <div className={`flex gap-3.5 items-center overflow-x-auto scrollbar-thin`}>
            <TagBadge label={`Custom Pricing Feature`} />
            <TagBadge label={`Custom Pricing Feature`} />
            <TagBadge label={`Custom Pricing Feature`} />
          </div>
        </div>
        <div className={`mb-12`}>
          <Features featureHeading={`Extra Features`}>

            <LabelAndInput labelStyle={`grey-and-small`} name={`title`} placeholder={`e.g.Garage`}
                           customClassNames={`bp-620:w-72 text-custom-medium`}
                           label={`Title`} inputType={`text`} />

            <LabelAndInput labelStyle={`grey-and-small`} name={`price`} placeholder={`e.g. 14499`}
                           customClassNames={`bp-620:w-72 text-custom-medium`}
                           label={`Price(In USD)`} inputType={`number`} />
            <div className={`mt-3`}>
              <button type={`button`}
                      className={`bg-clip-text text-lg text-transparent bg-linear-main-red font-bold`}>Add
              </button>
            </div>
          </Features>
        </div>
        <div className={`flex flex-col mb-16`}>
          <h2 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-2xl
          mb-10`}>Video Tour(Optional)</h2>
          <p className={`leading-relaxed text-zinc-900 mb-9`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolorum
            illo odio quas quis. Cumque
            et ipsa libero magni maxime obcaecati <HighlightText text={`possimus saepe. Impedit omnis,`} /> praesentium.
          </p>
          <div className={`bp-620:w-96 h-56 bg-red-50 rounded-2xl flex items-center justify-center mb-11`}>
            <ViapropertyIcon icon={`logo`} />
          </div>
          <div>
            <button type={`button`}
                    className={`uppercase px-8 py-5 font-semibold bg-linear-main-red text-white rounded-2xl`}>upload
            </button>
          </div>
        </div>

        <div>
          {/*<Button type={`button`} label={`Done`}*/}
          {/*  // @ts-ignore*/}
          {/*        onClick={() => setActiveState((prevState: activeStateType) => ({*/}
          {/*          ...prevState, stepFour: `completed`, finishingSteps: `active`*/}
          {/*        }))} />*/}

          <Button type={`button`} label={`Next`}
            // @ts-ignore
                  onClick={() => setActiveStateDeclaration({ stepFour: `completed`, finishingSteps: `active` })} />
        </div>
      </form>
    </>
  );
}
