import React, { useState, useEffect } from "react";
import axios from "axios";
import Currency from "./currency";

const Home = () => {
  const [data, setData] = useState([]);
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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredData);
  return (
    <div className="home">
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="Enter currency"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="data">
        {filteredData.map((el) => (
          <Currency key={el.id} el={el} />
        ))}
      </div>
    </div>
  );
};

export default Home;
