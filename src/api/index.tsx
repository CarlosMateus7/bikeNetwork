import { Network, Station } from "../types";
import axios, { AxiosResponse } from "axios";
// import express from 'express';

// const app = express();
// const port = process.env.PORT || 5173;

export const fetchNetworks = async (): Promise<Network[] | []> => {
  try {
      const response: AxiosResponse = await axios.get(
          "https://api.citybik.es/v2/networks"
      );
      return response.data.networks;
  } catch (error) {
      console.error("Error fetching network:", error);
      throw error;
  }
};

export const fetchNetworkById = async (networkId: string): Promise<Station[] | []> => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://api.citybik.es/v2/networks/${networkId}?fields=stations`
    );
    return response.data.network.stations;
  } catch (error) {
    console.error("Error fetching network by Id:", error);
    throw error;
  }
};

// app.get('/networks', fetchNetworks);
// app.get('/networks/networkId', fetchNetworkById);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// export default app;