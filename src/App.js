import React from 'react';
import MapData from './components/MapData'
import TrainStops from "./components/TrainStops";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from './components/SearchBar'
import axios from "axios";
// const TrainStationsURL ="https://data.cityofnewyork.us/resource/kk4q-3rt2.json"
function App() {


    let data = TrainStops();

  return (
    <div className="App"
    // style={{
    //     height: '800px',
    //     width: '400px'
    // }}
    >
        <Header/>
        <SearchBar/>
       <MapData banna={data} />
       {/*<TrainStops/>*/}
       <Footer />
    </div>
  );
}

export default App;
