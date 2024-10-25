// 'use client';

import Image, { StaticImageData } from 'next/image';

type GalleryImageType = {
  imgSrc: StaticImageData;
  imgAlt: string
  type?: `default` | `label`;
  imgsLeft?: number;
  colSpan?: number;
  roundedStyle?: string;
  // children: ReactNode;
}

export default function
  GalleryImage({
                 imgSrc,
                 imgAlt,
                 type = `default`,
                 imgsLeft = 1,
                 colSpan,
                 roundedStyle
               }: GalleryImageType) {
  return (
    <>
      {type === `default` && (
        <>
          <div className={`${colSpan ? `col-span-${colSpan}` : ``} overflow-hidden cursor-pointer w-full h-full`}>
            <Image className={`object-cover w-full h-full ${roundedStyle ? roundedStyle : ``} brightness-90 
              hover:scale-125 transition-all duration-150 hover:rotate-2 `} src={imgSrc}
                   alt={imgAlt} />

          </div>
        </>
      )}

      {type === `label` && (
        <>
          <div className={`w-full h-full overflow-hidden relative group`}>
            <div className={`w-full h-full top-0 left-0 absolute bg-white/80 z-10 group-hover:hidden
                transition-all duration-200`}></div>
            <div
              className={`absolute top-0 left-0 h-full w-full z-20 flex items-center justify-center group-hover:hidden transition-all duration-200`}>
              <p className={`text-zinc-600 font-semibold`}><span>+12</span> Photos</p>
            </div>
            <Image className={`object-cover group-hover:blur-0 blur-[2px] ${roundedStyle ? roundedStyle : ``} w-full h-full  transition-all duration-150 brightness-90 hover:brightness-100
                hover:scale-125 cursor-pointer hover:rotate-2`} src={imgSrc}
                   alt={`Property Image 4`} />
          </div>
        </>
      )}
    </>
  );
}
