import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Rosalie Monroy Wolfe and is open-source{" "}
          <a
            href="https://github.com/SkittleFairy/react-weather-project"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
