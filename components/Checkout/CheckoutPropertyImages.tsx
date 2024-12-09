// 'use client';

import { CldImage } from 'next-cloudinary';
import React from 'react';

type CheckoutPropertyImagesType = {
  images: string[];
  title: string;
  // children: ReactNode;
}

export default function CheckoutPropertyImages({ images, title }: CheckoutPropertyImagesType) {
  const imgContainerClasses = [`relative w-full h-full row-span-3 rounded-[30px] overflow-hidden`,
    `relative`,
    `row-span-2 relative`, `row-span-2 relative`];
  const trimmedImages = images.slice(0, 4);
  return (
    <>
      <div
        className={`grid grid-cols-proceed-with-purchase grid-rows-proceed-with-purchase gap-3.5 pb-12 border-b border-b-blue-100 mb-9`}>
        {trimmedImages.length > 0 && trimmedImages.map(function(img, index) {
          return (
            <div key={img} className={imgContainerClasses[index]}>
              <CldImage
                fill
                src={trimmedImages[index]}
                alt={`${title} Image ${index + 1}`}
                quality="auto:best"
                format={`auto`}
                placeholder="blur"
                blurDataURL={trimmedImages[index]}
                className={`object-cover w-full h-full rounded-[30px] cursor-pointer select-none`} draggable={false} />
            </div>
          );
        })}
      </div>
    </>
  );
}
