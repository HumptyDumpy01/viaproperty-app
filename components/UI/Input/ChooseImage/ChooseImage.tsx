// 'use client';

import { StaticImageData } from 'next/image';
import RectangularButton from '@/components/UI/Button/RectangularButton';
import ImagePreview from '@/components/UI/Input/ChooseImage/ImagePreview';

import PropertyImg1 from '@/assets/sell/property-img/property-img-1.png';
import PropertyImg2 from '@/assets/sell/property-img/property-img-2.png';
import PropertyImg3 from '@/assets/sell/property-img/property-img-3.png';

type ChooseImageType = {
  max: number;
  min: number;
  required?: boolean;
  // children: ReactNode;
}


export default function ChooseImage({ max, min, required = true }: ChooseImageType) {
  const images: StaticImageData[] = [PropertyImg1, PropertyImg2, PropertyImg3];
  return (
    <>
      <div className={`flex flex-col justify-center gap-4`}>
        <label htmlFor={`images`} className={`text-zinc-700 font-semibold`}>Choose images (Min {min} ,Max {max})
          {required ? `*` : ``}</label>
        <input type={`file`} id={`images`} name={`images`} className={`hidden`} multiple min={min} max={max}
               required={required} />
        <div className={`flex gap-4 items-center overflow-x-auto scrollbar-thin max-w-2xl`}>
          <RectangularButton btnLabel={`pick`} />
          {Array.from({ length: max }).map((_, index) => (
            <div>
              <ImagePreview key={index} imgSrc={images[index]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
