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

          <h1 className={`text-4xl bg-clip-text max-w-xl text-transparent bg-linear-main-red font-bold mb-6`}>Exquisite
            design
            combined with posh interior</h1>

          <PropertyConveniences wifi={true} bedrooms={3} showers={2} baths={1} beds={4} fullKitchen={true}
                                sqftSize={1258} />
          <Accordion setActiveState={setActiveState} activeState={activeState} />
          <div className={`mt-14`}>
            <h2 className={`text-4xl bg-clip-text text-transparent bg-linear-main-red font-bold flex w-fit 
            mb-8`}>About
              Landlord</h2>

            <AboutLandlord online={true} initials={`Nikolas Baker`} abbrInitials={`N.B`} text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do
                eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur....`} />

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
