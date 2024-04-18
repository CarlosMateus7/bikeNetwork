import { Network, Station } from "../types";
import axios, { AxiosResponse } from "axios";

// const app = express();
// const PORT = process.env.PORT || 3000;

export const fetchNetworks= async (): Promise<Network[] | []> =>{
    try {
        const response: AxiosResponse = await axios.get(
            "https://api.citybik.es/v2/networks"
        );
        //const data = await response.json();
        return response.data.networks;
    } catch (error) {
        console.error("Error fetching network:", error);
        throw error;
    }
};

export const fetchNetworkById = async (networkId: string): Promise<Station[]> => {
    try {
        const response: AxiosResponse = await axios.get(
            `https://api.citybik.es/v2/networks/${networkId}?fields=stations`
        );
        // const data = await response.json();
        return response.data.network.stations;
    } catch (error) {
        console.error("Error fetching network by Id:", error);
        throw error;
    }
};