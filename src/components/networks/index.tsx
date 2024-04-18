import React, { useState } from "react";
import {useStation} from '../../hooks/useStations';
import { Network } from "../../types";
import '../styles.css';

interface LayersProps{
    network: Network;
    numberOfNetworksPerCountry: number;
}

export const Networks =({network, numberOfNetworksPerCountry}:LayersProps)=>{
    const {
        data: {station},
    } = useStation(network.id);

    const [info, setInfo] = useState<React.ReactNode>(
        <div>
            <p className="li-layer"><strong>Number of Networks ({network.location.country}): </strong>{numberOfNetworksPerCountry}</p>
        </div>
    );

    const [activeLayer, setActiveLayer] = useState('L1');

    const handleClick = (item: string) => {
        if (item === 'L1') {
            setActiveLayer(item);
            setInfo(
                <div>
                    <p className="item"><strong>Number of Networks ({network.location?.country}): </strong>{numberOfNetworksPerCountry}</p>
                </div>
            );            
        } else if (item === 'L2') {
            setActiveLayer(item);
            setInfo(
                <div>
                    {<p className="item"><strong>Number of Stations (network): </strong>{station?.length}</p> }
                    
                </div>
            );
        } else if (item === 'L3') {
            setActiveLayer(item);
            setInfo(
                <div>
                    <p className="item"><strong>Country: </strong>{network.location?.country}</p>
                    <p className="item"><strong>City: </strong>{network.location.city}</p>
                    <p className="item"><strong>Company: </strong></p>
                    <p className="item">
                        {network.company.map((company:any, index:number) => (
                            <li key={index}>{company}</li>
                        ))}
                    </p>                                     
                </div>
            );
        }
      };
    return(
        <div>
            <h3>Network: {network.name}</h3>
            <nav className="nav-layer">
                <ul className="ul-layer">
                    <li className={`li-layer ${activeLayer === 'L1' ? 'active' : ''}`} onClick={() => handleClick('L1')}>L1</li>
                    <li className={`li-layer ${activeLayer === 'L2' ? 'active' : ''}`} onClick={() => handleClick('L2')}>L2</li>
                    <li className={`li-layer ${activeLayer === 'L3' ? 'active' : ''}`} onClick={() => handleClick('L3')}>L3</li>
                </ul>
            </nav>
            <div>
                {info && <div>{info}</div>}
            </div>
    </div>
    );
}
