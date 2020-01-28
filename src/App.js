import React, { useState, useEffect, useLayoutEffect } from 'react';
import Markers from "./components/Markers"
import TrainStops from "./components/TrainStops";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from './components/SearchBar'
import axios from "axios";
import Map from './components/Map';
const TrainStationsURL = "https://data.cityofnewyork.us/resource/kk4q-3rt2.json"

function App() {

    const [stations, setStations] = useState(null)
    const [selectStation, setSelectStation] = useState(null)



    const getTrainStations = async () => {
        try {
            let response = await axios.get(TrainStationsURL);
            setStations(response.data);
            console.log(response.data)
        } catch (err) {
            console.log(`Error Occurred: ${err}`);
            console.log(err.response)
        }
    };
    useEffect(() => {getTrainStations()},[])

    function handleClick(e) {
        e.preventDefault();
        console.log('hello from handleclick');
    }

    function handleChange(e) {
        e.preventDefault();
        console.log('hello from handlechange');
    }

    return (
        <div className="App"
        // style={{
        //     height: '800px',
        //     width: '400px'
        // }}
        >
        {
            (stations ? (
                stations.map(station => {
                    console.log(station.name)
                    console.log(station.coordinates)
                    // console.log(stations.path.to.longitude)
            })
                ) : (null))
        }
            <Header />
            <SearchBar handleChange={handleChange} handleClick={handleClick} />
            <Map stations={stations} />
            {/* <Markers selectStation={selectStation} setSelectStation={setSelectStation} /> */}
            <TrainStops setStations={setStations} />
            <Footer />
        </div>
    );
}


export default App;