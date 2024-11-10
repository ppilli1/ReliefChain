"use client"
import React, { useEffect, useState, useRef } from 'react';
import { 
  GoogleMap, 
  Marker, 
  Circle, 
  InfoWindow, 
  useJsApiLoader
} from '@react-google-maps/api';

const GOOGLE_MAPS_APIKEY = 'AIzaSyA54PEehGtt2Jzjd8sQ07SWBF3Gf1PFKrw';

const mapContainerStyle = {
  height: '100%',
  width: '100%'
};

const floridaCenter = {
  lat: 27.9944,
  lng: -81.7603, 
};

const circleOptions = {
  strokeColor: 'red',
  strokeOpacity: 1,
  strokeWeight: 1,
  fillColor: 'red',
  fillOpacity: 0.3,
};

const mapOptions = {
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: true,
  fullscreenControl: true
};

const libraries = ['places'];

const MapComponent = () => {
  const [pins, setPins] = useState([]);
  const [selectedPin, setSelectedPin] = useState(null);
  const [circleSize, setCircleSize] = useState(200000);
  const growing = useRef(false);
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_APIKEY,
    libraries
  });
 
  useEffect(() => {
    const animateCircle = () => {
      setCircleSize(prevSize => {
        if (prevSize >= 200000) growing.current = false;
        if (prevSize <= 100000) growing.current = true;
        return growing.current ? prevSize + 2000 : prevSize - 2000;
      });
      requestAnimationFrame(animateCircle);
    };

    const animation = requestAnimationFrame(animateCircle);
    return () => cancelAnimationFrame(animation);
  }, []);

  useEffect(() => {
    const getPins = () => {
      const insidePins = [
        {
            id: 'pin1',
            name: 'John Doe',
            coordinate: { latitude: 28.5383, longitude: -81.3792 },
            damageToHouse: 5000,
            numPeopleInFamily: 4,
            damageToCars: 2000,
            injuries: 'None'
          },
          {
            id: 'pin2',
            name: 'Jane Smith',
            coordinate: { latitude: 27.9944, longitude: -81.7603 },
            damageToHouse: 12000,
            numPeopleInFamily: 6,
            damageToCars: 4000,
            injuries: 'Minor'
          },
          {
            id: 'pin3',
            name: 'Michael Johnson',
            coordinate: { latitude: 28.0394, longitude: -81.9498 },
            damageToHouse: 8500,
            numPeopleInFamily: 3,
            damageToCars: 3000,
            injuries: 'Severe'
          },
      ];

      const outsidePins = [
        {
            id: 'pin4',
            name: 'David Clark',
            coordinate: { latitude: 31.4626, longitude: -83.5085 },
            damageToHouse: 4000,
            numPeopleInFamily: 3,
            damageToCars: 1500,
            injuries: 'None'
          },
      ];

      const allPins = [...insidePins, ...outsidePins];
      setPins(allPins);
    };

    getPins();
  }, []);

  const handleMarkerClick = (pin) => {
    setSelectedPin(pin);
  };

  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      {/* <button
        style={{
          position: 'absolute',
          top: '11.5px',
          right: '60px',
          zIndex: 1,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'cyan',
          border: '2px solid black',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
         
        }}
      /> */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={floridaCenter}
        zoom={6}
        onLoad={handleMapLoad}
        options={mapOptions}
      >
        {pins.map((pin) => (
          <Marker
            key={pin.id}
            position={{
              lat: pin.coordinate.latitude,
              lng: pin.coordinate.longitude
            }}
            onClick={() => handleMarkerClick(pin)}
          />
        ))}

        {selectedPin && (
          <InfoWindow
            position={{
              lat: selectedPin.coordinate.latitude,
              lng: selectedPin.coordinate.longitude
            }}
            onCloseClick={() => setSelectedPin(null)}
          >
            <div style={{
              backgroundColor: '#fff',
              border: '2px solid black',
              borderRadius: '15px',
              padding: '8px',
              fontSize: '13px',
              color: 'black',
              margin: '-10px -5px',
              maxWidth: '150px'
            }}>
              <h3 style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 4px 0' }}>{selectedPin.name}</h3>
              <p style={{ margin: '3px 0' }}>House Damage: ${selectedPin.damageToHouse.toLocaleString()}</p>
              <p style={{ margin: '3px 0' }}>Car Damage: ${selectedPin.damageToCars.toLocaleString()}</p>
              <p style={{ margin: '3px 0' }}>Family Members: {selectedPin.numPeopleInFamily}</p>
              <p style={{ margin: '3px 0' }}>Injuries: {selectedPin.injuries}</p>
            </div>
          </InfoWindow>
        )}

        <Circle
          center={floridaCenter}
          radius={circleSize}
          options={circleOptions}
        />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;