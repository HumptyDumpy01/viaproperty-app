// 'use client';

/*type MapType = {
  // children: ReactNode;
}*/
import GoogleMap from '@/components/UI/Map/GoogleMap';

export default function Map(/*{  }: MapType*/) {
  console.log(`Executing process.env.GOOGLE_MAP_API_KEY: `, process.env.GOOGLE_MAP_API_KEY);
  return (
    <div
      className={`w-full h-fit rounded-2xl flex items-center justify-center bp-896:justify-normal bp-896:items-start`}>
      <GoogleMap locations={[{
        googleMap: {
          key: `Some Title 1`, location: {
            lat:
              -34.397, lng: 150.644
          }
        }
      }, { googleMap: { key: `Some Title 2`, location: { lat: -34.397, lng: 150.644 } } }]} />
    </div>
  );
}
