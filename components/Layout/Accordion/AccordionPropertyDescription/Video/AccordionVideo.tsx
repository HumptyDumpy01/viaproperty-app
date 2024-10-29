// 'use client';

/*type AccordionVideoType = {
  // children: ReactNode;
}*/

import Image from 'next/image';
import videoPreviewImg from '@/assets/property-description/video/video-preview.png';
import React from 'react';

export default function AccordionVideo(/*{  }: AccordionVideoType*/) {
  return (
    <>
      <div className={`bp-620:w-[562px] h-[300px] relative rounded-3xl group cursor-pointer`}>
        <div className={`absolute cursor-pointer z-10 top-0 left-0 w-full h-full rounded-3xl`}>
          <Image src={videoPreviewImg} alt={`Video tour preview`}
                 className={`object-cover w-full h-full rounded-3xl`} />
        </div>
        <div className={`absolute w-full h-full bg-zinc-700/80 z-20 rounded-3xl`}></div>
        <div
          className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 left-1/2 w-16 h-16 bg-white flex items-center justify-center rounded-full`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
            <path
              d="M8.2301 5.29507V24.956C8.23004 25.1746 8.28832 25.3893 8.39892 25.5779C8.50952 25.7665 8.66844 25.9222 8.85928 26.0289C9.05013 26.1356 9.26598 26.1895 9.48457 26.1849C9.70317 26.1803 9.91659 26.1175 10.1028 26.0029L26.0773 16.1725C26.2562 16.0625 26.404 15.9086 26.5065 15.7253C26.609 15.542 26.6628 15.3355 26.6628 15.1255C26.6628 14.9155 26.609 14.7091 26.5065 14.5258C26.404 14.3425 26.2562 14.1885 26.0773 14.0786L10.1028 4.24813C9.91659 4.13356 9.70317 4.07075 9.48457 4.06619C9.26598 4.06162 9.05013 4.11546 8.85928 4.22215C8.66844 4.32884 8.50952 4.48452 8.39892 4.67313C8.28832 4.86173 8.23004 5.07643 8.2301 5.29507Z"
              fill="#FB3838" />
          </svg>
        </div>
      </div>
    </>
  );
}
