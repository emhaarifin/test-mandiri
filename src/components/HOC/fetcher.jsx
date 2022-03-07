import React, { useState, useRef, useEffect } from 'react';

const fetcher = (Component) => {
  return (props) => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCoins = useRef(() => {});

    getCoins.current = () => {
      fetch('https://api.coinpaprika.com/v1/coins/')
        .then((response) => response.json())
        .then((data) => {
          setCoins(data);
          setLoading(false);
        });
    };

    useEffect(() => {
      if (coins.length === 0) {
        getCoins.current();
      }
    }, [coins.length]);

    return <Component {...props} coins={coins} loading={loading} setCoins={setCoins} />;
  };
};

export default fetcher;
