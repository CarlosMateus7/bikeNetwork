import { Network, Station } from "../types";

export const fetchNetworks= async (): Promise<Network[] | []> =>{
    try {
        const response = await fetch(
            "http://api.citybik.es/v2/networks"
        );
        const data = await response.json();
        return data.networks;
    } catch (error) {
        console.error("Error fetching network:", error);
        throw error;
    }
};

export const fetchNetworkById = async (networkId: string): Promise<Station[]> => {
    try {
        const response = await fetch(
            `http://api.citybik.es/v2/networks/${networkId}?fields=stations`
        );
        const data = await response.json();
        return data.network.stations;
    } catch (error) {
        console.error("Error fetching network by Id:", error);
        throw error;
    }
};