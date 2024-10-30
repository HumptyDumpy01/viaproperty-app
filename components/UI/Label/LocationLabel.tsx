// 'use client';

type LocationLabelType = {
  location: string;
  // children: ReactNode;
}

import ViapropertyIcon from '@/components/UI/Icon/ViapropertyIcon';

export default function LocationLabel({ location }: LocationLabelType) {
  return (
    <>
      <div className={`flex gap-6`}>
        <ViapropertyIcon icon={`location`} />
        <h3 className={`bg-clip-text text-transparent bg-linear-main-dark-blue font-bold`}>{location}</h3>
      </div>
    </>
  );
}
