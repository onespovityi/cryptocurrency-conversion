export const convertCrypto = (amount: number, fromCryptoPrice: number, toCryptoPrice: number) => {
  if (amount === 0) {
    return 0;
  }
  return (amount * fromCryptoPrice) / toCryptoPrice;
};