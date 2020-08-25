import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

import { styles } from './styles';

const libraries = ['places'];

const mapContainerStyle = {
  height: '100%',
  width: '100%',
};

const center = {
  lat: -31.433332,
  lng: 152.899994,
};

const options = {
  styles,
  disableDefaultUI: true,
  zoomControl: true,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  return (
    <div className="relative h-0 aspect-ratio-16/9">
      <div className="absolute inset-0">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={16}
          center={center}
          options={options}
        />
      </div>
    </div>
  );
}

export { Map };
