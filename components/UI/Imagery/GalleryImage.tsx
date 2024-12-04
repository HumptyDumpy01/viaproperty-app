// 'use client';

import { CldImage } from 'next-cloudinary';
import React from 'react';

type GalleryImageType = {
  imgSrc: string;
  imgAlt: string;
  type?: `default` | `label`;
  imgsLeft?: number;
  colSpan?: number;
  roundedStyle?: string;
  scale?: boolean;
  rotate?: boolean;
  customDivClasses?: string;
  // children: ReactNode;
}

export default function
  GalleryImage({
                 imgSrc,
                 imgAlt,
                 type = `default`,
                 colSpan,
                 roundedStyle,
                 scale = true,
                 rotate = true,
                 customDivClasses,
                 imgsLeft
               }: GalleryImageType) {
  return (
    <>
      {type === `default` && (
        <>
          <div
            className={`${colSpan ? `col-span-${colSpan}` : ``} overflow-hidden cursor-pointer w-full  relative ${customDivClasses}`}>
            <CldImage
              fill
              src={imgSrc}
              alt={imgAlt}
              quality="auto:best"
              format={`auto`}
              placeholder="blur"
              blurDataURL={imgSrc}
              className={`object-cover w-full h-full ${roundedStyle ? roundedStyle : ``} brightness-90 
              ${scale ? `hover:scale-125` : ``} transition-all duration-150 ${rotate ? `hover:rotate-2` : ``} `}
            />
          </div>
        </>
      )}

      {type === `label` && (
        <>
          <div className={`w-full h-full overflow-hidden relative group`}>
            <div className={`w-full h-full top-0 left-0 absolute bg-white/80 z-10 group-hover:hidden
                transition-all duration-200`}></div>
            <div
              className={`absolute top-0 left-0 h-28 w-full z-20 flex items-center justify-center group-hover:hidden transition-all duration-200`}>
              {imgsLeft ? (
                <>
                  <p className={`text-zinc-600 font-semibold`}><span>+${imgsLeft}</span> Photos</p>
                </>
              ) : (
                <>
                  <p className={`text-zinc-600 font-semibold`}><span>Open Fullscreen Mode</span></p>
                </>
              )}
            </div>
            <div className={`relative h-24 overflow-hidden`}>
              <CldImage
                fill
                src={imgSrc}
                alt={imgAlt}
                quality="auto:best"
                format={`auto`}
                placeholder="blur"
                blurDataURL={imgSrc}
                className={`object-cover group-hover:blur-0 blur-[2px] ${roundedStyle ? roundedStyle : ``} transition-all duration-150 brightness-90 hover:brightness-100
                hover:scale-125 cursor-pointer hover:rotate-2`}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
