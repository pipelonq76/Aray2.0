import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


// Importar iconos personalizados si es necesario
import 'leaflet/dist/leaflet.css';
import './mapaUsuario.css';

import L from "leaflet";
import IconoMapaFoto from "../../../../public/imgs/iconoMap3.png";

const iconoMapaAray = new L.Icon({
 iconUrl: IconoMapaFoto,
 iconSize: [38, 45],
 iconAnchor: [22,45],
 popupAnchor: [-3,-76],
});

const MapaUsuario = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <div className="map-container">
      {position ? (
        <MapContainer className='w-[60%] h-[600px] map-container' center={position} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={iconoMapaAray}>
            <Popup>
              Estás aquí.
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Cargando tu ubicación...</p>
      )}
    </div>
  );
};

export default MapaUsuario;