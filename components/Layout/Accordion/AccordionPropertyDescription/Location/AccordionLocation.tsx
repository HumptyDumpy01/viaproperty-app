// 'use client';

import LocationLabel from '@/components/UI/Label/LocationLabel';
import Image from 'next/image';
import MapImg from '@/assets/property-description/map/map.png';

type LocationType = {
  text: string;
  location: string;
  // children: ReactNode;
}

export default function AccordionLocation({ text, location }: LocationType) {
  return (
    <>
      <div className={`flex flex-col gap-7`}>
        <LocationLabel location={location} />
        <div className={`flex bp-620:w-[562px] h-[300px] rounded-2xl overflow-hidden`}>
          <Image className={`object-cover w-full h-full`} src={MapImg} alt={`Map Image`} />
        </div>
        <div>
          <p className={`text-sm text-zinc-700 leading-relaxed`}>{text}</p>
        </div>
      </div>
    </>
  );
}
