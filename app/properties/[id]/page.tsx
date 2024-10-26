'use client';

import { useState } from 'react';
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
import BadgeRounded from '@/components/UI/Badge/BadgeRounded';
import { ActiveFilterTypeQuestions } from '@/utils/types/activeFilterTypeQuestions';
import StarRating from '@/components/UI/Input/StarRating';

/*type PropertyDescriptionType = {
  // children: ReactNode;
}*/

export type LeaveCommentBadgeType = `Leave Review` | `Ask Question`;

export default function PropertyDescription(/*{  }: PropertyDescriptionType*/) {
  const [activeState, setActiveState] = useState<AccordionFeatureType>(`description`);
  const [activeLeaveCommentBadge, setActiveLeaveCommentBadge] = useState<LeaveCommentBadgeType>(`Leave Review`);


  const handleSetLeaveCommentBadge = (switchTo: CommentType | ActiveFilterTypeQuestions | LeaveCommentBadgeType) => {
    if (switchTo === 'Leave Review' || switchTo === 'Ask Question') {
      setActiveLeaveCommentBadge(switchTo);
    }
  };

  return (
    <main className={`max-w-[1320px] mx-auto w-full mb-24`}>
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

            <div className={``}>
              <h2 className={`text-4xl bg-clip-text text-transparent bg-linear-main-dark-blue font-bold flex w-fit
                mb-8`}>Share your Experience or Ask <br /> a Question</h2>

              <div className={`flex gap-3 mb-9`}>

                <BadgeRounded setActiveFilter={handleSetLeaveCommentBadge} label={`Leave Review`} color={`blue`}
                              type={`lg`}
                              state={activeLeaveCommentBadge} />

                <BadgeRounded setActiveFilter={handleSetLeaveCommentBadge} label={`Ask Question`} color={`blue`}
                              type={`lg`}
                              state={activeLeaveCommentBadge} />

              </div>

              <div className={`flex flex-col gap-8`}>
                <div className={`flex items-center gap-16`}>
                  <StarRating name={`location`} label={`Location`} />
                  <StarRating label={`Security`} name={`security`} />
                </div>

                <div className={`flex items-center gap-16`}>
                  <StarRating name={`condition`} label={`Condition`} />
                  <StarRating name={`noiseLevel`} label={`Noise Level`} />
                </div>

                <div className={`flex items-center gap-16`}>
                  <StarRating name={`ownership`} label={`Ownership`} />
                  <StarRating name={`amenities`} label={`Amenities`} />
                </div>
                <div>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div>
          Sidebar
        </div>
      </div>
    </main>
  );
}