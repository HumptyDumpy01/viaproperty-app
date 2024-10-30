// 'use client';

import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Image, { StaticImageData } from 'next/image';

type ImagePreviewType = {
  imgSrc: StaticImageData | null;
  // children: ReactNode;
}

export default function ImagePreview({ imgSrc }: ImagePreviewType) {
  return (
    <div className={`w-28 h-28 overflow-hidden cursor-pointer transition-all duration-200
    hover:rotate-3 hover:scale-95`}>
      {imgSrc && (
        <>
          <Image src={imgSrc} alt={`Property Image 1`}
                 className={`object-cover w-full h-full rounded-2xl border border-transparent`} />
        </>
      )}
      {!imgSrc && (
        <div className={`border-2 border-red-500 flex items-center justify-center w-full h-full rounded-2xl`}>
          <ViapropertyIcon icon={`logo`} />
        </div>
      )}
    </div>
  );
}
