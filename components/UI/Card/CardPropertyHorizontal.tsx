// 'use client';

import ButtonLink from '@/components/UI/Button/ButtonLink';
import { CldImage } from 'next-cloudinary';
import React from 'react';

type CardPropertyLongType = {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  paragraph: string;
  price: string;
  type: `rent` | `buy`;
  createdAt: string;
  btnLink: {
    href: string;
    label: string;
  }
  btnSecondary?: {
    visible: boolean;
    label: string;
  }
  // children: ReactNode;
}

export default function
  CardPropertyHorizontal({
                           imgSrc,
                           imgAlt,
                           heading,
                           createdAt,
                           type,
                           paragraph,
                           btnLink,
                           btnSecondary = {
                             visible: false,
                             label: ``
                           },
                           price
                         }: CardPropertyLongType) {
  const trimmedHeading = heading.length > 40 ? heading.slice(0, 40) : heading;
  const trimmedParagraph = paragraph.length > 70 ? paragraph.slice(0, 70) : paragraph;

  // counting the exact number of days from the createdAt date
  const date = new Date(createdAt);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - date.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  const createdAtDays = Math.floor(differenceInDays);

  return (
    <>
      <div className={`flex flex-col bp-620:flex-row gap-6`}>
        <div className={`h-44 w-44 bp-1364:w-80 mb-4 bp-620:mb-0 overflow-hidden relative rounded-2xl`}>
          <CldImage
            width={160}
            height={200}
            src={imgSrc}
            alt={imgAlt}
            quality="auto:best"
            format={`auto`}
            placeholder="blur"
            blurDataURL={imgSrc}
            className={`object-cover rounded-2xl overflow-hidden absolute w-full h-full`}
          />
        </div>
        <div>
          <h3 className={`text-slate-900 font-semibold text-[17px] mb-2`}>{trimmedHeading}</h3>
          <p className={`text-slate-600 text-[13px] mb-4`}>{trimmedParagraph}</p>
          <div className={`flex justify-between`}>
            {type === `buy` && (
              <>
                <p className={`text-slate-800 font-semibold text-[15px]`}>From <span>${price}</span></p>
              </>
            )}
            {type === `rent` && (
              <>
                <p
                  className={`text-green-600 font-semibold text-[15px]`}>From <span>${[price]}</span><span
                  className={`text-sm`}>/month</span>
                </p>
              </>
            )}
            <span className={`text-zinc-400 text-sm`}>{createdAtDays} days ago</span>
          </div>
          <div className={`mt-4 flex items-center gap-14`}>
            <div>
              <ButtonLink size={`medium`} animationPulse href={btnLink.href} buttonLabel={btnLink.label} />
            </div>
            {btnSecondary?.visible && (
              <>
                <button className={`text-[15px] font-semibold text-zinc-600
                transition-all duration-200 hover:scale-105 hover:text-red-600`}>{btnSecondary.label}</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
