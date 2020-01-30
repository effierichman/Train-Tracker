import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Marker } from 'react-map-gl'
import TrainStops from "./components/TrainStops";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from './components/SearchBar'
import axios from "axios";
import Map from './components/Map';
import TrainLines from './components/TrainLines';
import { Route } from 'react-router-dom'



function App() {
    const [userLoc, setUserLoc] = useState(null)
    const [stations, setStations] = useState(null)
    const [selectStation, setSelectStation] = useState(null)
    const [selectLines, setSelectLines] = useState(null)
    const [trainLineURL, setTrainLinesURL] = useState('https://data.cityofnewyork.us/api/geospatial/3qz8-muuu?method=export&format=GeoJSON')
    const [TrainStationsURL, setTrainStationURL] = useState("https://data.cityofnewyork.us/resource/kk4q-3rt2.json")

    const getTrainLines = async () => {
        try {
            const response = await axios.get(TrainStationsURL);
            setStations(response.data);
            // console.log(response.data.features.properties.name)
        } catch (err) {
            console.log(`Error Occurred: ${err}`);
            console.log(err.response)
        }
    };
    useEffect(() => {
        getTrainLines()
        getTrainStations()
        getLocation()
    }, [])

    function getLocation() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            let crd = pos.coords;

            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);

            compareLocations(pos)
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);

        console.log(setUserLoc)
    }

    let cities = [
        ["city1", 10, 50, "blah"],
        ["city2", 40, 60, "blah"],
        ["city3", 25, 10, "blah"],
        ["city4", 5, 80, "blah"]
    ];

    function compareLocations(pos) {
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(UserLocation);
        //   }
        //   // Default to Washington, DC
        //   else
        //     NearestCity(38.8951, -77.0367);
        // }
        UserLocation(pos)
        setUserLoc(pos)
        console.log(pos)
        // Callback function for asynchronous call to HTML5 geolocation
        function UserLocation(position) {
            NearestCity(position.coords.latitude, position.coords.longitude);
        }


        // Convert Degress to Radians
        function Deg2Rad(deg) {
            return deg * Math.PI / 180;
        }

        function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
            lat1 = Deg2Rad(lat1);
            lat2 = Deg2Rad(lat2);
            lon1 = Deg2Rad(lon1);
            lon2 = Deg2Rad(lon2);
            var R = 6371; // km
            var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
            var y = (lat2 - lat1);
            var d = Math.sqrt(x * x + y * y) * R;
            return d;
        }

        let lat = 20; // user's latitude
        let lon = 40; // user's longitude



        //revamp this so cities become stations

        // let cities = [
        //   ["city1", 10, 50, "blah"],
        //   ["city2", 40, 60, "blah"],
        //   ["city3", 25, 10, "blah"],
        //   ["city4", 5, 80, "blah"]
        // ];

        function NearestCity(latitude, longitude) {
            var minDif = 99999;
            var closest;

            for (let index = 0; index < cities.length; index++) {

                var dif = PythagorasEquirectangular(latitude, longitude, cities[index][1], cities[index][2]);
                if (dif < minDif) {
                    closest = index;
                    minDif = dif;
                }
            }

            // echo the nearest city
            console.log(cities[closest]);
        }
    }

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
    // useEffect(() => { getTrainStations() }, [])

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
                            <Route exact path="/"><Map userLoc={userLoc} stations={stations} /></Route>
                        )
                        :
                        (
                            null
                        )
                )
            }
            {/* <TrainStops/> */}
            {/* <TrainLines selectLines={selectLines} /> */}

            <Route exact path="/line_info/:line_slug" >
                <TrainLines stations={stations} />
                {/* <Map stations={stations} /> */}
            </Route>

            <Footer />
        </div>
    );
}


export default App;