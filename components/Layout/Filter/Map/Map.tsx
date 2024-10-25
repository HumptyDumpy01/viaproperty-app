// 'use client';

/*type MapType = {
  // children: ReactNode;
}*/
import GoogleMapImg from '@/assets/properties/map.png';
import Image from 'next/image';

export default function Map(/*{  }: MapType*/) {
  return (
    <div
      className={`w-full h-fit rounded-2xl flex items-center justify-center bp-896:justify-normal bp-896:items-start`}>
      <Image className={`object-cover  rounded-3xl`} src={GoogleMapImg} alt={`Google Map Image`} />
    </div>
  );
}
