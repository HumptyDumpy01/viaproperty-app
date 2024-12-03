'use client';

import React, { useState } from 'react';
import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from '@vis.gl/react-google-maps';

type MapComponentType = {
  mapId: string;
  apiKey: string;
  locations: { googleMap: { key: string, location: google.maps.LatLngLiteral } }[];
}

type Poi = { key: string, location: google.maps.LatLngLiteral }

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
      location: location.googleMap.location
    };
  });

  return (
    <APIProvider apiKey={apiKey}>
      <section>
        <div id="map" className={`h-screen w-screen bp-896:w-96 rounded-3xl overflow-hidden`}>
          <Map
            defaultZoom={13}
            defaultCenter={propertiesLocations[0].location}
            mapId={mapId}>
            <PoiMarkers pois={propertiesLocations} onHover={setHoveredPoi} />
            {hoveredPoi && (
              <InfoWindow position={hoveredPoi.location}>
                <div>{hoveredPoi.key}</div>
              </InfoWindow>
            )}
          </Map>
        </div>
      </section>
    </APIProvider>
  );
}