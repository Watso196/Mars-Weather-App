import React, { useEffect, useState } from "react";
import "../scss/style.scss";

import Header from "./Header";
import WeatherData from "./WeatherData";
import Footer from "./Footer";

function App() {
  const [marsWeather, setMarsWeather] = useState([]);
  const [marsIsLoaded, setMarsIsLoaded] = useState(false);
  const [marsError, setMarsError] = useState(null);
  const [earthWeather, setEarthWeather] = useState([]);
  const [earthIsLoaded, setEarthIsLoaded] = useState(false);
  const [earthError, setEarthError] = useState(null);

  //useEffect to connect to APIs

  return (
    <div className="container">
      <Header />
      <WeatherData />
      <Footer />
      <p>{marsWeather}</p>
    </div>
  );
}

export default App;
