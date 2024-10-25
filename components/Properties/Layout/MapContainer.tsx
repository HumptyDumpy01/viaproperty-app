// 'use client';

/*type MapContainerType = {
  // children: ReactNode;
}*/

import Map from '@/components/Layout/Filter/Map/Map';

export default function MapContainer(/*{  }: MapContainerType*/) {
  return (
    <>
      <div className={`fixed inset-0 flex justify-center m-auto items-center bp-896:items-start z-10 bp-896:relative 
        bp-896:top-0 bp-896:left-0 bg-white/90 w-full h-full bp-896:w-auto 
        opacity-0 pointer-events-none transition-all duration-200 bp-896:opacity-100 bp-896:pointer-events-auto`}>
        <Map />
      </div>
    </>
  );
}
