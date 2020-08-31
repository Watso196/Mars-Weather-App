import React from "react";

const SearchForm = (props) => {
  return (
    <form onSubmit={props.weatherSearch}>
      <label htmlFor="search">Enter Your Location</label>
      <input
        id="search"
        type="text"
        placeholder="Your city..."
        onChange={props.searchTermChange}
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default SearchForm;
