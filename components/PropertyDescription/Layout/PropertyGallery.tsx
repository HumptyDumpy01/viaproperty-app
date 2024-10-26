// 'use client';

import { StaticImageData } from 'next/image';
import GalleryImage from '@/components/UI/Imagery/GalleryImage';

type PropertyGalleryType = {
  images: StaticImageData[];
  // children: ReactNode;
}

export default function PropertyGallery({ images }: PropertyGalleryType) {
  const heroImage = images[0];
  const galleryImages = images.slice(1, 4);
  return (
    <>
      <div className={`grid grid-cols-3 gap-2.5`}>
        <div className={`col-span-2 overflow-hidden cursor-pointer`}>
          <GalleryImage customDivClasses={`rounded-tl-3xl rounded-bl-3xl`} scale={true}
                        roundedStyle={`rounded-l-2xl`}
                        colSpan={2} imgSrc={heroImage}
                        imgAlt={`Property Image 1`} />
        </div>
        <div className={`flex flex-col h-full gap-2.5 cursor-pointer`}>
          <GalleryImage roundedStyle={`rounded-tr-2xl`} imgSrc={galleryImages[0]}
                        imgAlt={`Property Image 2`} />

          <GalleryImage imgSrc={galleryImages[1]}
                        imgAlt={`Property Image 3`} />

          <GalleryImage type={`label`} roundedStyle={`rounded-br-2xl`} imgsLeft={12}
                        imgSrc={galleryImages[2]}
                        imgAlt={`Property Image 4`} />
        </div>
      </div>
    </>
  );
}
