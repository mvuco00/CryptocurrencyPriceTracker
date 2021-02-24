import React from "react";

const Currency = ({ el }) => {
  return (
    <div className="block">
      <img src={el.image} alt={el.name} />
      <div className="block-data">
        <div>{el.name}</div>
        <div>{el.symbol}</div>
        <div>${el.current_price}</div>
        <div>${el.market_cap.toLocaleString()}</div>
        {el.price_change_percentage_24h < 0 ? (
          <div className="red">{el.price_change_percentage_24h.toFixed(2)}</div>
        ) : (
          <div className="green">
            {el.price_change_percentage_24h.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Currency;
