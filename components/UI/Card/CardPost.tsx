// 'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type CardPostType = {
  paragraphHighlighted: string;
  paragraph: string;
  srcImg: StaticImageData;
  altImg: string;
  href: string;
  type?: `default` | `view-more`
  // children: ReactNode;
}

export default function
  CardPost({
             paragraph,
             paragraphHighlighted,
             altImg,
             srcImg,
             href,
             type = `default`
           }: CardPostType) {
  return (
    <>
      {type === `default` && (
        <Link href={href} className={`flex min-w-72 min-h-[464px] relative group rounded-2xl`}>
          <div className={`w-full opacity-0 h-full bg-zinc-800/70 z-10 rounded-2xl transition-all duration-300 
              group-hover:opacity-100`}></div>
          <div className={`opacity-0 absolute bottom-5 left-4 z-30 
              transition-all duration-500 group-hover:opacity-100`}>
            <p className={`text-white text-xl pr-2`}><span
              className={`inline-block text-white font-semibold truncate`}>{paragraphHighlighted}</span>{paragraph}</p>
          </div>
          <div className={`absolute top-0 left-0`}>
            <Image className={`object-cover brightness-90 rounded-2xl`} src={srcImg} alt={altImg} />
          </div>
          <div
            className={`absolute top-52 z-20 left-[120px] w-16 h-16 bg-white flex items-center justify-center rounded-full`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
              <path
                d="M8.2301 5.29507V24.956C8.23004 25.1746 8.28832 25.3893 8.39892 25.5779C8.50952 25.7665 8.66844 25.9222 8.85928 26.0289C9.05013 26.1356 9.26598 26.1895 9.48457 26.1849C9.70317 26.1803 9.91659 26.1175 10.1028 26.0029L26.0773 16.1725C26.2562 16.0625 26.404 15.9086 26.5065 15.7253C26.609 15.542 26.6628 15.3355 26.6628 15.1255C26.6628 14.9155 26.609 14.7091 26.5065 14.5258C26.404 14.3425 26.2562 14.1885 26.0773 14.0786L10.1028 4.24813C9.91659 4.13356 9.70317 4.07075 9.48457 4.06619C9.26598 4.06162 9.05013 4.11546 8.85928 4.22215C8.66844 4.32884 8.50952 4.48452 8.39892 4.67313C8.28832 4.86173 8.23004 5.07643 8.2301 5.29507Z"
                fill="#FB3838" />
            </svg>
          </div>
        </Link>
      )}
      {type === `view-more` && (
        <>
          <Link href={href} className={`flex min-w-72 min-h-[464px] relative group rounded-2xl transition-all duration-300
          border-4 border-red-500 hover:border-transparent`}>
            <div
              className={`opacity-0 group-hover:opacity-100 rounded-2xl bg-linear-main-red z-10 w-full h-full`}></div>
            <div
              className={`absolute w-fit top-56 z-20 left-[70px] flex items-center justify-center rounded-full`}>
              <h3 className={`text-2xl bg-clip-text text-red-500 z-20 bg-linear-main-red mb-6 font-bold 
              uppercase group-hover:text-white group-hover:bg-none transition-all duration-300`}>view
                more</h3>
            </div>
          </Link>
        </>
      )}
    </>
  );
}
