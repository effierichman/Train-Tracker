import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
// import skatePic from './7-boy-skateboarding-cartoon-clipart.jpg'
// import TrainStops from "./components/TrainStops";


function MapData() {
    const [viewport, setViewport] = useState({
        latitude: 40.800581558114956,
        longitude: -73.95806670661364,
        zoom: 10,
        width: '50vw',
        height: '80vh'
    })
    const [selectStation, setSelectStation] = useState(null)
    const mark = [45.38332, -75.337298];

    return (
        <div     >
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle='mapbox://styles/effierichman/ck5sdo6y72gew1imq1egz2lus'
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
                <Marker key='1' latitude={mark[0]} longitude={mark[1]} >
                    <button onClick={e => {
                        e.preventDefault()
                        setSelectStation(1)
                    }}>
                        {/*<img style={{width: '50px', height: '50px'}} src={skatePic}/>*/}
                    </button>
                </Marker>
                {selectStation ? (
                    <Popup
                        latitude={mark[0]}
                        longitude={mark[1]}
                        onClose={() => setSelectStation(null)}
                    >
                        <p>This is my popup</p>
                    </Popup>
                ) : null}
            </ReactMapGL>

        </div>
    );
}

export default MapData;