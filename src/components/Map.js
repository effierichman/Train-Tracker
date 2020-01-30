import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import rail from '../images/rail.svg'
import TrainStops from './TrainStops'
import { findByLabelText } from '@testing-library/react';
import TrainLines from '../components/TrainLines'
import { Route } from 'react-router-dom'



const Map = (props) => {
    const { stations, userLoc } = props
    console.log(userLoc.coords.latitude)
    // const { markers } = props
    // console.log(stations)
    const [viewport, setViewport] = useState({
        latitude: userLoc.coords.latitude,
        longitude: userLoc.coords.longitude,
        zoom: 13,
        width: '70vw',
        height: '70vh'
    })

    const [selectStation, setSelectStation] = useState({
        name: 'example',
        line: 'example',
        notes: 'example'
    })
    return (
        <div
            style={{
                display: 'flex',
                border: '3px solid black'
            }}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle='mapbox://styles/effierichman/ck5zz3msm0aq51ipg2i2f6l0w'
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}  >
                {stations && stations.map(station => {
                    //Method to set stateful station to current station object
                    const set = () => {
                        setSelectStation(station)
                        console.log('Setting Current Station')
                    }
                    return (
                        <Marker
                            key={station.objectid}
                            latitude={station.the_geom.coordinates[1]}
                            longitude={station.the_geom.coordinates[0]}
                        >
                            <div
                                onClick={(e) => {
                                    e.preventDefault()
                                    set()
                                }
                                }
                            >

                                <img style={{ width: '10px', height: '10px', color: 'yellow' }} src={rail} alt='pin' />
                            </div>

                        </Marker>

                    )
                })
                
                
                
                }
                { <Marker
                  key={userLoc}
                  latitude={userLoc.coords.latitude}
                  longitude={userLoc.coords.longitude}
                   >
                      <div
                                onClick={(e) => {
                                    e.preventDefault()
                                }
                                }
                            >
                                <h1>YOU ARE HERE</h1>
                    {/* <img style={{ width: '20px', height: '20px', color: 'yellow' }} src={rail} alt='pin' /> */}
                    </div>
                    </Marker>}
                
            </ReactMapGL>
            {
                (props.filterd) ?
                    //   <TrainLines match={props.match} stations={props.stations} selectStation={selectStation}/> 
                    <div></div> :

                    <TrainStops selectStation={selectStation} />

            }

            {/* if props filter is true redener one comp or render the other */}
            {/* <SOMEComponent foundStations={foundStations} */}
            {/* <TrainLines selectStation={selectStation}/> */}
        </div >
    )
}

export default Map