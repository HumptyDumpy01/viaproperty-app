import React from 'react';
import MapComponent from '@/components/UI/Map/MapComponent';

type Location = {
  googleMap: {
    key: string;
    location: google.maps.LatLngLiteral;
    id: string;
    createdAt: string;
    locatedAt: string;
    price: string;
    image: string;
  };
  enableHover?: boolean;
};

interface GoogleMapProps {
  locations: Location[];
  enableHover?: boolean;
}

export default function GoogleMap({ locations, enableHover = true }: GoogleMapProps) {
  // console.log(`Executing locations: `, locations);
  return (
    <MapComponent
      enableHover={enableHover}
      apiKey={String(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY)}
      mapId={String(process.env.NEXT_PUBLIC_GOOGLE_MAP_ID)}
      locations={locations}
    />
  );
}
