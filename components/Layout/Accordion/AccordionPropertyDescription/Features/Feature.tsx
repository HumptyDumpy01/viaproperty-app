// 'use client';

import { CldImage } from 'next-cloudinary';

type FeaturesType = {
  // children: ReactNode;
  images: string[] | undefined;
  imgDimensions?: string;
  heading: string;
  text: string;
}

export default function Feature({ images, text, heading, imgDimensions = `w-28 h-28` }: FeaturesType) {
  return (
    <>
      <div className={`flex flex-col`}>
        <h2 className={`text-xl font-semibold text-zinc-900 mb-6`}>{heading}</h2>
        {images && (
          <>
            <div className={`flex items-center gap-4 rounded-2xl mb-10`}>
              {images.map(function(image, index) {
                return (
                  <div
                    className={`cursor-pointer overflow-hidden rounded-2xl ${imgDimensions} relative ${imgDimensions}`}
                    key={image}>
                    <CldImage
                      fill
                      blurDataURL={image} placeholder={`blur`}
                      className={`rounded-2xl transition-all duration-200 
                hover:scale-125 hover:rotate-2`} src={image}
                      key={image} alt={`${heading} Feature Image ${index + 1}`}
                    />
                  </div>
                );
              })}
            </div>
          </>
        )}
        <p className={`text-[15px] text-zinc-600 leading-relaxed`}>{text}</p>
      </div>
    </>
  );
}
