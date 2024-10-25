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
import PropertyComments from '@/components/PropertyDescription/Layout/PropertyComments';
import HeadingMedium from '@/components/Typography/HeadingMedium';
import StarIcon from '@/components/UI/Icon/FilledStar';
import MetricDisplayRating from '@/components/UI/MetricDisplay/MetricDisplayRating';

/*type PropertyDescriptionType = {
  // children: ReactNode;
}*/


export default function PropertyDescription(/*{  }: PropertyDescriptionType*/) {
  const [activeState, setActiveState] = useState<AccordionFeatureType>(`description`);

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


            <div className={`mb-20`}>
              <HeadingMedium customClasses={`mb-8`} heading={`Renter Reviews & Ratings`} />
              <div className={`flex items-center gap-6 w-fit border-b-2 border-r-zinc-200 pb-10 mb-11`}>
                <div>
                  <span
                    className={`inline-block text-9xl bg-clip-text text-transparent bg-linear-main-red font-bold`}>4.4</span>
                </div>
                <div className={`flex flex-col gap-2`}>
                  <div className={`flex items-center gap-2`}>
                    <StarIcon size={`lg`} state={`filled`} />
                    <StarIcon size={`lg`} state={`filled`} />
                    <StarIcon size={`lg`} state={`filled`} />
                    <StarIcon size={`lg`} state={`filled`} />
                    <StarIcon size={`lg`} state={`empty`} />
                  </div>
                  <p>Based on <span className={`font-medium border-r-zinc-800`}>576 ratings</span></p>
                </div>
              </div>
              <div>
                <div className={`flex items-center gap-y-24`}>
                  <div className={`flex flex-col gap-6 items-center`}>
                    <div className={`flex gap-24 items-center mr-auto`}>
                      <MetricDisplayRating label={`Location`} rating={4.5} size={`md`} />
                      <MetricDisplayRating label={`Condition`} rating={3.9} size={`md`} />
                    </div>

                    <div className={`flex gap-24  mr-auto`}>
                      <MetricDisplayRating label={`Ownership`} rating={4} size={`md`} />
                      <MetricDisplayRating label={`Security`} rating={3.33} size={`md`} />
                    </div>

                    <div className={`flex gap-24  mr-auto`}>
                      <MetricDisplayRating label={`Noise Level`} rating={2} size={`md`} />
                      <MetricDisplayRating label={`Amenities`} rating={4} size={`md`} />
                    </div>
                  </div>

                  <div>

                  </div>
                </div>
              </div>
            </div>

            <PropertyComments />

          </div>
        </div>
        <div>
          JKERJ
        </div>
      </div>
    </main>
  );
}
