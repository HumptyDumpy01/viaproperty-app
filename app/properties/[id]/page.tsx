'use client';

import React, { useState } from 'react';
import { AccordionFeatureType } from '@/utils/types/AccordionFeatureType';
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
import PropertyComments, { CommentType } from '@/components/PropertyDescription/Layout/PropertyComments';
import HeadingMedium from '@/components/Typography/HeadingMedium';
import RenterReviewsMetrics from '@/components/PropertyDescription/Layout/RenterReviewsMetrics';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import BadgeRounded from '@/components/UI/Badge/BadgeRounded';
import LeaveComment from '@/components/PropertyDescription/Layout/LeaveComment';
import CallToActionBlock from '@/components/Layout/Cta/CallToActionBlock';
import FeaturedProperties from '@/components/Home/Layout/FeaturedProperties';
import ViapropertySidebar from '@/components/Layout/Sidebar/ViapropertySidebar';

/*type PropertyDescriptionType = {
  // children: ReactNode;
}*/

export type LeaveCommentBadgeType = `Leave Review` | `Ask Question`;

export default function PropertyDescription(/*{  }: PropertyDescriptionType*/) {
  const [activeState, setActiveState] = useState<AccordionFeatureType>(`description`);
  const [activeLeaveCommentBadge, setActiveLeaveCommentBadge] = useState<LeaveCommentBadgeType>(`Leave Review`);
  const [reviewsAvailable, setReviewsAvailable] = useState<boolean>(true);


  const handleSetLeaveCommentBadge = (switchTo: CommentType | ActiveFilterTypeQuestions | LeaveCommentBadgeType) => {

    if (switchTo === 'Leave Review') {
      setReviewsAvailable(true);
    }
    if (switchTo === 'Ask Question') {
      setReviewsAvailable(false);
    }

    if (switchTo === 'Leave Review' || switchTo === 'Ask Question') {
      setActiveLeaveCommentBadge(switchTo);
    }
  };

  return (
    <main className={`mb-24 overflow-hidden`}>
      <div className={`max-w-[1320px] mx-auto w-full px-3 bp-480:px-6`}>
        <div className={`grid bp-1306:grid-cols-property-description grid-cols-1 mt-10 gap-5 pr-5 bp-1306:pr-0`}>
          <div>
            <PropertyGallery
              images={[PropertyGalleryImg1, PropertyGalleryImg2, PropertyGalleryImg3, PropertyGalleryImg4]} />

            <PropertyTags
              tags={[PropertyTagsEnum.APARTMENT, PropertyTagsEnum.FEATURED, PropertyTagsEnum.LUXURY, PropertyTagsEnum.NEW]} />

            <HeadingMedium customClasses={`mb-8`} maxWidthXL heading={`Exquisite
          design
          combined with posh interior`} />

            <PropertyConveniences wifi={true} bedrooms={3} showers={2} baths={1} beds={4} fullKitchen={true}
                                  sqftSize={1258} />
            <Accordion setActiveState={setActiveState} activeState={activeState} />

            <div className={`w-fit flex items-center bp-1306:hidden`}>
              <button
                className={`bg-linear-main-red flex text-white rounded-2xl w-full text-center justify-center text-2xl font-bold px-20 py-6 mt-7
                  transition-all duration-200 hover:animate-pulse`}>Buy
                Now
              </button>
            </div>

            <div className={`mt-14`}>
              <HeadingMedium customClasses={`mb-8`} heading={`About
            Landlord`} />

              <AboutLandlord online={true} initials={`Nikolas Baker`} abbrInitials={`N.B`} text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
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

              <div>
                <LeaveComment available={{ reviews: reviewsAvailable, questions: true }} badges={
                  (
                    <>
                      <BadgeRounded setActiveFilter={handleSetLeaveCommentBadge} label={`Leave Review`} color={`blue`}
                                    type={`lg`}
                                    state={activeLeaveCommentBadge} />

                      <BadgeRounded setActiveFilter={handleSetLeaveCommentBadge} label={`Ask Question`} color={`blue`}
                                    type={`lg`}
                                    state={activeLeaveCommentBadge} />
                    </>
                  )
                } />

              </div>
            </div>
          </div>

          <div className={`w-fit bp-1306:flex bp-1306:static fixed h-screen bg-white rounded-2xl -translate-x-full 
          bp-1306:translate-x-0 transition-all duration-200 opacity-0 pointer-events-none bp-1306:opacity-100 bp-1306:pointer-events-auto`}>
            <ViapropertySidebar />
          </div>

        </div>
      </div>
      <div className={`mt-20`}>
        <CallToActionBlock rounded={false} fullScreen type={`sell-rent`} />
      </div>
      <div>
        <FeaturedProperties
          headingLabel={`You might also like...`} headingSpan={`based on your search!`} headingHref={`/properties`} />
      </div>
    </main>
  );
}