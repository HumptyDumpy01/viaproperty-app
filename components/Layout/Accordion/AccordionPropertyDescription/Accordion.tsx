'use client';

import AccordionFeature from '@/components/Layout/Accordion/AccordionPropertyDescription/Features/AccordionFeature';
import AccordionContent from '@/components/Layout/Accordion/AccordionPropertyDescription/AccordionContent';
import { AccordionFeatureType } from '@/utils/types/AccordionFeatureType';
import { useState } from 'react';

export type AccordionTypeContent = {
  description: AccordionTypeData;
}

export type AccordionTypeData = {
  overall: string;
  features: { title: string; images?: string[], description: string }[] | [];
  location: { title: string; description: string, location: { type: string, coordinates: [number, number] } };
}

export default function Accordion({ description }: AccordionTypeContent) {

  const [activeState, setActiveState] = useState<AccordionFeatureType>(`description`);
  return (
    <>
      <div>
        <div className={`flex flex-col`}>
          <div className={`flex gap-5 overflow-y-auto max-h-20 pb-3 w-full scrollbar-thin mb-5`}>
            <AccordionFeature setActiveState={setActiveState} activeState={activeState}
                              type={`description`} label={`Description`} />
            {/*{description.features.length > 0 && (
              <>
                <AccordionFeature setActiveState={setActiveState} activeState={activeState} type={`features`}
                                  label={`Features`} />
              </>
            )}*/}
            <AccordionFeature setActiveState={setActiveState} activeState={activeState} type={`features`}
                              label={`Features`} />
            <AccordionFeature setActiveState={setActiveState} activeState={activeState} type={`location`}
                              label={`Location`} />
            <AccordionFeature setActiveState={setActiveState} activeState={activeState} type={`video-tour`}
                              label={`Video Tour`} />
            <AccordionFeature setActiveState={setActiveState} activeState={activeState}
                              type={`contact-viewing-arrangements`}
                              label={`Contact & Viewing Arrangements`} />
            <AccordionFeature setActiveState={setActiveState} activeState={activeState} type={`price-task-history`}
                              label={`Price & Task History`} />
            <AccordionFeature setActiveState={setActiveState} activeState={activeState} type={`floor-plans`}
                              label={`Floor Plans`} />
          </div>
        </div>
        <AccordionContent description={description} activeState={activeState} setActiveState={() => {
        }} />
      </div>
    </>
  );
}
