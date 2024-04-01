import React, { useState, useEffect } from 'react';
import './CryptoPrices.css';

const CryptoPrices = () => {
  const [bitcoinPrices, setBitcoinPrices] = useState(null);
  const currencies = ['USD', 'EUR'];

  useEffect(() => {
    const fetchBitcoinPrices = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        setBitcoinPrices(data.bpi);
      } catch (error) {
        console.error('Error fetching Bitcoin prices:', error);
      }
    };

    fetchBitcoinPrices();
  }, []);

  return (
    <div className="crypto-container">
      {bitcoinPrices && currencies.map(currency => (
          <div key={currency} className="crypto-card">
            <h2>{`Bitcoin Price (${currency})`}</h2>
            <p>{`${currency}: ${bitcoinPrices[currency].rate}`}</p>
          </div>
        ))}
    </div>
  );
};

export default CryptoPrices;
