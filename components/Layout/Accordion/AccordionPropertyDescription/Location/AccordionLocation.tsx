// 'use client';

type LocationType = {
  text: string;
  location: string;
  // children: ReactNode;
}

import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';
import Image from 'next/image';
import MapImg from '@/assets/property-description/map/map.png';

export default function AccordionLocation({ text, location }: LocationType) {
  return (
    <>
      <div className={`flex flex-col gap-7`}>
        <div className={`flex gap-6`}>
          <ViapropertyIcon icon={`location`} />
          <h3 className={`bg-clip-text text-transparent bg-linear-main-dark-blue font-bold`}>{location}</h3>
        </div>
        <div className={`flex w-[562px] h-[300px]`}>
          <Image className={`object-cover w-full h-full`} src={MapImg} alt={`Map Image`} />
        </div>
        <div>
          <p className={`text-sm text-zinc-700 leading-relaxed`}>{text}</p>
        </div>
      </div>
    </>
  );
}
