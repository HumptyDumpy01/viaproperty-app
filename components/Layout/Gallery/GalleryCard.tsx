// 'use client';

import { CldImage } from 'next-cloudinary';

type GalleryCardType = {
  img: { src: string, alt: string };
  mode?: `fullscreen` | `normal`;
  active?: boolean;
  setActiveImage?: (image: { src: string, alt: string }) => void;
  hover?: boolean;
  // children: ReactNode;
}

export default function GalleryCard({ img, mode = `normal`, active, setActiveImage, hover = true }: GalleryCardType) {
  const hoverEffect = `hover:scale-110 hover:brightness-105`;
  return (
    <>
      {mode === `fullscreen` && (
        <>
          <div className={`rounded-2xl fixed top-0 left-0 h-screen w-screen`}>
            <CldImage
              fill
              src={img.src}
              alt={img.alt}
              quality="auto:best"
              format={`auto`}
              placeholder="blur"
              blurDataURL={img.src}
              className={`object-cover h-screen w-screen brightness-95 transition-all duration-200 
              ${hover ? hoverEffect : ``} cursor-pointer select-none`} draggable={false} />
          </div>
        </>
      )}
      {mode === `normal` && (
        <>
          <div
            onClick={() => setActiveImage && setActiveImage({ src: img.src, alt: img.alt })}
            className={`w-24 h-24 bg-red-200 overflow-hidden rounded-2xl ${active ? `outline outline-red-500` : ``}
            transition-all duration-300`}>
            <div className={`relative w-full h-full`}>
              <CldImage
                fill
                src={img.src}
                alt={img.alt}
                quality="auto:best"
                format={`auto`}
                placeholder="blur"
                blurDataURL={img.src}
                className={`absolute object-cover w-full h-full ${active ? `brightness-105` : `brightness-75`}
              ${hover ? hoverEffect : ``} transition-all duration-300 cursor-pointer select-none`} draggable={false} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
