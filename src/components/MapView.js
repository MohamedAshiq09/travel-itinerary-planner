import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = ({ destinations }) => {
    const defaultPosition = [51.505, -0.09]; // Default to London

    return (
        <div className="map-container">
            <MapContainer center={defaultPosition} zoom={2} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {destinations.map((dest, index) => (
                    <Marker key={index} position={[defaultPosition[0] + index * 5, defaultPosition[1] + index * 5]}>
                        <Popup>{dest.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapView;
