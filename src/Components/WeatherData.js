import React from "react";

import MarsWeatherItem from "./MarsWeatherItem";
import EarthWeatherItem from "./EarthWeatherItem";
import WeatherGraph from "./WeatherGraph";

const WeatherData = () => {
  return (
    <main>
      <h2>elysium planitia, Mars</h2>
      <div className="section">
        <div className="row">
          <MarsWeatherItem />
          <MarsWeatherItem />
          <MarsWeatherItem />
          <MarsWeatherItem />
        </div>
      </div>
      <h2>city, country, Earth</h2>
      <div className="section">
        <div className="row">
          <EarthWeatherItem />
          <EarthWeatherItem />
          <EarthWeatherItem />
          <EarthWeatherItem />
        </div>
      </div>
      <WeatherGraph />
    </main>
  );
};

export default WeatherData;
