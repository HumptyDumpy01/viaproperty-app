// 'use client';

import { activeStateType } from '@/components/Sell/SellInputContent';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import LabelAndSelect from '@/components/UI/Select/LabelAndSelect';
import LocationLabel from '@/components/UI/Label/LocationLabel';
import Image from 'next/image';
import MapImg from '@/assets/property-description/map/map.png';
import ChooseImage from '@/components/UI/Input/ChooseImage/ChooseImage';
import Button from '@/components/UI/Button/Button';
import HighlightText from '@/components/Typography/HighlightText';
import { scrollIntoViewFunc } from '@/utils/functions/scrollIntoViewFunc';
import { setActiveStateFunc } from '@/utils/functions/sell/setActiveStateFunc';

type FirstFormDefValuesType = {
  title: string;
  description: string;
  location: string;
  locationDescription: string;
  images: string[];
  ownership: string;
  propertyArea: number;
  price: number;
};

type FirstFormType = {
  setActiveState?: (prevState: activeStateType) => void;
  mode: `createAdvert` | `editAdvert`;
  defaultValues?: FirstFormDefValuesType;
  // children: ReactNode;
}

export default function
  FirstForm({
              setActiveState,
              defaultValues = {} as FirstFormDefValuesType,
              mode
            }: FirstFormType) {

  function setActiveStateDeclaration(activeState: activeStateType) {
    scrollIntoViewFunc(`.sell-heading`);
    if (setActiveState)
      setActiveStateFunc(activeState, setActiveState);
  }

  const {
    title,
    description,
    location,
    locationDescription,
    images,
    ownership,
    propertyArea,
    price
  }: FirstFormDefValuesType = defaultValues;

  return (
    <>
      <form className={`max-w-screen-md mt-8 flex justify-center flex-col gap-6`}>
        <div>
          <LabelAndInput defaultValue={title} label={`Title`} required name={`title`} customClassNames={`bp-620:w-96`}
                         placeholder={`e.g. Arizona Cottage close to Street N..`} inputType={`text`} />
        </div>
        <div>
          <LabelAndInput
            defaultValue={description}
            type={`textarea`}
            label={`Description`}
            required
            name={`title`}
            customClassNames={`bp-620:w-[537px] min-h-[155px]`}
            placeholder={`e.g. Arizona Cottage close to Street N..`} inputType={`text`} />
        </div>

        <div className={`mb-9`}>
          <div className={`mb-2`}>
            <LabelAndSelect disabled={mode === `editAdvert`} label={`This property is for..`}
                            options={[{ value: `rent`, label: `Rent` }, { value: `sell`, label: `Sell` }]} />
          </div>
          <p className={`text-zinc-700 text-sm`}>{
            mode === `editAdvert` ? `You can't change this property` : `You can't change this property after creating the advert`
          }</p>
        </div>

        <div>
          <h3 className={`text-zinc-700 font-semibold mb-3`}>Select this property on map *</h3>
          <p className={`leading-relaxed`}><HighlightText text={`Lorem ipsum dolor sit amet, `} /> consectetur
            adipisicing elit.
            Aut delectus
            dolor, dolorum facilis modi
            perferendis quidem quis! Maxime nulla, vitae.</p>
        </div>
        <div className={`mb-9`}>
          <div className={`mb-4`}>
            <LocationLabel location={mode === `editAdvert` ? location : `UK, Birmingham, 5th Street`} />
          </div>
          <div className={`bp-620:w-[565px] h-[299px] rounded-3xl mb-9`}>
            <Image src={MapImg} alt={`Map Image`} className={`object-cover w-full h-full`} />
          </div>
          <div className={`mb-9`}>
            <LabelAndInput
              type={`textarea`}
              label={`Tell your potential customer shortly about location`}
              required
              defaultValue={locationDescription}
              name={`locationDescription`}
              customClassNames={`bp-620:w-[537px] min-h-[155px]`}
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
              defaultValue={propertyArea.toString()}
              required
              name={`locationDescription`}
              customClassNames={`bp-620:w-96`}
              placeholder={`e.g. 1000`}
              inputType={`number`} labelStyle={`grey-and-small`} />
          </div>
          <div className={`mb-12`}>
            <LabelAndInput
              type={`input`}
              label={`Price(In USD)`}
              defaultValue={price.toString()}
              required
              name={`locationDescription`}
              customClassNames={`bp-620:w-96`}
              placeholder={`e.g. 144999`}
              inputType={`number`} labelStyle={`grey-and-small`} />

            <p className={`text-sm mt-3`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              temporibus?</p>
          </div>
          {/*<Button type={`button`} label={`Next`}*/}
          {/*  // @ts-ignore*/}
          {/*        onClick={() => setActiveState((prevState: activeStateType) => ({*/}
          {/*          ...prevState, stepOne: `completed`, stepTwo: `active`*/}
          {/*        }))} />*/}

          {setActiveState && (
            <>
              <Button type={`button`} label={`Next`}
                // @ts-ignore
                      onClick={() => setActiveStateDeclaration({ stepOne: `completed`, stepTwo: `active` })} />
            </>
          )}

          {!setActiveState && (
            <>
              <Button type={`button`} label={`Save Changes`} />
            </>
          )}
        </div>
      </form>
    </>
  );
}