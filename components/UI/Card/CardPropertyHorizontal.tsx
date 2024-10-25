// 'use client';

import Image, { StaticImageData } from 'next/image';
import ButtonLink from '@/components/UI/Button/ButtonLink';

type CardPropertyLongType = {
  imgSrc: StaticImageData;
  imgAlt: string;
  heading: string;
  paragraph: string;
  type: string;
  createdAt: string;
  // children: ReactNode;
}

export default function
  CardPropertyHorizontal({
                           imgSrc,
                           imgAlt,
                           heading,
                           createdAt,
                           type,
                           paragraph
                         }: CardPropertyLongType) {
  return (
    <>
      <div className={`flex flex-col bp-620:flex-row gap-6`}>
        <div className={`h-44 bp-1364:w-80 mb-4 bp-620:mb-0`}>
          <Image className={`object-cover rounded-2xl`} src={imgSrc}
                 alt={imgAlt} />
        </div>
        <div>
          <h3 className={`text-slate-900 font-semibold text-[17px] mb-2`}>{heading}</h3>
          <p className={`text-slate-600 text-[13px] mb-4`}>{paragraph}</p>
          <div className={`flex justify-between`}>
            {type === `buy` && (
              <>
                <p className={`text-slate-800 font-semibold text-[15px]`}>From <span>$1,500,000</span></p>
              </>
            )}
            {type === `rent` && (
              <>
                <p
                  className={`text-green-600 font-semibold text-[15px]`}>From <span>$1,500</span><span
                  className={`text-sm`}>/month</span>
                </p>
              </>
            )}
            <span className={`text-zinc-400 text-sm`}>{createdAt} month ago</span>
          </div>
          <div className={`mt-4`}>
            <ButtonLink size={`medium`} animationPulse href={`/properties/1`} buttonLabel={`See Details`} />
          </div>
        </div>
      </div>
    </>
  );
}
