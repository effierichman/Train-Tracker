import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import rail from '../pics/rail.svg'


const Map = (props) => {
    const {stations } = props
    // const { markers } = props
    console.log(stations)
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
                }}  >
                {stations && stations.map(station => {
                    return (
                        <Marker
                            key={station.objectid}
                            latitude={station.the_geom.coordinates[1]}
                            longitude={station.the_geom.coordinates[0]}
                        >
                      <div> 

                    <img style={{width: '15px', height: '15px'}} src={rail} alt='pin'/>
                      </div>
        
                            {/* <img src='src/pics/rail.svg'></img> */}
                        </Marker>
                    )
                })}
            </ReactMapGL>
        </div >
    );
}

export default Map