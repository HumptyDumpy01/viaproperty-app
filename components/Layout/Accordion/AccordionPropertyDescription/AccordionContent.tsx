// 'use client';

/*type AccordionContentType = {
  // children: ReactNode;
}*/
import FeatureImg1 from '@/assets/property-description/features/features-1.png';
import FeatureImg2 from '@/assets/property-description/features/features-2.png';
import FeatureImg3 from '@/assets/property-description/features/features-3.png';
import FeatureImg4 from '@/assets/property-description/features/features-4.png';
import FeatureImg5 from '@/assets/property-description/features/features-5.png';
import FeatureImg6 from '@/assets/property-description/features/features-6.png';
import FeatureImg7 from '@/assets/property-description/features/features-7.png';
import FeatureImg8 from '@/assets/property-description/features/features-8.png';
import FeatureImg9 from '@/assets/property-description/features/features-9.png';

import FloorPlan1 from '@/assets/property-description/floor-plans/floor-plan-1.png';
import FloorPlan2 from '@/assets/property-description/floor-plans/floor-plan-2.png';
import FloorPlan3 from '@/assets/property-description/floor-plans/floor-plan-3.png';


import { AccordionType } from '@/utils/types/AccordionFeatureType';
import React, { ReactNode } from 'react';
import Feature from '@/components/Layout/Accordion/AccordionPropertyDescription/Features/Feature';
import AccordionLocation from '@/components/Layout/Accordion/AccordionPropertyDescription/Location/AccordionLocation';
import AccordionDescription
  from '@/components/Layout/Accordion/AccordionPropertyDescription/Description/AccordionDescription';
import AccordionVideo from '@/components/Layout/Accordion/AccordionPropertyDescription/Video/AccordionVideo';
import ContactViewingArrangements
  from '@/components/Layout/Accordion/AccordionPropertyDescription/Contacts/ContactViewingArrangements';
import PriceAndTaskHistory
  from '@/components/Layout/Accordion/AccordionPropertyDescription/PriceAndTaskHistory/PriceAndTaskHistory';

export default function AccordionContent({ activeState }: AccordionType) {
  let content: ReactNode = null;

  switch (activeState) {
    case `description`:
      content = (
        <AccordionDescription />
      );
      break;
    case `features`:
      content = (
        <div className={`flex flex-col gap-12`}>
          <Feature text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} heading={`1. Lorem ipsum dolor sit amet, consectetur
              adipiscing
              elit`} imgDimensions={{ width: 114, height: 114 }} images={[FeatureImg1, FeatureImg2, FeatureImg3]} />

          <Feature text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} heading={`2. Lorem ipsum dolor sit amet, consectetur
              adipiscing
              elit`} imgDimensions={{ width: 114, height: 114 }} images={[FeatureImg4, FeatureImg5, FeatureImg6]} />

          <Feature text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} heading={`3. Lorem ipsum dolor sit amet, consectetur
              adipiscing
              elit`} imgDimensions={{ width: 114, height: 114 }} images={[FeatureImg7, FeatureImg8, FeatureImg9]} />
        </div>
      );
      break;
    case `location`:
      content = (
        <AccordionLocation location={`United Kingdom,
            Birmingham, 5th Avenue N`} text={`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          `} />

      );
      break;
    case `video-tour`:
      content = (
        <AccordionVideo />
      );
      break;
    case `contact-viewing-arrangements`:
      content = (
        <ContactViewingArrangements text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
          `} />
      );
      break;
    case `price-task-history`:
      content = (
        <PriceAndTaskHistory price={`144,998`} />
      );
      break;

    case `floor-plans`:
      content = (
        <div className={`flex flex-col gap-12`}>
          <Feature text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} heading={`1. Lorem ipsum dolor sit amet, consectetur
              adipiscing
              elit`} imgDimensions={{ width: 114, height: 114 }} images={[FloorPlan1, FloorPlan2]} />

          <Feature text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} heading={`1. Lorem ipsum dolor sit amet, consectetur
              adipiscing
              elit`} imgDimensions={{ width: 114, height: 114 }} images={[FloorPlan3]} />
        </div>
      );

  }

  return (
    <>
      <div>
        {content}
      </div>
    </>
  );
}
