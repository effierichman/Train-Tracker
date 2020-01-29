import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Marker } from 'react-map-gl'
import TrainStops from "./components/TrainStops";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from './components/SearchBar'
import axios from "axios";
import Map from './components/Map';


function App() {

    const [stations, setStations] = useState(null)
    const [selectStation, setSelectStation] = useState(null)

    const [TrainStationsURL, setTrainStationURL] = useState("https://data.cityofnewyork.us/resource/kk4q-3rt2.json")


    const getTrainStations = async () => {
        try {
            const response = await axios.get(TrainStationsURL);
            setStations(response.data);
            console.log(response.data)
            // setMarkers(response.data)
        } catch (err) {
            console.log(`Error Occurred: ${err}`);
            console.log(err.response)
        }
    };
    useEffect(() => { getTrainStations() }, [])

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

            <Header />
            <SearchBar handleChange={handleChange} handleClick={handleClick} />
            {
                (
                    stations ?
                        (
                            <Map stations={stations}  />
                        )
                        :
                        (
                            null
                        )
                )
            }
            {/* <TrainStops/> */}
            <Footer />
        </div>
    );
}


export default App;