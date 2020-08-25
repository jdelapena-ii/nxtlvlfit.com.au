import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from "@react-google-maps/api";

  const libraries = ["places"];

  const mapContainerStyle = {
    height: "70vh",
    width: "84.5vw",
  };

  const center = {
    lat: -31.433332,
    lng: 152.899994,
  };

function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
    
    return (
        <div>
           <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={8}
              center={center}
           >
           </GoogleMap>
        </div>
      )
  }

  export default Map;