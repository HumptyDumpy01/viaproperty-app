// 'use client';

import LocationLabel from '@/components/UI/Label/LocationLabel';
import GoogleMap from '@/components/UI/Map/GoogleMap';
import React from 'react';
// import Image from 'next/image';
// import MapImg from '@/assets/property-description/map/map.png';

type LocationType = {
  location: string;
  googleMap: {
    key: string;
    location: google.maps.LatLngLiteral;
  }
  description: string;
  // children: ReactNode;
}

export default function AccordionLocation({ location, googleMap, description }: LocationType) {
  console.log(`Executing googleMap: `, googleMap);
  const locations = [
    {
      googleMap: {
        key: googleMap.key,
        location: googleMap.location,
        id: ``,
        createdAt: ``,
        locatedAt: ``,
        price: ``,
        image: ``

      }
    }
  ];
  return (
    <>
      <div className={`flex flex-col gap-7`}>
        <LocationLabel location={location} />
        <div className={`flex bp-620:w-[562px] h-[300px] rounded-2xl overflow-hidden`}>
          {/*<Image className={`object-cover w-full h-full`} src={MapImg} alt={`Map Image`} />*/}
          <GoogleMap enableHover={false} locations={locations} />
        </div>
        <div>
          <p className={`text-sm text-zinc-700 leading-relaxed`}>{description}</p>
        </div>
      </div>
    </>
  );
}
