import React, { useState, useEffect } from "react";
import axios from "axios";
import Currency from "./currency";
import Search from "./search";

const Home = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState(data);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFiltered(
      data.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, data]);

  const handlePositive = () => {
    setFiltered(data.filter((el) => el.price_change_percentage_24h > 0));
    setOpen(false);
  };
  const handleNegative = () => {
    setFiltered(data.filter((el) => el.price_change_percentage_24h < 0));
    setOpen(false);
  };
  const handleReset = () => {
    setFiltered(data);
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="home">
      <div className="filterandsearch">
        <Search setSearch={setSearch} />

        <div className="dropdown">
          <button onClick={handleOpen} className="dropbtn">
            PRICE CHANGE
          </button>
          {open ? (
            <div id="myDropdown" className="dropdown-content">
              <button onClick={handlePositive}>Positive change</button>
              <button onClick={handleNegative}>Negative change</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="container">
        <div className="row x">
          <div className="imgsymb">
            <p className="title">Crypto Currency</p>
          </div>
          <div className="data2">
            <p className="price">Price</p>
            <p className="volume">24h Volume</p>
            <p className="percent">Price change</p>
            <p className="marketcap">Mkt Cap</p>
          </div>
        </div>
      </div>
      <div className="data">
        {filtered.map((el, index) => (
          <Currency
            key={el.id}
            name={el.name}
            price={el.current_price}
            symbol={el.symbol}
            marketcap={el.total_volume}
            volume={el.market_cap}
            image={el.image}
            priceChange={el.price_change_percentage_24h}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
