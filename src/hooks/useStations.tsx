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
            try {
                const data = await fetchNetworkById(id);
                setStation(data);
            } catch (err) {
                throw(err);
            }      
        };
        fetchFilterNetworkById();      
    }, [id]);

    return{
        data: {station},
    }
}