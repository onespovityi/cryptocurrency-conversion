import axios from "axios";
import { CryptoData } from "../types/types";

export const fetchCryptoCurrency = async (crypto: 'tether' | 'bitcoin' | 'ethereum'): Promise<CryptoData> => {
  const baseURL = 'https://api.coincap.io';
  const response = await axios.get<CryptoData>(`${baseURL}/v2/assets/${crypto}`);
  return response.data;
};