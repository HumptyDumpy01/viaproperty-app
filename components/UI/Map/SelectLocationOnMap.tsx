import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '299px'
};

type CoordinatesType = {
  lat: number;
  lng: number;
}

/**
 * this particular location points onto the center of the USA
 */
const center = {
  lat: 39.313871,
  lng: -101.451575
};

type GoogleMapProps = {
  onMapClick: (coordinates: { lat: number; lng: number }) => void;
  initialCoordinates?: CoordinatesType | null;
};

const SelectLocationOnMap: React.FC<GoogleMapProps> = ({ onMapClick, initialCoordinates }) => {
  const [coordinates, setCoordinates] = useState<CoordinatesType | null>(initialCoordinates || null);

  useEffect(() => {
    if (initialCoordinates) {
      setCoordinates(() => initialCoordinates);
    }
  }, [initialCoordinates]);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setCoordinates(() => ({
        lat, lng
      }));
      onMapClick({ lat, lng });
    }
  };

  return (
    <LoadScript googleMapsApiKey={String(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY)}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
        onClick={handleMapClick}
      >
        {coordinates && (
          <Marker position={coordinates} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default SelectLocationOnMap;