import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';

const Map = () => {
  const selectedRoute = useSelector((state) => state.selectedRoute);

  return (
    <MapContainer
      center={
        selectedRoute?.points.length > 0 ? selectedRoute.points[selectedRoute.points.length - 1] : [0, 0]
      }
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedRoute?.points.map((point, index) => (
        <Marker position={point} key={index}>
          <Popup>{`Point ${index + 1}`}</Popup>
        </Marker>
      ))}
      {selectedRoute?.points.length > 1 && <Polyline positions={selectedRoute.points} />}
    </MapContainer>
  );
};

export default Map;
