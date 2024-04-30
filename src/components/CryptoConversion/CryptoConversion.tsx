import { ChangeEvent, useState } from 'react';
import cls from './CryptoConversion.module.css';
import { CryptoValue } from '../../types/types';
import { useFetchCryptoData } from '../../hooks/useFetchCryptoData';
import { convertCrypto } from '../../utils/convertCrypto';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

export const CryptoConversion = () => {
  const [fromSelectedCrypto, setFromSelectedCrypto] = useState<CryptoValue>('ethereum');
  const [toSelectedCrypto, setToSelectedCrypto] = useState<CryptoValue>('bitcoin');
  const [cryptoConvertValue, setCryptoConvertValue] = useState<number>(0);
  const fromCryptoData = useFetchCryptoData(fromSelectedCrypto);
  const toCryptoData = useFetchCryptoData(toSelectedCrypto);

  const handleFromCryptoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFromSelectedCrypto(e.target.value as CryptoValue);
  };

  const handleToCryptoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setToSelectedCrypto(e.target.value as CryptoValue);
  };

  const convertedAmount = convertCrypto(cryptoConvertValue,
    Number(fromCryptoData?.data?.priceUsd), Number(toCryptoData?.data?.priceUsd)).toFixed(6);

  const swapCryptoValues = () => {
    setFromSelectedCrypto(toSelectedCrypto);
    setToSelectedCrypto(fromSelectedCrypto);
  };

  return (
    <div className={cls.wrap}>
      <h1 className={cls.title}>Виджет для конвертации криптовалют</h1>
      <div className={cls.convertInputs}>
        <input className={cls.input} min="1" type='number' value={cryptoConvertValue}
          onChange={(e) => setCryptoConvertValue(parseFloat(e.target.value))}
        />
        <select className={cls.select} id="crypto-select" value={fromSelectedCrypto} onChange={handleFromCryptoChange}>
          <option value="tether">USDT</option>
          <option value="bitcoin">BTC</option>
          <option value="ethereum">ETH</option>
        </select>
        <span className={cls.reverseConversion} onClick={swapCryptoValues}> &#8644; </span>
        <input className={cls.input} type='number'
          value={convertedAmount}
          readOnly
        />
        <select className={cls.select} id="crypto-select" value={toSelectedCrypto} onChange={handleToCryptoChange}>
          <option value="tether">USDT</option>
          <option value="bitcoin">BTC</option>
          <option value="ethereum">ETH</option>
        </select>
      </div>
      <span className={cls.cryptoConvertEnd}>
        {cryptoConvertValue} {capitalizeFirstLetter(fromSelectedCrypto)}
        = {convertedAmount} {capitalizeFirstLetter(toSelectedCrypto)}
      </span>
    </div>
  );
};