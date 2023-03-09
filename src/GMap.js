import React, { useEffect, useRef, useState } from 'react';

const GMap = () => {
  const googleMapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMap = initGoogleMap();
    setMap(googleMap);
  }, []);

  useEffect(() => {
    if (!map) return;

    new window.google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map: map
    });
  }, [map])

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  return <div
    ref={googleMapRef}
    style={{ width: 600, height: 500 }}
  />
}

export default GMap;