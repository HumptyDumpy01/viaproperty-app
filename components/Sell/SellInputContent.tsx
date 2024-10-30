'use client';

/*type SellInputContentType = {
  // children: ReactNode;
}*/

import BadgeStages from '@/components/UI/Badge/BadgeStages';
import { useState } from 'react';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import LabelAndSelect from '@/components/UI/Select/LabelAndSelect';
import LocationLabel from '@/components/UI/Label/LocationLabel';
import MapImg from '@/assets/property-description/map/map.png';
import Image from 'next/image';
import ChooseImage from '@/components/UI/Input/ChooseImage/ChooseImage';
import Button from '@/components/UI/Button/Button';

type activeStateType = {
  stepOne: `disabled` | `active` | `completed`;
  stepTwo: `disabled` | `active` | `completed`;
  stepThree: `disabled` | `active` | `completed`;
  stepFour: `disabled` | `active` | `completed`;
  finishingSteps: `disabled` | `active` | `completed`;
};

export default function SellInputContent(/*{  }: SellInputContentType*/) {

  const [activeState, setActiveState] = useState<activeStateType>({
    stepOne: `active`,
    stepTwo: `disabled`,
    stepThree: `disabled`,
    stepFour: `disabled`,
    finishingSteps: `disabled`
  });

  return (
    <>
      <div className={`flex gap-2.5 items-center`}>
        <div>
          <BadgeStages state={activeState.stepOne} label={`Step 1`} object={`stepOne`} />
        </div>
        <div>
          <BadgeStages state={activeState.stepTwo} label={`Step 2`} object={`stepTwo`} />
        </div>
        <div>
          <BadgeStages state={activeState.stepThree} label={`Step 3`} object={`stepThree`} />
        </div>
        <div>
          <BadgeStages state={activeState.stepFour} label={`Step 4`} object={`stepFour`} />
        </div>
        <div>
          <BadgeStages state={activeState.finishingSteps} label={`Finishing Steps`} object={`finishingSteps`} />
        </div>
      </div>
      <form className={`max-w-screen-md mt-8 flex justify-center flex-col gap-6`}>
        <div>
          <LabelAndInput label={`Title`} required name={`title`} customClassNames={`w-96`}
                         placeholder={`e.g. Arizona Cottage close to Street N..`} inputType={`text`} />
        </div>
        <div>
          <LabelAndInput type={`textarea`} label={`Description`} required name={`title`}
                         customClassNames={`w-[537px] min-h-[155px]`}
                         placeholder={`e.g. Arizona Cottage close to Street N..`} inputType={`text`} />
        </div>
        <div className={`mb-9`}>
          <div className={`mb-2`}>
            <LabelAndSelect label={`This property is for..`}
                            options={[{ value: `rent`, label: `Rent` }, { value: `sell`, label: `Sell` }]} />
          </div>
          <p className={`text-zinc-700 text-sm`}>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div className={`mb-9`}>
          <div className={`mb-4`}>
            <LocationLabel location={`UK, Birmingham, 5th Street`} />
          </div>
          <div className={`w-[565px] h-[299px] rounded-3xl mb-9`}>
            <Image src={MapImg} alt={`Map Image`} className={`object-cover w-full h-full`} />
          </div>
          <div className={`mb-9`}>
            <LabelAndInput
              type={`textarea`}
              label={`Tell your potential customer shortly about location`}
              required
              name={`locationDescription`}
              customClassNames={`w-[537px] min-h-[155px]`}
              placeholder={`e.g. This place is located at N Street, with calm neighborhood... `}
              inputType={`text`} labelStyle={`grey-and-small`} />
          </div>

          <div className={`mb-9`}>
            <ChooseImage min={5} max={16} />
          </div>
          <div>
            <LabelAndSelect
              required={false}
              label={`Ownership`}
              options={[{ value: `default`, label: `No Reference` }, { value: `leasehold`, label: `Leasehold` },
                { value: `freehold`, label: `Freehold` }
              ]} />
          </div>
          <div className={`mb-9`}>
            <LabelAndInput
              type={`input`}
              label={`Property Area(In Sqft)`}
              required
              name={`locationDescription`}
              customClassNames={`w-96`}
              placeholder={`e.g. 1000`}
              inputType={`number`} labelStyle={`grey-and-small`} />
          </div>
          <div className={`mb-12`}>
            <LabelAndInput
              type={`input`}
              label={`Price(In USD)`}
              required
              name={`locationDescription`}
              customClassNames={`w-96`}
              placeholder={`e.g. 144999`}
              inputType={`number`} labelStyle={`grey-and-small`} />

            <p className={`text-sm mt-3`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              temporibus?</p>
          </div>
          <Button label={`Next`} />
        </div>
      </form>
    </>
  );
}
