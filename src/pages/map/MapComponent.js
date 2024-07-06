import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { getDistance } from 'geolib';
import './map.css'

// Import custom icon (if needed)
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Link, useLocation, useParams } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lat = parseFloat(searchParams.get('lat'));
    const lng = parseFloat(searchParams.get('lng'));
    // const [currentPosition, setCurrentPosition] = useState(null);
    const { id } = useParams();
    console.log("🚀 ~ file: MapComponent.js:27 ~ MapComponent ~ id:", id)

    
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(position => {
    //         const { latitude, longitude } = position.coords;
    //         setCurrentPosition({ lat: latitude, lng: longitude });
    //     });
    // }, []);

    // if (!currentPosition) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <Link to={`/shop/${id}`} className='navigate-shop-link'>
                Back to Shop Details
            </Link>
            <MapContainer center={[lat, lng] || [51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* <Marker position={currentPosition} icon={L.icon({ iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', iconSize: [32, 32] })}>
                    <Popup>Your location</Popup>
                </Marker> */}

                <Marker position={[lat, lng]} icon={L.icon({ iconUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png', iconSize: [32, 32] })}>
                    <Popup>Shop location</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
