// 'use client';

import AccordionFeature from '@/components/Layout/Accordion/AccordionPropertyDescription/Features/AccordionFeature';
import AccordionContent from '@/components/Layout/Accordion/AccordionPropertyDescription/AccordionContent';
import { AccordionType } from '@/utils/types/AccordionFeatureType';


export default function Accordion({ setActiveState, activeState }: AccordionType) {
  return (
    <>
      <div>
        <div className={`flex flex-col`}>
          <div className={`flex gap-5 overflow-y-auto max-h-20 pb-3 w-full scrollbar-hide mb-5`}>
            <AccordionFeature setActiveState={setActiveState} activeState={activeState}
                              type={`description`} label={`Description`} />
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
        <AccordionContent activeState={activeState} setActiveState={() => {
        }} />
      </div>
    </>
  );
}
