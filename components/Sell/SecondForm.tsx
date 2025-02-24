'use client';

import { activeStateType } from '@/components/Sell/SellInputContent';
import { FormEvent, useEffect, useState } from 'react';
import ChooseAmount from '@/components/UI/Input/ChooseAmount';
import TagBadge from '@/components/UI/Badge/TagBadge';
import HighlightText from '@/components/Typography/HighlightText';
import Button from '@/components/UI/Button/Button';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import { scrollIntoViewFunc } from '@/utils/functions/scrollIntoViewFunc';
import { setActiveStateFunc } from '@/utils/functions/sell/setActiveStateFunc';
import ChooseFeatureImages, { ImagesArrayType } from '@/components/Sell/ChooseFeatureImages';
import { discountSchema, tagSchema, tagsSchema } from '@/utils/schemas/sell/second-step/sellSchemasSecondStep';
import SnackbarMUI, { SnackBarSeverityType } from '@/components/UI/Snackbar/SnackbarMUI';
import { SnackbarDataType } from '@/components/PropertyDescription/Layout/PropertyTags';
import { windowExists } from '@/utils/functions/windowExists';
import ValidationParagraph from '@/components/Typography/ValidationParagraph';
import { useValidation } from '@/hooks/custom-hooks/useValidateInput';

export type PropertyHasType = {
  beds: number;
  showers: number;
  baths: number;
  bedrooms: number;
  kitchens: number;
  parkingSlots: number;
};

type SecondFormType = {
  setActiveState?: (prevState: activeStateType) => void;
  mode: `createAdvert` | `editAdvert`;
  defaultValues?: {
    beds: number;
    showers: number;
    baths: number;
    bedrooms: number;
    kitchens: number;
    parkingSlots: number;
    propertyTags: string[];
    discount?: number;
    featureDescription: FeatureDescriptionType[] | [];
  }
  // children: ReactNode;
};

type FeatureDescriptionType = {
  heading: string;
  shortDescription: string;
  images: string[];
};

export default function
  SecondForm({
               setActiveState,
               defaultValues = {
                 beds: 0,
                 showers: 0,
                 baths: 0,
                 bedrooms: 0,
                 kitchens: 0,
                 parkingSlots: 0,
                 propertyTags: [],
                 featureDescription: []
               }
             }: SecondFormType) {
  const [propertyHas, setPropertyHas] = useState<PropertyHasType>({
    beds: defaultValues.beds,
    showers: defaultValues.showers,
    baths: defaultValues.baths,
    bedrooms: defaultValues.bedrooms,
    kitchens: defaultValues.kitchens,
    parkingSlots: defaultValues.parkingSlots
  });

  const { value: discount, setValue: setDiscount, validationStage: discountInputStage } = useValidation(
    discountSchema,
    '',
    true,
    `propertyDiscount`
  );

  useEffect(() => {
    if (windowExists()) {
      const propertyHasField = window.localStorage.getItem('propertyHas') || null;
      const propertyHasParsed = propertyHasField ? JSON.parse(propertyHasField) as PropertyHasType : null;
      if (propertyHasParsed) {
        setPropertyHas(propertyHasParsed);
      }

      const tagsField = window.localStorage.getItem('propertyTags') || null;
      const tagsFieldParsed = tagsField ? JSON.parse(tagsField) as string[] : null;

      if (tagsFieldParsed) {
        setPropertyTags(tagsFieldParsed);
      }
    }
  }, []);

  const [propertyTags, setPropertyTags] = useState<string[] | []>(defaultValues.propertyTags || []);
  const [featureDescription, setFeatureDescription] = useState<FeatureDescriptionType[]>(defaultValues.featureDescription || []);
  const [featureImagesPicked, setFeatureImagesPicked] = useState<ImagesArrayType[]>([]);

  const [snackbarState, setSnackbarState] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<SnackbarDataType>({ severity: `warning`, message: `` });

  function setActiveStateDeclaration(activeState: activeStateType) {
    scrollIntoViewFunc(`.sell-heading`);
    if (setActiveState) {
      setActiveStateFunc(activeState, setActiveState);
    }
  }

  function excludeTag(label: string) {
    const currentTags = [...propertyTags].filter((tag: string) => tag !== label);
    setPropertyTags(currentTags);

    if (windowExists()) {
      window.localStorage.setItem('propertyTags', JSON.stringify(currentTags));
    }
  }

  function excludeFeatureDescription(label: string) {
    setFeatureDescription((prevState: FeatureDescriptionType[]) => prevState.filter((tag: FeatureDescriptionType) => tag.heading !== label));
  }

  function handleSnackbarState(severity: SnackBarSeverityType, message: string) {
    setSnackbarState(true);
    setSnackbarMessage({ severity, message });
  }

  function handleAddTag(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as { newTag: string };

    const validate = tagSchema.safeParse({ tag: results.newTag });

    const validateTags = tagsSchema.safeParse({ tags: [...propertyTags, results.newTag] });

    if (!validate.success) {
      handleSnackbarState(`error`, validate.error.errors[0].message);
      return;
    }

    if (!validateTags.success) {
      handleSnackbarState(`error`, validateTags.error.errors[0].message);
      return;
    }

    // @ts-ignore
    if (propertyTags.includes(`${results.newTag}`)) {
      handleSnackbarState(`error`, `Your cannot add the same tag twice.`);
      return;
    }

    const currentTags = [...propertyTags];
    currentTags.push(results.newTag.trim());
    setPropertyTags(currentTags);

    if (windowExists()) {
      window.localStorage.setItem('propertyTags', JSON.stringify(currentTags));
    }
    currObject.reset();
  }

  // @ts-ignore
  return (
    <>
      <SnackbarMUI severity={snackbarMessage.severity} message={snackbarMessage.message}
                   state={{ open: snackbarState, setOpen: setSnackbarState }} />
      <section className={`flex flex-col mt-9`}>
        <h2 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-2xl
          mb-10`}>My Property has (Optional)</h2>
        <div className={`flex items-center mb-12`}>
          <div className={`flex justify-center flex-col gap-7`}>
            <div
              className={`flex flex-col bp-620:flex-row bp-620:items-center bp-620:gap-12 gap-4 bp-620:justify-between`}>
              <ChooseAmount propertyLabel={`beds`} label={`Beds`} items={propertyHas.beds} setItems={setPropertyHas} />
              <ChooseAmount propertyLabel={`bedrooms`} label={`Bedrooms`} items={propertyHas.bedrooms}
                            setItems={setPropertyHas} />
            </div>

            <div
              className={`flex flex-col bp-620:flex-row bp-620:items-center bp-620:gap-12 gap-4 bp-620:justify-between`}>
              <ChooseAmount propertyLabel={`showers`} label={`Showers`} items={propertyHas.showers}
                            setItems={setPropertyHas} />
              <ChooseAmount propertyLabel={`kitchens`} label={`Kitchens`} items={propertyHas.kitchens}
                            setItems={setPropertyHas} />
            </div>

            <div
              className={`flex flex-col bp-620:flex-row bp-620:items-center bp-620:gap-12 gap-4 bp-620:justify-between`}>
              <ChooseAmount propertyLabel={`baths`} label={`Baths`} items={propertyHas.baths}
                            setItems={setPropertyHas} />
              <ChooseAmount propertyLabel={`parkingSlots`} label={`Parking Slots`} items={propertyHas.parkingSlots}
                            setItems={setPropertyHas} />
            </div>
          </div>
        </div>

        <div>
          <h2 className={`bg-clip-text text-2xl mb-5 text-transparent bg-linear-main-red font-bold`}>Add Property Tags
            (Optional)</h2>
          <p className={`max-w-3xl text-zinc-900 leading-relaxed mb-6`}>Want your property to have higher changes to be
            on the top of the search list? Provide some tags about your property, and <HighlightText
              text={`you may have more views!`} /> For example, &#34;Balcony&#34;, &#34;Posh
            Fireplace&#34;, &#34;Wi-fi&#34; ,etc.
          </p>

          <div className={`mb-10`}>
            <div className={`flex flex-col justify-center gap-4`}>
              <h2
                className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-xl flex items-center gap-2`}>Tags
                Added:
                {propertyTags.length === 0 && ` None`}
                {propertyTags.length > 0 && propertyTags.map((tag: string, index: number) => (
                  /*@ts-ignore*/
                  <TagBadge setItems={excludeTag} key={index} label={tag} />
                ))}</h2>
              <form onSubmit={handleAddTag} className={`flex items-center gap-3`}>
                <input
                  type="text"
                  name={`newTag`}
                  className={`placeholder:text-red-500 py-4 px-4 rounded-2xl border border-red-500 text-red-500
                       transition-all duration-300 outline-none focus:outline-red-500 font-medium hover:outline-red-400`}
                  placeholder={`Your custom tag`} />
                <button className={`py-3 px-4 text-lg font-medium rounded-2xl border border-red-500 text-red-500
                hover:bg-red-500 hover:text-white transition-all duration-100 
                active:bg-red-400 active:scale-95`}>Add
                </button>
              </form>
            </div>
          </div>
          <div className={`mb-10`}>
          </div>

          <div>

            <h2 className={`bg-clip-text text-2xl mb-5 text-transparent bg-linear-main-red font-bold`}>Want to describe
              each Feature?(Optional)</h2>
            <p className={`max-w-3xl text-zinc-900 leading-relaxed mb-6 text-sm`}>The looks of your advert can be
              outstanding by providing each feature a description and images!</p>
          </div>
          <div className={`flex gap-3.5 items-center mb-6 overflow-x-auto scrollbar-thin`}>
            <h2
              className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-xl flex items-center gap-2`}>Tags
              Added:
              {featureDescription.length === 0 && <span className={`text-inherit`}>None</span>}
              {
                featureDescription.length > 0 && featureDescription.map((tag, index) => (
                  /*@ts-ignore*/
                  <TagBadge setItems={excludeFeatureDescription} key={index} label={tag.heading} />
                ))
              }</h2>
          </div>
          <div className={`mb-10`}>
            <form className={`flex justify-center flex-col gap-3 max-w-xl`}>
              <input type="text"
                     name={`heading`}
                     className={`placeholder:text-red-500 py-4 px-4 rounded-2xl border border-red-500 text-red-500
                       transition-all duration-300 outline-none focus:outline-red-500 font-medium hover:outline-red-400`}
                     placeholder={`Heading`} />

              <textarea
                name={`shortDescription`}
                className={`placeholder:text-red-500 py-4 px-4 rounded-2xl border border-red-500 text-red-500
                       transition-all duration-300 outline-none focus:outline-red-500 font-medium hover:outline-red-400 h-24`}
                placeholder={`Short Description`} />

              <div className={`overflow-x-auto scrollbar-thin`}>
                <ChooseFeatureImages imagesState={{ images: featureImagesPicked, setImages: setFeatureImagesPicked }}
                                     min={0} max={3} />
              </div>

              <button className={`py-3 px-10 font-medium rounded-2xl border bg-red-500 border-red-500 text-white mt-7
                hover:bg-red-600 hover:text-white text-2xl transition-all duration-100 
                active:bg-red-400 active:scale-95 w-fit`}>Add
              </button>
            </form>
          </div>

          <div className={`mb-10`}>
            <h3 className={`bg-clip-text text-transparent bg-linear-main-red font-bold
            text-2xl w-fit mb-6`}>Do you want to apply discount? (Optional)</h3>
            <p className={`text-zinc-900 leading-relaxed max-w-4xl`}>Please provide a valid discount number from 1 to
              100. We will recalculate the total price for your property.</p>

            <div className={`mt-4`}>
              <LabelAndInput
                onChangeState={{ valueEntered: discount, setValueEntered: setDiscount }}
                defaultValue={discount}
                customClassNames={`bp-620:w-96`}
                labelStyle={`grey-and-small`}
                label={`Discount (In Percentages)`}
                name={`discount`}
                placeholder={`e.g. 5`} inputType={`number`} />
              <ValidationParagraph stage={discountInputStage}
                                   text={`Please provide a valid discount: between 1 to 100`} />
            </div>
          </div>

          <div>
            {/*<Button type={`button`} label={`Next`}*/}
            {/*  // @ts-ignore*/}
            {/*        onClick={() => setActiveState((prevState: activeStateType) => ({*/}
            {/*          ...prevState, stepTwo: `completed`, stepThree: `active`*/}
            {/*        }))} />*/}


            {setActiveState && (
              <>
                <Button type={`button`} label={`Next`}
                  // @ts-ignore
                        onClick={() => setActiveStateDeclaration({ stepTwo: `completed`, stepThree: `active` })} />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
