// 'use client';

type FeaturesType = {
  // children: ReactNode;
  images: StaticImageData[];
  imgDimensions: { width: number, height: number };
  heading: string;
  text: string;
}

import Image, { StaticImageData } from 'next/image';

export default function Feature({ images, text, heading, imgDimensions }: FeaturesType) {
  return (
    <>
      <div className={`flex flex-col`}>
        <h2 className={`text-xl font-semibold text-zinc-900 mb-6`}>{heading}</h2>
        <div className={`flex items-center gap-4 rounded-2xl mb-10`}>
          {images.map(function(image) {
            return (
              <div className={`cursor-pointer overflow-hidden rounded-2xl`} key={image.src}>
                <Image className={`rounded-2xl transition-all duration-200 
                hover:scale-125 hover:rotate-2`} src={image} key={image.src} alt={`Feature Image 1`}
                       width={imgDimensions.width}
                       height={imgDimensions.height} />
              </div>
            );
          })}

        </div>
        <p className={`text-[15px] text-zinc-600 leading-relaxed`}>{text}</p>
      </div>
    </>
  );
}
