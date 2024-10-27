// 'use client';

import { createPortal } from 'react-dom';
import Image from 'next/image';
import GalleryImg1 from '@/assets/property-description/gallery/property-description-1.png';
import GalleryImg2 from '@/assets/property-description/gallery/property-description-2.png';
import GalleryImg3 from '@/assets/property-description/gallery/property-description-3.png';
import GalleryImg4 from '@/assets/property-description/gallery/property-description-4.png';
import CloseLayoutIcon from '@/components/UI/Button/CloseLayoutIcon';

type ImageGalleryFullScreenType = {
  layoutOpen: boolean;
  dispatch: () => void;
  // children: ReactNode;
}

export default function ImageGalleryFullScreen({ layoutOpen, dispatch }: ImageGalleryFullScreenType) {
  return createPortal(
    <>
      {layoutOpen && (
        <>
          <CloseLayoutIcon dispatch={dispatch} layoutOpen={layoutOpen} fixedPosition={`top-7 left-5`} />
        </>
      )}
      {layoutOpen && (
        <>
          <div className={`fixed bg-zinc-900/90 top-0 left-0 h-full w-full z-30`}></div>
        </>
      )}
      <div className={`fixed top-4 left-4 z-40`}>
        <div className={`h-screen w-full flex gap-4 items-center overflow-x-auto scrollbar-thin`}>
          <div className={`overflow-hidden w-[460px] h-[340px] rounded-2xl flex`}>
            <Image className={`object-cover overflow-hidden w-fit h-fit`} src={GalleryImg1} alt={`Gallery Image 1`} />
          </div>

          <div className={`overflow-hidden w-[460px] h-[340px] rounded-2xl`}>
            <Image className={`object-cover overflow-hidden w-full h-full`} src={GalleryImg2} alt={`Gallery Image 2`} />
          </div>

          <div className={`overflow-hidden w-[460px] h-[340px] rounded-2xl`}>
            <Image className={`object-cover overflow-hidden w-full h-full`} src={GalleryImg3} alt={`Gallery Image 3`} />
          </div>

          <div className={`overflow-hidden w-[460px] h-[340px] rounded-2xl`}>
            <Image className={`object-cover overflow-hidden w-full h-full`} src={GalleryImg4} alt={`Gallery Image 4`} />
          </div>
        </div>
      </div>
    </>, document.getElementById('image-gallery-full-screen') as HTMLElement);
}