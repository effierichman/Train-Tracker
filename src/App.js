import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapData from './components/MapData'
import TrainStops from "./components/TrainStops";

function App() {
  return (
    <div className="App">
        <h1>TRAIN-TRACKER</h1>
      <MapData />
      <TrainStops/>
      <h4>footer</h4>
    </div>
  );
}

export default App;
