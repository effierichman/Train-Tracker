import React, {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'

const Map = (props) => {
    // const {stations } = props
     console.log(props.stations && props.stations)
    const [viewport, setViewport] = useState({
        latitude: 40.800581558114956,
        longitude: -73.95806670661364,
        zoom: 10,
        width: '70vw',
        height: '80vh'
    })


    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle='mapbox://styles/effierichman/ck5sdo6y72gew1imq1egz2lus'
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
            </ReactMapGL>
        </div >
    );
}

export default Map