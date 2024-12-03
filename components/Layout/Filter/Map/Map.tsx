import React from 'react';
import GoogleMap from '@/components/UI/Map/GoogleMap';

export default function Map() {
  return (
    <div
      className={`w-full h-fit rounded-2xl flex items-center justify-center bp-896:justify-normal bp-896:items-start`}>
      <GoogleMap locations={[
        {
          googleMap: {
            key: `Point near Texas`,
            location: { lat: 31.9686, lng: -99.9018 }
          }
        },
        {
          googleMap: {
            key: `Point near Los Angeles`,
            location: { lat: 34.0522, lng: -118.2437 }
          }
        }
      ]} />
    </div>
  );
}