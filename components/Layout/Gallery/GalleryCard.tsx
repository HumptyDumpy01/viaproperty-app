// 'use client';

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
          <div className={`rounded-2xl fixed top-0 left-0 h-screen`}>
            <img src={img.src} alt={img.alt}
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
            <img src={img.src} alt={img.alt}
                 className={`object-cover w-full h-full  ${active ? `brightness-105` : `brightness-75`} hover:brightness-100 transition-all duration-300 hover:scale-125 cursor-pointer select-none`}
                 draggable={false} />
          </div>
        </>
      )}
    </>
  );
}
