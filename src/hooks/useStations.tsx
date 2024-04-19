import {useEffect, useState} from 'react';
import { fetchNetworkById } from '../api';
import { Station } from '../types';

interface useStationProps {
    data: {station: Station[] | [] | undefined}
}

export const useStation = (id:string): useStationProps =>{
    const [station, setStation] = useState<Station[] | []>();
 
    useEffect(() => {
        const fetchFilterNetworkById = async () => {
          const data = await fetchNetworkById(id);
          setStation(data);
        };
        fetchFilterNetworkById();
      }, [id]);

    return{
        data: {station},
    }
}