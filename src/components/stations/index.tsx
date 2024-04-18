import React from 'react';
import { useStation } from '../../hooks/useStations';
import {
  Marker,
  Popup,
} from "react-leaflet";

import L from 'leaflet';
import { Network } from '../../types';
import '../styles.css';

interface StationspProps{
    network: Network;
}

const Stations = ({ network }: StationspProps) => {

  const {
    data: {station},
} = useStation(network.id);

const iconUrl = "../../images/bike.png"
const locationiIcon = L.icon({
  iconUrl: iconUrl,iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  popupAnchor: [0, -41]
})
 

  return (
    <>
      {station?.map((s) => (
        <Marker key={s.id} position={[s.latitude, s.longitude]} icon={locationiIcon}>
          <Popup>
            <div>
              <h3>Station: {network.id}</h3>
                <ul className="ul-station">
                  <li className={`li-station`}><strong>Address: </strong>{s.name}</li>
                  <li className={`li-station`}><strong>Free bikes: </strong>{s.free_bikes}</li>
                  <li className={`li-station`}><strong>Empty slots: </strong>{s.empty_slots}</li>
                </ul>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default Stations;