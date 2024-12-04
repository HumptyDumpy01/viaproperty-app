import React from 'react';
import { useCartSelector } from '@/store/hooks';
import { PropertyType } from '@/utils/types/PropertyType';
import { Skeleton } from '@mui/material';
import GoogleMap from '@/components/UI/Map/GoogleMap';

export default function Map() {
  const properties = useCartSelector((state) => state.properties.allPropertiesOriginal);

  if (!properties || properties.length === 0) {
    return (
      <div>
        <Skeleton className={`h-screen w-screen bp-896:w-96 rounded-3xl overflow-hidden`} />
      </div>
    );
  }

  const locations = properties.map((property: PropertyType) => ({
    googleMap: {
      key: property.title.slice(0, 20) + `..`,
      location: {
        lat: property.description.location.location.coordinates[1],
        lng: property.description.location.location.coordinates[0]
      }
    }
  }));

  return (
    <div
      className={`w-full h-fit rounded-2xl flex items-center justify-center bp-896:justify-normal bp-896:items-start`}>
      <GoogleMap locations={locations} />
    </div>
  );
}