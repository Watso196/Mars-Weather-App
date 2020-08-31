import React from "react";
import SearchForm from "./SearchForm";

const Header = (props) => {
  const infoToggle = (e) => {
    const info = document.querySelector(".info");
    if (info.classList.contains("visible")) {
      info.classList.add("animate-out");
      e.target.setAttribute("aria-expanded", "false");
    } else {
      info.classList.remove("animate-out");
      e.target.setAttribute("aria-expanded", "true");
    }
    info.classList.toggle("visible");
  };

  return (
    <header className="section">
      <h1>Martian Weather App</h1>
      <button onClick={infoToggle}>Info</button>
      <div className="section">
        <div className="info">
          <p className="paragraph">
            This app allows you to compare the weather in your city to the
            weather on Mars. The app uses the last 4 Sols (Martian days) of data
            received from the Elysium Planitia plain. These Sols may be several
            days in the past from the current Earth date, as data can take days
            to travel all the way to Earth. Each sol will be compared with its
            concurrent Earth day in your given location.
          </p>
          <p>
            Disclaimer: Sometimes less than 4 days of data are available, due to
            inter-planetary data constraints.
          </p>
        </div>
        <SearchForm
          weatherSearch={props.weatherSearch}
          searchTerm={props.SearchTerm}
          searchTermChange={props.searchTermChange}
        />
      </div>
    </header>
  );
};

export default Header;
