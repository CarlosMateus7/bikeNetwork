import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngTuple} from 'leaflet';
import { Networks } from "../networks";
import { Network } from "../../types";
import Stations from "../stations";
import MarkerClusterGroup from "react-leaflet-cluster";
import '../styles.css';

interface BikeMapProps{
    networks: Network[];
    numberOfNetworksPerCountry:(country: string) => number;
}

export const BikeMap =({networks, numberOfNetworksPerCountry}:BikeMapProps)=>{

  const iconUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png"
  const locationiIcon = L.icon({
    iconUrl: iconUrl,iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [0, -41]
  })

  const procimoLocalization: LatLngTuple =[38.732857526760974, -9.149675619021329];

  return (
    <MapContainer center={procimoLocalization} zoom={13} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {networks.map((network) => (
          <Marker key={network.id} position={[network.location.latitude, network.location.longitude]} icon={locationiIcon}>
            <Popup>
              <MarkerClusterGroup chunkedLoading>
                <Networks network={network} numberOfNetworksPerCountry={numberOfNetworksPerCountry(network.location.country)} />
              </MarkerClusterGroup>
              <MarkerClusterGroup chunkedLoading>
                <Stations network={network}/>
              </MarkerClusterGroup>
            </Popup>
          </Marker>
      ))}
  </MapContainer>
  );
}