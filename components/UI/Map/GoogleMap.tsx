import React from 'react';
import MapComponent from '@/components/UI/Map/MapComponent';

type Location = {
  googleMap: {
    key: string;
    location: google.maps.LatLngLiteral;
  };
};

interface GoogleMapProps {
  locations: Location[];
}

export default function GoogleMap({ locations }: GoogleMapProps) {
  // console.log(`Executing locations: `, locations);

  return (
    <MapComponent
      apiKey={String(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY)}
      mapId={String(process.env.NEXT_PUBLIC_GOOGLE_MAP_ID)}
      locations={locations}
    />
  );
}
