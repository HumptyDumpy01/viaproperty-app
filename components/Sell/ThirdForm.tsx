'use client';

import { scrollIntoViewFunc } from '@/utils/functions/scrollIntoViewFunc';
import HighlightText from '@/components/Typography/HighlightText';
import TagBadge from '@/components/UI/Badge/TagBadge';
import Features from '@/components/Sell/Features';
import LabelAndInput from '@/components/UI/Input/LabelAndInput';
import ChooseImage from '@/components/UI/Input/ChooseImage/ChooseImage';
import { activeStateType } from '@/components/Sell/SellInputContent';
import { setActiveStateFunc } from '@/utils/functions/sell/setActiveStateFunc';
import Button from '@/components/UI/Button/Button';
import { useState } from 'react';

export type ContactAndViewingArrangementsType = {
  initials: string;
  phones: string[];
};

export type PriceAndTaskHistoryType = {
  history: string;
};

export type FloorPlansType = {
  heading: string;
  shortDescription: string;
  images: string[];
};

type ThirdFormType = {
  setActiveState?: (prevState: activeStateType) => void;
  mode: `createAdvert` | `editAdvert`;
  defaultValues?: {
    contactAndViewingArrangements: ContactAndViewingArrangementsType[];
    priceAndTaskHistory: PriceAndTaskHistoryType;
    floorPlans: FloorPlansType[];
  };
  // children: ReactNode;
}

export default function ThirdForm({ setActiveState, defaultValues }: ThirdFormType) {
  const [contactAndViewingArrangements, setContactAndViewingArrangements] = useState<ContactAndViewingArrangementsType[]>(defaultValues?.contactAndViewingArrangements || []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [priceAndTaskHistory, setPriceAndTaskHistory] = useState<PriceAndTaskHistoryType | null>(defaultValues?.priceAndTaskHistory || null);
  const [floorPlans, setFloorPlans] = useState<FloorPlansType[]>(defaultValues?.floorPlans || []);

  function setActiveStateDeclaration(activeState: activeStateType) {
    scrollIntoViewFunc(`.sell-heading`);
    if (setActiveState) {
      setActiveStateFunc(activeState, setActiveState);
    }
  }

  function excludeContact(label: string) {
    setContactAndViewingArrangements((prev) => prev.filter((contact) => `${contact.initials} ${contact.phones.join(', ')}` !== label));
  }

  function excludeFloorPlan(label: string) {
    setFloorPlans((prev) => prev.filter((floorPlan) => floorPlan.heading !== label));
  }

  return (
    <>
      <form className={`flex flex-col mt-9`}>
        <h2 className={`bg-clip-text text-transparent bg-linear-main-red font-bold text-2xl mb-10`}>Contact & Viewing
          Arrangements *</h2>
        <p className={`leading-relaxed text-zinc-900`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          illo odio quas quis. Cumque et ipsa libero magni maxime obcaecati <HighlightText
            text={`possimus saepe. Impedit omnis,`} /> praesentium.</p>
        <div className={`mt-6 mb-9`}>
          <div className={`flex gap-3.5 items-center overflow-x-auto scrollbar-thin`}>
            {!contactAndViewingArrangements.length && (
              <h2 className={`text-zinc-900 font-semibold`}>No contact and viewing arrangements added yet.</h2>
            )}
            {(contactAndViewingArrangements && contactAndViewingArrangements.length > 0) && contactAndViewingArrangements.map((contact, index) => (
              /*@ts-ignore*/
              <TagBadge setItems={excludeContact}
                        key={index} label={`${contact.initials} ${contact.phones.join(', ')}`} />
            ))}
          </div>
        </div>
        <div className={`mb-12`}>
          <Features featureHeading={`Contact Details`}>
            <LabelAndInput labelStyle={`grey-and-small`} name={`initials`} placeholder={`e.g. John Doe`}
                           customClassNames={`bp-620:w-72 text-custom-medium`} label={`Initials`} inputType={`text`} />
            <LabelAndInput labelStyle={`grey-and-small`} name={`phone`} placeholder={`e.g. +380...33`}
                           customClassNames={`bp-620:w-72 text-custom-medium`} label={`Phone Number`}
                           inputType={`number`} />
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
            elit. Alias consequuntur doloribus enim, fugiat harum incidunt maiores minus nulla provident <HighlightText
              text={`quam quibusdam quod ratione saepe voluptatem?`} /></p>
        </div>
        <div className={`mb-12`}>
          <LabelAndInput defaultValue={priceAndTaskHistory?.history} required inputType={`text`}
                         labelStyle={`grey-and-small`} name={`propertyPriceHistory`}
                         placeholder={`e.g. The task history of the property was..`}
                         customClassNames={`max-w-[528px] h-[155px]`} type={`textarea`}
                         label={`Tell us about your task history and property price`} />
        </div>
        <div>
          <h2 className={`text-2xl bg-clip-text text-transparent bg-linear-main-red font-bold mb-6`}>Floor Plans
            (Optional)</h2>
          <p className={`leading-relaxed text-zinc-900 max-w-4xl`}>Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Alias consequuntur doloribus enim, fugiat harum incidunt maiores minus nulla provident <HighlightText
              text={`quam quibusdam quod ratione saepe voluptatem?`} /></p>
          <div className={`mt-6 mb-9`}>
            <div className={`flex gap-3.5 items-center overflow-x-auto scrollbar-thin`}>
              {!floorPlans.length && (
                <h2 className={`text-zinc-900 font-semibold`}>No floor plans added yet.</h2>
              )}
              {(floorPlans && floorPlans.length > 0) && floorPlans.map((floorPlan, index) => (
                <TagBadge setItems={excludeFloorPlan} key={index} label={floorPlan.heading} />
              ))}
            </div>
          </div>
          <div>
            <Features featureHeading={`Floor Plans`}>
              <LabelAndInput labelStyle={`grey-and-small`} name={`heading`} placeholder={`e.g. Overall Building`}
                             customClassNames={`bp-620:w-72 text-custom-medium`} label={`Heading`} inputType={`text`} />
              <LabelAndInput type={`textarea`} labelStyle={`grey-and-small`} name={`short-description`}
                             placeholder={`e.g. This is the overall building floor plan.`}
                             customClassNames={`bp-620:w-72 h-36 text-custom-medium`} label={`Short Description`}
                             inputType={`text`} />
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
            {setActiveState && (
              <Button type={`button`} label={`Next`}
                // @ts-ignore
                      onClick={() => setActiveStateDeclaration({ stepThree: `completed`, stepFour: `active` })} />
            )}
            {!setActiveState && (
              <Button type={`button`} label={`Save Changes`} />
            )}
          </div>
        </div>
      </form>
    </>
  );
}