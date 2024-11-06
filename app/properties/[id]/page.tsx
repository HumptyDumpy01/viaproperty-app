// 'use client';

import React from 'react';
import Accordion from '@/components/Layout/Accordion/AccordionPropertyDescription/Accordion';
import PropertyGallery from '@/components/PropertyDescription/Layout/PropertyGallery';

import PropertyGalleryImg1 from '@/assets/property-description/gallery/property-description-1.png';
import PropertyGalleryImg2 from '@/assets/property-description/gallery/property-description-2.png';
import PropertyGalleryImg3 from '@/assets/property-description/gallery/property-description-3.png';
import PropertyGalleryImg4 from '@/assets/property-description/gallery/property-description-4.png';
import PropertyTags from '@/components/PropertyDescription/Layout/PropertyTags';
import { PropertyTagsEnum } from '@/utils/enums/PropertyTags';
import PropertyConveniences from '@/components/PropertyDescription/Layout/PropertyConveniences';
import AboutLandlord from '@/components/PropertyDescription/Layout/AboutLandlord';
import PropertyComments from '@/components/PropertyDescription/Layout/PropertyComments';
import HeadingMedium from '@/components/Typography/HeadingMedium';
import RenterReviewsMetrics from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';
import CallToActionBlock from '@/components/Layout/Cta/CallToActionBlock';
import FeaturedProperties from '@/components/Home/Layout/FeaturedProperties';
import LeaveCommentContainer from '@/components/PropertyDescription/Layout/LeaveCommentContainer';
import SidebarContainer from '@/components/PropertyDescription/Layout/SidebarContainer';
import ProviderContainer from '@/components/Layout/Provider/ProviderContainer';
import OpenSidebarBtn from '@/components/PropertyDescription/Layout/OpenSidebarBtn';

/*type PropertyDescriptionType = {
  // children: ReactNode;
}*/

export type LeaveCommentBadgeType = `Leave Review` | `Ask Question`;

export default function PropertyDescription(/*{  }: PropertyDescriptionType*/) {
  return (
    <main className={`mb-24 overflow-hidden`}>
      <div className={`max-w-[1320px] mx-auto w-full px-3 bp-480:px-6`}>
        <div className={`grid bp-1306:grid-cols-property-description grid-cols-1 mt-10 gap-5 pr-5 bp-1306:pr-0`}>
          <div>
            <PropertyGallery
              images={[PropertyGalleryImg1, PropertyGalleryImg2, PropertyGalleryImg3, PropertyGalleryImg4]} />

            <PropertyTags rating={4.3}
                          tags={[PropertyTagsEnum.APARTMENT, PropertyTagsEnum.FEATURED, PropertyTagsEnum.LUXURY, PropertyTagsEnum.NEW]} />

            <HeadingMedium customClasses={`mb-8`} maxWidthXL heading={`Exquisite
              design
              combined with posh interior`} />

            <PropertyConveniences wifi={true} bedrooms={3} showers={2} baths={1} beds={4} fullKitchen={true}
                                  sqftSize={1258} />
            <Accordion />

            <ProviderContainer>
              <OpenSidebarBtn />
            </ProviderContainer>

            <div className={`mt-14`}>
              <HeadingMedium customClasses={`mb-8`} heading={`About
            Landlord`} />

              <AboutLandlord online={false} initials={`Nikolas Baker`} abbrInitials={`N.B`} text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do
              eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur....`} />


              <RenterReviewsMetrics
                metrics={{
                  location: 4.44,
                  condition: 4.1,
                  ownership: 4.2,
                  noiseLevel: 2,
                  amenities: 4.4,
                  security: 3.8
                }}
                overallRating={4.3} ratings={534} />

              <div className={`mb-16`}>
                <PropertyComments />
              </div>

              <LeaveCommentContainer />

            </div>
          </div>
          <ProviderContainer>
            <SidebarContainer />
          </ProviderContainer>

        </div>
      </div>
      <div className={`mt-20`}>
        <CallToActionBlock rounded={false} fullScreen type={`sell-rent`} />
      </div>
      <div className={`ml-3`}>
        <FeaturedProperties
          headingLabel={`You might also like...`} headingSpan={`based on your search!`} headingHref={`/properties`} />
      </div>
    </main>
  );
}