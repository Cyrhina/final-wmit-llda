import "leaflet/dist/leaflet.css";
import { GeoJSON, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

import React from "react";
import StationList from "../partials/json-files/StationList.json";
import StationBoundaries from "./json-files/StationBoundaries.json";

const MapAllBoundaryList = () => {
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: icon2x,
    iconUrl: markerIcon,
    shadowUrl: shadow,
  });
  return (
    <>
      <MapContainer
        center={[14.25, 121.25]}
        zoom={10}
        className={`md:h-[500px] h-[300px] w-full shadow"`}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {StationBoundaries.map((coordinates, key) => (
          <React.Fragment key={key}>
            <GeoJSON
              data={coordinates}
              style={{
                color: "#2563eb",
                weight: 2,
                fillOpacity: 0.2,
              }}
              onEachFeature={(feature, layer) => {
                layer.bindTooltip(coordinates?.properties?.name, {
                  sticky: true,
                });
              }}
            />
          </React.Fragment>
        ))}

        {/* Monitoring Stations */}
        {StationList.map((station) => (
          <Marker key={station.id} position={[station.lat, station.lng]}>
            <Popup>
              <h2 className="font-bold">{station.name}</h2>
              <p>DO: {station.do} mg/L</p>
              <p>pH: {station.ph}</p>
              <p>BOD: {station.bod} mg/L</p>
              <p>COD: {station.cod} mg/L</p>
              <p>Turbidity: {station.turbidity} NTU</p>
              <p>Temp: {station.temperature} °C</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default MapAllBoundaryList;
