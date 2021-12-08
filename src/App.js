import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tiraspol" />

        <footer>
          This project was coded by Beatriz Matafora{" "}
          <a
            href="https://github.com/servivo/second-trial"
            target="_blank"
            title="Follow me on GitHub 😊"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

