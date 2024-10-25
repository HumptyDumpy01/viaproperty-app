'use client';

import PropertyGalleryImg1 from '@/assets/property-description/gallery/property-description-1.png';
import PropertyGalleryImg2 from '@/assets/property-description/gallery/property-description-2.png';
import PropertyGalleryImg3 from '@/assets/property-description/gallery/property-description-3.png';
import PropertyGalleryImg4 from '@/assets/property-description/gallery/property-description-4.png';
import GalleryImage from '@/components/UI/Imagery/GalleryImage';
import BadgeType from '@/components/UI/Badge/BadgeType';
import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import BadgeTag from '@/components/UI/Badge/BadgeTag';
import BadgeTagWithIcon from '@/components/UI/Badge/BadgeTagWithIcon';
import { useState } from 'react';
import { AccordionFeatureType } from '@/utils/types/AccordionFeatureType';
import Accordion from '@/components/Layout/Accordion/AccordionPropertyDescription/Accordion';

/*type PropertyDescriptionType = {
  // children: ReactNode;
}*/


export default function PropertyDescription(/*{  }: PropertyDescriptionType*/) {
  const [activeState, setActiveState] = useState<AccordionFeatureType>(`description`);

  return (
    <main className={`max-w-[1320px] mx-auto w-full mb-24`}>
      <div className={`grid grid-cols-property-description mt-10 gap-5`}>
        <div>
          <div className={`grid grid-cols-3 gap-2.5`}>
            <div className={`col-span-2 overflow-hidden cursor-pointer`}>
              <GalleryImage roundedStyle={`rounded-l-2xl`} colSpan={2} imgSrc={PropertyGalleryImg1}
                            imgAlt={`Property Image 1`} />
            </div>
            <div className={`flex flex-col h-full gap-2.5 cursor-pointer`}>
              <GalleryImage roundedStyle={`rounded-tr-2xl`} imgSrc={PropertyGalleryImg2}
                            imgAlt={`Property Image 2`} />

              <GalleryImage imgSrc={PropertyGalleryImg3}
                            imgAlt={`Property Image 3`} />

              <GalleryImage type={`label`} roundedStyle={`rounded-br-2xl`} imgsLeft={12}
                            imgSrc={PropertyGalleryImg4}
                            imgAlt={`Property Image 4`} />
            </div>
          </div>

          <div className={`mb-5 mt-3 flex items-center justify-between`}>
            <div className={`flex gap-3 mt-3 ml-2`}>
              <BadgeType text={`Featured`} />
              <BadgeType text={`Apartment`} />
              <BadgeType text={`Rent`} />
              <BadgeType text={`On Sale`} />
            </div>
            <div className={`flex gap-6 items-center`}>
              <ViapropertyIcon icon={`heart`} />
              <ViapropertyIcon icon={`share`} />
            </div>
          </div>

          <h1 className={`text-4xl bg-clip-text max-w-xl text-transparent bg-linear-main-red font-bold mb-6`}>Exquisite
            design
            combined with posh interior</h1>
          <div className={`flex gap-6 overflow-y-auto max-h-8 pb-3 w-full scrollbar-hide mb-5`}>
            <BadgeTagWithIcon icon={`wifi`} label={`Wi-Fi`} />
            <BadgeTag abbreviation={`sqft`} metric={`Size`} number={1256} />
            <BadgeTag metric={`Beds`} number={4} />
            <BadgeTag metric={`Showers`} number={1} />
            <BadgeTag metric={`Baths`} number={2} />
            <BadgeTag metric={`Bedrooms`} number={3} />
            <BadgeTag metric={`Full Kitchen`} />
          </div>
          <Accordion setActiveState={setActiveState} activeState={activeState} />
        </div>
        <div>
          JKERJ
        </div>
      </div>
    </main>
  );
}
