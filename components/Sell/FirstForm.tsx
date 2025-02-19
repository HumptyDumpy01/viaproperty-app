'use client';

import { activeStateType } from '@/components/Sell/SellInputContent';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import LabelAndSelect from '@/components/UI/Select/LabelAndSelect';
import LocationLabel from '@/components/UI/Label/LocationLabel';
import ChooseImage from '@/components/UI/Input/ChooseImage/ChooseImage';
import Button from '@/components/UI/Button/Button';
import HighlightText from '@/components/Typography/HighlightText';
import { scrollIntoViewFunc } from '@/utils/functions/scrollIntoViewFunc';
import { setActiveStateFunc } from '@/utils/functions/sell/setActiveStateFunc';
import ValidationParagraph from '@/components/Typography/ValidationParagraph';
import { descriptionSchema, propertyForSchema, titleSchema } from '@/utils/schemas/sell/sellSchemas';
import { useValidation } from '@/hooks/custom-hooks/useValidateInput';
import { useState } from 'react';
import { getGeocode } from '@/utils/map/geocode';

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

type PropertyLocationType = {
  title: string;
  country: string;
  city: string;
  location: {
    type: `Point`,
    coordinates: number[]
  },
  description: string;
};

export default function
  FirstForm({
              setActiveState,
              defaultValues = {} as FirstFormDefValuesType,
              mode
            }: FirstFormType) {
  const [mapChosenCoordinates, setMapChosenCoordinates] = useState<PropertyLocationType>();
  const { value: titleEntered, setValue: setTitleEntered, validationStage: titleInputStage } = useValidation(
    titleSchema,
    ''
  );

  const {
    value: locationDescriptionEntered,
    setValue: setlocationDescriptionEntered,
    validationStage: locationDescriptionInputStage
  } = useValidation(
    descriptionSchema,
    ''
  );

  const {
    value: propertyForChosen,
    setValue: setPropertyForChosen,
    validationStage: propertyForInputStage
  } = useValidation(
    propertyForSchema,
    ''
  );

  const {
    value: descriptionEntered,
    setValue: setDescriptionEntered,
    validationStage: descriptionInputStage
  } = useValidation(
    descriptionSchema,
    ''
  );


  const handleMapClick = async (coordinates: { lat: number; lng: number }) => {
    try {
      const { country, city, address } = await getGeocode(coordinates.lat, coordinates.lng);
      setMapChosenCoordinates({
        title: address || null,
        country: country || null,
        city: city || null,
        location: {
          type: 'Point',
          coordinates: [coordinates.lng, coordinates.lat]
        },
        description: `` // You can customize this as needed
      });
    } catch (error) {
      console.error('Error fetching geocode:', error);
    }
  };

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
    // images,
    ownership,
    propertyArea,
    price
  }: FirstFormDefValuesType = defaultValues;

  return (
    <>
      <div className={`max-w-screen-md mt-8 flex justify-center flex-col gap-6`}>
        <div>
          <LabelAndInput onChangeState={{ setValueEntered: setTitleEntered, valueEntered: titleEntered }}
                         defaultValue={title}
                         label={`Title`} required name={`title`}
                         customClassNames={`bp-620:w-96`}
                         placeholder={`e.g. Arizona Cottage close to Street N..`} inputType={`text`} />
          <ValidationParagraph text={`Title should contain from 5 to 100 characters long.`} stage={titleInputStage} />
        </div>
        <div>
          <LabelAndInput
            onChangeState={{ setValueEntered: setDescriptionEntered, valueEntered: descriptionEntered }}
            defaultValue={description}
            type={`textarea`}
            label={`Description`}
            required
            name={`title`}
            customClassNames={`bp-620:w-[537px] min-h-[155px]`}
            placeholder={`e.g. Arizona Cottage close to Street N..`} inputType={`text`} />
          <ValidationParagraph text={`Description should contain from 5 to 700 characters long.`}
                               stage={descriptionInputStage} />
        </div>

        <div className={`mb-9`}>
          <div className={`mb-2`}>
            <LabelAndSelect
              defaultValue={propertyForChosen}
              onChange={(e) => setPropertyForChosen(e.currentTarget.value)}
              disabled={mode === `editAdvert`} label={`This property is for..`}
              options={[{ value: ``, label: `Tap to choose` }, { value: `rent`, label: `Rent` }, {
                value: `sell`,
                label: `Sell`
              }]} />
            <div className={`mb-2`}>
              <ValidationParagraph text={`Property for can be either for rent or sell`}
                                   stage={propertyForInputStage} />
            </div>
          </div>
          <p className={`text-zinc-700 text-sm`}>{
            mode === `editAdvert` ? `You can't change this property` : `You can't change this property after creating the advert`
          }</p>
        </div>

        <div>
          <h3 className={`text-zinc-700 font-semibold mb-3`}>Where is this property located? *</h3>
          <p className={`leading-relaxed`}><HighlightText text={`Click on the map`} /> to select your property location.
          </p>
        </div>
        <div className={`mb-9`}>
          {mapChosenCoordinates?.title && (
            <div className={`mb-4`}>
              <LocationLabel
                location={mapChosenCoordinates?.title} />
            </div>
          )}
          <div className={`bp-620:w-[565px] h-[299px] rounded-3xl mb-9 flex flex-col`}>
            <div className={`mb-5`}>
              <ValidationParagraph text={`Please select your  valid property location.`}
                                   stage={mapChosenCoordinates?.location.coordinates ? `success` : `neutral`} />
            </div>
            {/*<SelectLocationOnMap onMapClick={handleMapClick} />*/}
          </div>
          <div className={`mb-9`}>
            <LabelAndInput
              onChangeState={{
                setValueEntered: setlocationDescriptionEntered,
                valueEntered: locationDescriptionEntered
              }}
              type={`textarea`}
              label={`Tell your potential customer shortly about location`}
              required
              defaultValue={locationDescription}
              name={`locationDescription`}
              customClassNames={`bp-620:w-[537px] min-h-[155px]`}
              placeholder={`e.g. This place is located at N Street, with calm neighborhood... `}
              inputType={`text`} labelStyle={`grey-and-small`} />
            <ValidationParagraph text={`Location description is expected to be 5 to 700 characters.`}
                                 stage={locationDescriptionInputStage} />
          </div>

          <div className={`mb-9`}>
            <ChooseImage min={4} max={6} />
          </div>
          <div className={`mb-9`}>
            <LabelAndInput
              type={`input`}
              label={`Property Area(In Sqft)`}
              defaultValue={propertyArea?.toString() ? propertyArea.toString() : ``}
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
              defaultValue={price?.toString()}
              required
              name={`locationDescription`}
              customClassNames={`bp-620:w-96`}
              placeholder={`e.g. 144999`}
              inputType={`number`} labelStyle={`grey-and-small`} />
          </div>
          <div className={`mb-9`}>
            <LabelAndSelect
              required={false}
              defaultValue={ownership}
              label={`Ownership`}
              options={[{ value: `default`, label: `No Reference` }, { value: `leasehold`, label: `Leasehold` },
                { value: `freehold`, label: `Freehold` }
              ]} />
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
      </div>
    </>
  );
}