import React from "react";

const SearchForm = () => {
  return (
    <form>
      <label htmlFor="search">Enter Your Location</label>
      <input id="search" type="text" placeholder="Your location..." />
      <button type="submit">Go</button>
    </form>
  );
};

export default SearchForm;
