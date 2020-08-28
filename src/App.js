import React from "react";
import "./scss/style.scss";

function App() {
  return (
    <div className="container">
      <header className="section">
        <h1>Martian Weather Comparison</h1>
        <div className="section">
          <form className="col s6 offset-s3">
            <label htmlFor="search">Enter Your Location</label>
            <input id="search" type="text" placeholder="Your location..." />
            <button type="submit" className="btn">
              Go
            </button>
          </form>
        </div>
      </header>
      <main>
        <h2>Mars</h2>
        <div className="section">
          <div className="row">
            <article className="">
              <h3>Sol 611</h3>
              <p className="flow-text card-title">50&deg; F</p>
              <p>Wind Speed: 5 mph </p>
              <p>Pressure: 756</p>
            </article>
            <article className="">
              <h3>Sol 611</h3>
              <p className="flow-text card-title">50&deg; F</p>
              <p>Wind Speed: 5 mph </p>
              <p>Pressure: 756</p>
            </article>
            <article className="">
              <h3>Sol 611</h3>
              <p className="flow-text card-title">50&deg; F</p>
              <p>Wind Speed: 5 mph </p>
              <p>Pressure: 756</p>
            </article>
            <article className="">
              <h3>Sol 611</h3>
              <p className="flow-text card-title">50&deg; F</p>
              <p>Wind Speed: 5 mph </p>
              <p>Pressure: 756</p>
            </article>
          </div>
        </div>
        <h2>Earth</h2>
        <div className="section">
          <div className="row">
            <article className="">
              <h3>August 26</h3>
              <p className="flow-text card-title">50&deg; F</p>
              <p>Wind Speed: 5 mph </p>
              <p>Pressure: 756</p>
            </article>
            <article className="">
              <h3>August 26</h3>
              <p className="flow-text card-title">50&deg; F</p>
              <p>Wind Speed: 5 mph </p>
              <p>Pressure: 756</p>
            </article>
            <article className="">
              <h3>August 26</h3>
              <p className="flow-text card-title">50&deg; F</p>
              <p>Wind Speed: 5 mph </p>
              <p>Pressure: 756</p>
            </article>
            <article className="">
              <h3>August 26</h3>
              <p className="flow-text card-title">50&deg; F</p>
              <p>Wind Speed: 5 mph </p>
              <p>Pressure: 756</p>
            </article>
          </div>
        </div>
        <div className="section">
          <div className="row">
            <button>Temp</button>
            <button>Wind</button>
            <button>Pressure</button>
            <div id="graph"></div>
          </div>
        </div>
      </main>
      <footer>
        <div className="section">
          <p>
            &lt;/> with&nbsp;
            <span role="img" aria-label="heart">
              🤍
            </span>
            &nbsp;&nbsp;by Kalib Watson
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
