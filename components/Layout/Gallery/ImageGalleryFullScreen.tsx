'use client';

import { createPortal } from 'react-dom';
import CloseLayoutIcon from '@/components/UI/Button/CloseLayoutIcon';
import GalleryCard from '@/components/Layout/Gallery/GalleryCard';
import { useState } from 'react';

type ImageGalleryFullScreenType = {
  layoutOpen: boolean;
  dispatch: () => void;
  images: { src: string, alt: string }[];
  // children: ReactNode;
}

export default function ImageGalleryFullScreen({ layoutOpen, dispatch, images }: ImageGalleryFullScreenType) {
  const [activeImage, setActiveImage] = useState(images[0]);
  return createPortal(
    <>
      {layoutOpen && (
        <>
          <CloseLayoutIcon dispatch={dispatch} layoutOpen={layoutOpen} fixedPosition={`top-7 right-5`} />
        </>
      )}
      {layoutOpen && (
        <>
          <div className={`fixed bg-zinc-900/90 top-0 left-0 h-full w-full z-30`}></div>
        </>
      )}
      <div className={`fixed top-4 left-4 z-[51]`}>
        <div className={`h-screen w-screen flex flex-col gap-4 mt-7 relative`}>
          <GalleryCard hover={false} mode={`fullscreen`}
                       img={{ src: activeImage.src, alt: activeImage.alt }} />
          <div className={`flex gap-3 items-center
           fixed bottom-3 left-3 z-40 bg-zinc-900/20 rounded-2xl backdrop-blur-2xl overflow-x-auto scrollbar-thin p-2`}>
            {images.map(function(image) {
              return (
                <GalleryCard key={image.src} setActiveImage={setActiveImage} active={activeImage.src === image.src}
                             img={{ src: image.src, alt: image.alt }} />
              );
            })}
          </div>
        </div>
      </div>
    </>, document.getElementById('image-gallery-full-screen') as HTMLElement);
}