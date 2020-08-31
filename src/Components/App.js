import React, { useEffect, useState } from "react";
import "../scss/style.scss";

import Header from "./Header";
import WeatherData from "./WeatherData";
import Footer from "./Footer";
import MarsWeatherItem from "./MarsWeatherItem";

function App() {
  const [marsWeather, setMarsWeather] = useState({});
  const [marsIsLoaded, setMarsIsLoaded] = useState(false);
  const [marsError, setMarsError] = useState(null);
  const [earthWeather, setEarthWeather] = useState({});
  const [earthIsLoaded, setEarthIsLoaded] = useState(false);
  const [earthError, setEarthError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const marsItems = [];

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/insight_weather/?api_key=umlXhHmI1qYQ3zzZ8i5QmQ3Yl6OmuREhUD0Blgt7&feedtype=json&ver=1.0"
    )
      .then((res) => res.json())
      .then(
        (response) => {
          setMarsWeather(response);
          setMarsIsLoaded(true);
        },
        (error) => {
          setMarsIsLoaded(true);
          setMarsError(error);
        }
      );
  });

  const handleWeatherSearch = (e) => {
    e.preventDefault();
    fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?aggregateHours=24&combinationMethod=aggregate&startDateTime=2020-08-22T00%3A00%3A00&endDateTime=2020-08-29T00%3A00%3A00&collectStationContributions=false&maxStations=-1&maxDistance=-1&includeNormals=false&contentType=json&unitGroup=us&locationMode=array&key=5EAXENX9JT6W5SUE7KYGJYWUD&locations=" +
        searchTerm
    )
      .then((res) => res.json())
      .then(
        (response) => {
          setEarthWeather(response);
          setEarthIsLoaded(true);
        },
        (error) => {
          setEarthIsLoaded(true);
          setEarthError(error);
        }
      );
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  //Come back to finding the right date range and using Date objects properly
  const findDateRange = () => {
    let mostRecentDate = 0;
    let leastRecentDate = 0;
    marsWeather["sol_keys"].forEach((sol) => {
      const date = marsWeather[sol]["First_UTC"];
      if (Date.UTC(date) > mostRecentDate) {
        mostRecentDate = date;
      } else if (Date.UTC(date) < leastRecentDate) {
        leastRecentDate = date;
      }
      console.log("Date: " + date);
      console.log("From " + mostRecentDate + " to " + leastRecentDate);
    });
    if (leastRecentDate == 0) {
      leastRecentDate = new Date(Date.UTC(mostRecentDate) - 432000000);
      leastRecentDate = leastRecentDate.toISOString();
      console.log(leastRecentDate);
    }
  };

  return (
    <div className="container">
      <Header
        weatherSearch={handleWeatherSearch}
        searchTerm={searchTerm}
        searchTermChange={handleSearchTermChange}
      />
      <WeatherData marsWeather={marsWeather} />
      <Footer />
      <button onClick={findDateRange}>Click Me!</button>
    </div>
  );
}

export default App;
