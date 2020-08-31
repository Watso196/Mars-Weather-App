import React, { useEffect } from "react";

import MarsWeatherItem from "./MarsWeatherItem";
import EarthWeatherItem from "./EarthWeatherItem";
import WeatherGraph from "./WeatherGraph";

const WeatherData = (props) => {
  function DisplayMarsData(props) {
    if (typeof props.marsWeather !== "undefined") {
      if (typeof props.marsWeather["sol_keys"] !== "undefined") {
        props.marsWeather["sol_keys"].forEach((sol) => {
          return (
            <MarsWeatherItem
              key={sol}
              name={sol}
              temp={props.marsWeather[sol]["AT"]["av"]}
              wind={props.marsWeather[sol]["HWS"]["av"]}
              press={props.marsWeather[sol]["PRE"]["av"]}
            />
          );
        });
      } else {
        return <p>Sorry, no Mars weather data is available right now.</p>;
      }
    }
    return <p>Loading Mars Weather data...</p>;
  }

  return (
    <main>
      <h2>elysium planitia, Mars</h2>
      <div className="section">
        <div className="row">
          <DisplayMarsData marsWeather={props.marsWeather} />
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
