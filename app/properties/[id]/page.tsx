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
import LabelAndTextBadge from '@/components/UI/Badge/LabelAndTextBadge';
import ExpandIcon from '@/components/UI/Icon/ExpandIcon';
import Checkbox from '@/components/UI/Checkbox/Checkbox';

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
    <main className={`mb-24`}>
      <div className={`max-w-[1320px] mx-auto w-full px-3 bp-480:px-6`}>
        <div className={`grid grid-cols-property-description mt-10 gap-5`}>
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
          <div className={`border h-fit border-red-500 rounded-3xl p-7 w-full`}>
            <div className={`flex items-center justify-between mb-6`}>
              <div className={`flex gap-5 items-center`}>
                <span
                  className={`bg-clip-text inline-block text-transparent bg-linear-main-red font-bold text-2xl`}>$144,698</span>
                <span className={`text-zinc-300 inline-block line-through`}>$180,872</span>
              </div>
              <span
                className={`inline-block text-[13px] font-semibold bg-linear-main-red text-white px-3 py-1 rounded-full`}>20%</span>
            </div>
            <div>
              <h2 className={`bg-clip-text mb-4 text-transparent bg-linear-main-red font-bold text-3xl`}>Let&#39;s Buy
                it!</h2>
              <div className={`flex flex-col gap-3.5 mb-7`}>
                <LabelAndTextBadge label={`Location`} text={`UK, Birmingham, Lauchester street 14`} />
                <LabelAndTextBadge label={`Selling Options`} text={`Buy a Property`} />
              </div>
              <div className={`flex flex-col gap-2 justify-center`}>
                <div className={`flex justify-between items-center mb-4`}>
                  <h3 className={`bg-clip-text text-xl text-transparent bg-linear-main-red font-bold`}>Extra
                    Features</h3>
                  <ExpandIcon type={`collapse`} />
                </div>

                <div className={`flex items-center justify-between`}>
                  <div>
                    <Checkbox label={`Garage`} name={`garage`} />
                  </div>
                  <div>
                    <span className={`text-sm bg-clip-text text-transparent bg-linear-main-dark-blue`}>177$</span>
                  </div>
                </div>

                <div className={`flex items-center justify-between`}>
                  <div>
                    <Checkbox label={`Home Warranty`} name={`HomeWarranty`} />
                  </div>
                  <div>
                    <span className={`text-sm bg-clip-text text-transparent bg-linear-main-dark-blue`}>1277$</span>
                  </div>
                </div>

                <div className={`flex items-center justify-between`}>
                  <div>
                    <Checkbox label={`Home Inspection`} name={`HomeInspection`} />
                  </div>
                  <div>
                    <span className={`text-sm bg-clip-text text-transparent bg-linear-main-dark-blue`}>456$</span>
                  </div>
                </div>

                <div className={`flex items-center justify-between`}>
                  <div>
                    <Checkbox label={`Include Furniture`} name={`IncludeFurniture`} />
                  </div>
                  <div>
                    <span className={`text-sm bg-clip-text text-transparent bg-linear-main-dark-blue`}>2177$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-20`}>
        </div>
      </div>
      <div>
        <CallToActionBlock rounded={false} fullScreen type={`sell-rent`} />
      </div>
      <div>
        <FeaturedProperties
          headingLabel={`You might also like...`} headingSpan={`based on your search!`} headingHref={`/properties`} />
      </div>
    </main>
  );
}