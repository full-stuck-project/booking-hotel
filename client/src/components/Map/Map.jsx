// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// });

// const Map = (location) => {
//   const pinPosition = [40.7644598, -73.9744941];

//   return (
//     <div className="flex justify-center items-center">
//       <MapContainer
//         center={pinPosition} // Center the map on this location
//         zoom={13}
//         style={{ height: "400px", width: "20%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {/* Add a marker at the specified pin position */}
//         <Marker position={pinPosition}>
//           <Popup>Plaza Hotel</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default Map;

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const locations = [
  { id: 1, name: "Miami Hotel", position: [25.7617, -80.1918] },
  { id: 2, name: "NYC Hotel", position: [40.7128, -74.006] },
  { id: 3, name: "California Hotel", position: [36.7783, -119.4179] },
  { id: 4, name: "Texas Hotel", position: [31.9686, -99.9018] },
];

const Map = () => {
  const defaultCenter = [39.8283, -98.5795]; // Center the map on the USA

  return (
    <MapContainer
      center={defaultCenter}
      zoom={4}
      className="h-[800px] w-[95%]" // Adjust height as needed
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker key={location.id} position={location.position}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;

/* 

cordinates of hotel 
cordinates of country 
name of hotel 
id of hotel 
*/
