'use client';

import React, { useState } from 'react';
import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from '@vis.gl/react-google-maps';
import PointPopup from '@/components/UI/Map/PointPopup';

type MapComponentType = {
  mapId: string;
  apiKey: string;
  locations: {
    googleMap:
      {
        key: string;
        location: google.maps.LatLngLiteral;
        id: string;
        createdAt: string;
        locatedAt: string;
        price: string;
        image: string;
      }
  }[];
}

type Poi = {
  key: string,
  location: google.maps.LatLngLiteral,
  id: string,
  createdAt: string;
  locatedAt: string;
  price: string;
  image: string;
};

const PoiMarkers = (props: { pois: Poi[], onHover: (poi: Poi | null) => void }) => {
  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          onClick={() => props.onHover(poi)}>
          <Pin background={'#ff3226'} glyphColor={'#fff'} borderColor={'#ff3226'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default function MapComponent({ mapId, apiKey, locations }: MapComponentType) {
  const [hoveredPoi, setHoveredPoi] = useState<Poi | null>(null);

  const propertiesLocations: Poi[] = locations.map((location) => {
    return {
      key: location.googleMap.key,
      location: location.googleMap.location,
      id: location.googleMap.id,
      createdAt: location.googleMap.createdAt,
      locatedAt: location.googleMap.locatedAt,
      price: location.googleMap.price,
      image: location.googleMap.image
    };
  });

  return (
    <APIProvider apiKey={apiKey}>
      <section>
        <div id="map" className={`h-screen w-screen bp-896:w-96 bp-896:h-[540px] rounded-3xl overflow-hidden`}>
          <Map
            defaultZoom={13}
            defaultCenter={propertiesLocations[0].location}
            mapId={mapId}>
            <PoiMarkers pois={propertiesLocations} onHover={setHoveredPoi} />
            {hoveredPoi && (
              <InfoWindow position={hoveredPoi.location}>
                <PointPopup
                  href={`/properties/${hoveredPoi.id}`}
                  location={hoveredPoi.locatedAt}
                  createdAt={hoveredPoi.createdAt}
                  title={hoveredPoi.key.slice(0, 45)}
                  price={hoveredPoi.price} imageUrl={hoveredPoi.image} />
              </InfoWindow>
            )}
          </Map>
        </div>
      </section>
    </APIProvider>
  );
}