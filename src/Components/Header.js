import React from "react";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="section">
      <h1>Martian Weather App</h1>
      <div className="section">
        <p className="paragraph">
          This app allows you to compare the weather in your city, zip code, or
          region to the weather on Mars. The app uses the last 4 Sols (Martian
          days) of data received from the Elysium Planitia plain. These Sols may
          be several days in the past from the current Earth date, as data can
          take days to travel all the way to Earth, but will be compared with
          the concurrent Earth day in your location.
        </p>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
