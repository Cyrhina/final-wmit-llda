import "leaflet/dist/leaflet.css";
import { GeoJSON, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { getLagunaLakeBoundary } from "./functions-partials";

const MapBoundaryList = ({
  classN = "h-[500px] w-full rounded-xl shadow",
  item,
}) => {
  return (
    <>
      <MapContainer center={[14.25, 121.25]} zoom={9} className={` ${classN} `}>
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={getLagunaLakeBoundary(item)}
          style={{
            color: "#2563eb",
            weight: 2,
            fillOpacity: 0.2,
          }}
          onEachFeature={(feature, layer) => {
            layer.bindTooltip(item?.name, { sticky: true });
          }}
        />

        {/* Monitoring Stations */}
        <Marker position={[item.lat, item.lng]}>
          <Popup>
            <h2 className="font-bold">{item.name}</h2>
            <p>DO: {item.do} mg/L</p>
            <p>pH: {item.ph}</p>
            <p>BOD: {item.bod} mg/L</p>
            <p>COD: {item.cod} mg/L</p>
            <p>Turbidity: {item.turbidity} NTU</p>
            <p>Temp: {item.temperature} °C</p>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapBoundaryList;
