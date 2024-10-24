// 'use client';

/*type MapType = {
  // children: ReactNode;
}*/
import GoogleMapImg from '@/assets/properties/map.png';
import Image from 'next/image';

export default function Map(/*{  }: MapType*/) {
  return (
    <div className={`w-full h-fit rounded-2xl`}>
      <Image className={`object-cover  rounded-3xl`} src={GoogleMapImg} alt={`Google Map Image`} />
    </div>
  );
}
