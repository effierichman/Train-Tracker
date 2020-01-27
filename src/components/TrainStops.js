// import React, {useEffect, useState} from 'react';
import axios from 'axios'


function TrainStops() {
    // const url = 'https://data.cityofnewyork.us/api/views/kk4q-3rt2/rows.json?accessType=DOWNLOAD';
    // const url ="https://data.cityofnewyork.us/api/geospatial/3qz8-muuu?method=export&format=GeoJSON"
    // const TrainEnteranceURL ='https://data.ny.gov/resource/i9wp-a4ja.geojson'
    const TrainStationsURL ="https://data.cityofnewyork.us/resource/kk4q-3rt2.json"
    const TrainLineURL ='https://data.cityofnewyork.us/resource/s7zz-qmyz.json'
    // const [data, setData] = useState([])

    const getTrainLines = async () => {
        try {
            let response = await axios.get(TrainStationsURL);
            // setData(response.data);
            return(response.data);
            // console.log(response.data)

        } catch (err) {
            console.log(`Error Occurred: ${err}`);
            console.log(err.response)
        }
    };


    // useEffect(() => {
    //     getTrainLines();
    // }, []);
    //
    // return (
    //     <div>
    //         {setData}
    //     </div>
    // );
}

export default TrainStops;