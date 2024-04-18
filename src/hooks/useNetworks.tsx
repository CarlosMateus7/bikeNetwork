import {useEffect, useState} from 'react';
import { fetchNetworks } from '../api';
import { Network, NetworkError } from '../types';

interface useNetworkProps {
    data: {networks: Network[] | []}
    handlers: {numberOfNetworksPerCountry:(country: string) => number },
    error: {error: NetworkError | null}
}

export const useNetworks = (): useNetworkProps =>{
    const [networks, setNetworks] = useState<Network[] | []>([]);
    const [error, setError] = useState<NetworkError | null>(null);

    useEffect(()=>{
        const fetchDNetworks = async () =>{
            try{
                const data = await fetchNetworks();
                setNetworks(data);
            }catch (err){
                const errorMessage = err instanceof Error ? err.message : String(err);
                setError({ error: errorMessage });
            }
        }
        fetchDNetworks()
    },[])

    const numberOfNetworksPerCountry = (country:string)=>{
        const filterCountry = networks.filter((network=>network?.location?.country === country));
        return filterCountry.length;
    }
 
    return{
        data: {networks},
        handlers: {numberOfNetworksPerCountry},
        error: {error}
    }
}