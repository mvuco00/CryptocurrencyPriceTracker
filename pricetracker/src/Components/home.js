import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
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
  return (
    <div className="home">
      <div className="search">
        <form>
          <input type="text" placeholder="Enter currency" />
        </form>
      </div>
      <div className="data">
        {data.map((el) => (
          <div key={el.id}>{el.name} </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
