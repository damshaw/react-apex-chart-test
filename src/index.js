import React from "react";
import ReactDOM from "react-dom";

import MyApexChart from "./MyApexChart";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>This is a new chart</h1>
      <MyApexChart />
      <h2>Text below bar chart</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
