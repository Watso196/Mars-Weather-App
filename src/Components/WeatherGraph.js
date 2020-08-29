import React from "react";

const WeatherGraph = () => {
  return (
    <div className="section">
      <div className="row">
        <button>Temp</button>
        <button>Wind</button>
        <button>Pressure</button>
        <div id="graph"></div>
      </div>
    </div>
  );
};

export default WeatherGraph;
