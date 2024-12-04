'use client';

import GalleryImage from '@/components/UI/Imagery/GalleryImage';
import { useState } from 'react';
import ImageGalleryFullScreen from '@/components/Layout/Gallery/ImageGalleryFullScreen';

type PropertyGalleryType = {
  images: string[];
  title: string;
  // children: ReactNode;
}

export default function PropertyGallery({ images, title }: PropertyGalleryType) {
  const heroImage = images[0];
  const galleryImages = images.slice(1, 4);
  const [openGalleryLayout, setOpenGalleryLayout] = useState<boolean>(false);

  return (
    <>
      {openGalleryLayout && (
        <>
          <ImageGalleryFullScreen images={
            images.map((image, index) => {
              return { src: image, alt: `${title} Full Screen Image ${index + 1}` };
            })
          } dispatch={() => setOpenGalleryLayout(false)} layoutOpen={openGalleryLayout} />
        </>
      )}
      <div onClick={() => setOpenGalleryLayout(true)} className={`grid bp-1306:grid-cols-3 grid-cols-2 gap-2.5
      max-h-[400px] bp-700:h-auto overflow-hidden`}>
        <div className={`bp-1306:col-span-2 overflow-hidden cursor-pointer relative h-96`}>
          <GalleryImage customDivClasses={`rounded-tl-3xl rounded-bl-3xl h-full`} scale={true}
                        roundedStyle={`rounded-l-2xl`}
                        colSpan={2} imgSrc={heroImage}
                        imgAlt={`${title} Image 1`} />
        </div>
        <div className={`flex flex-col h-full gap-2.5 cursor-pointer`}>
          <GalleryImage customDivClasses={`h-44`} roundedStyle={`rounded-tr-2xl`} imgSrc={galleryImages[0]}
                        imgAlt={`${title} Property Image 2`} />

          <GalleryImage
            customDivClasses={`h-80`}
            imgSrc={galleryImages[1]}
            imgAlt={`${title} Property Image 3`} />

          <GalleryImage
            customDivClasses={`h-full`}
            type={`label`} roundedStyle={`rounded-br-2xl`} imgsLeft={images.length - 4}
            imgSrc={galleryImages[2]}
            imgAlt={`${title} Property Image 4`} />
        </div>
      </div>
    </>
  );
}
