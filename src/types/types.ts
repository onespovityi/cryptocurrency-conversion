export type CryptoObject = { tether: number; bitcoin: number; ethereum: number };

export interface CryptoData {
  data: {
    id: CryptoObject;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    explorer: string;
  };
  timestamp: number;
}

export type CryptoValue = 'tether' | 'bitcoin' | 'ethereum';
