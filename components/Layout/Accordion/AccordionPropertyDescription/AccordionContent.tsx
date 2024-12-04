// 'use client';

/*type AccordionContentType = {
  // children: ReactNode;
}*/

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

export default function AccordionContent({ activeState, description }: AccordionType) {
  let content: ReactNode = null;

  switch (activeState) {
    case `description`:
      content = (
        <AccordionDescription text={description.overall} />
      );
      break;
    case `features`:
      content = (
        <div className={`flex flex-col gap-12`}>
          {description.features.length === 0 && (
            <>
              <p className={`text-zinc-600 text-[15px]`}>No features specified</p>
            </>
          )}
          {description.features.length > 0 && (
            <>
              {description.features.map(function(feature, index) {
                return (
                  <>
                    <Feature heading={`${index + 1}. ${feature.title}`} text={feature.description}
                             images={feature.images} />
                  </>
                );
              })}
            </>
          )}
        </div>
      );
      break;
    case `location`:
      const googleMap = {
        key: description.location.title,
        location: {
          lat: description.location.location.coordinates[1],
          lng: description.location.location.coordinates[0]
        }
      };
      content = (
        <AccordionLocation googleMap={googleMap} location={
          description.location.title
        } description={description.location.description} />

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
              elit`} images={[`dummy-img-1`, `dummy-img-2`]} />

          <Feature text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`} heading={`1. Lorem ipsum dolor sit amet, consectetur
              adipiscing
              elit`} images={[`dummy-img-1`, `dummy-img-2`]} />
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
