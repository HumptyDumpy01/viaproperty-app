// 'use client';

import { StaticImageData } from 'next/image';
import ImagePreview from '@/components/UI/Input/ChooseImage/ImagePreview';

type ChooseImageType = {
  max: number;
  min: number;
  required?: boolean;
  // children: ReactNode;
}


export default function ChooseImage({ max, min, required = true }: ChooseImageType) {
  const images: StaticImageData[] = [];
  return (
    <>
      <div className={`flex flex-col justify-center gap-4`}>
        <label htmlFor={`images`} className={`text-zinc-700 font-semibold`}>Choose images (Min {min} ,Max {max})
          {required ? `*` : ``}</label>
        {/*
        <input type={`file`} id={`images`} name={`images`} className={`hidden`} multiple min={min} max={max}
               required={required} />
        */}
        <div className={`flex gap-4 items-center overflow-x-auto scrollbar-thin max-w-3xl`}>
          {/*<RectangularButton btnLabel={`pick`} />*/}
          {Array.from({ length: max }).map((_, index) => (
            <div key={index}>
              <ImagePreview index={index} key={index} imgSrc={images[index]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
