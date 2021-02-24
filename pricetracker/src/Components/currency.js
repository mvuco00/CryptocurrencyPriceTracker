import React from "react";

const Currency = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="imgsymb">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="symbol">{symbol}</p>
        </div>
        <div className="data2">
          <p className="price">${price}</p>
          <p className="volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="percent green">{priceChange.toFixed(2)}%</p>
          )}
          {marketcap !== null && (
            <p className="marketcap">${marketcap.toLocaleString()}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Currency;
