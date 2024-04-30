import { useEffect, useState } from 'react';
import { fetchCryptoCurrency } from '../api/fetchCryptoCurrency';
import { CryptoData, CryptoValue } from '../types/types';

export const useFetchCryptoData = (cryptoValue: CryptoValue) => {
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCryptoCurrency(cryptoValue);
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [cryptoValue]);

  return cryptoData;
};