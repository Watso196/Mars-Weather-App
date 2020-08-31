import React from "react";

const MarsWeatherItem = (props) => {
  return (
    <article>
      <h3>Sol {props.name}</h3>
      <p>{props.temp}&deg; F</p>
      <p>Wind Speed: {props.wind} m/s </p>
      <p>Pressure: {props.press}</p>
    </article>
  );
};

export default MarsWeatherItem;
