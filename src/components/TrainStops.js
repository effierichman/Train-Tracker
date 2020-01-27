import React, {useEffect, useState} from 'react';
import axios from 'axios'


function TrainStops() {
    const url = 'https://data.cityofnewyork.us/api/views/kk4q-3rt2/rows.json?accessType=DOWNLOAD';
    const [data, setData] = useState([])


    const getTrainLines = async () => {
        try {
            let response = await axios.get(url);
            setData(response.data);
            console.log(response.data)

        } catch (err) {
            console.log(`Error Occurred: ${err}`);
            console.log(err.response)
        }
    };


    useEffect(() => {
        getTrainLines();
    }, []);

    return (
        <div>
            {setData}
        </div>
    );
}

export default TrainStops;