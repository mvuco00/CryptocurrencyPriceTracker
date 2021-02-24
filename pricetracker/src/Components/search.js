import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ setSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter crypto currency"
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon style={{ color: "green" }} />
    </div>
  );
};

export default Search;
