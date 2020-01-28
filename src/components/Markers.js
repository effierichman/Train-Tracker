import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import pin from '../Pics/pin.png'
// import TrainStops from "./components/TrainStops";


function Markers(props) {
    const { selectStation, setSelectStation } = props
    const mark = [45.38332, -75.337298];

    return (
        <div>
           <ReactMapGL
           
           
           
           >
            <Marker key='1' latitude={mark[0]} longitude={mark[1]} >
                    <button onClick={e => {
                        e.preventDefault()
                        // set(1)
                    }}>
                        <img style={{width: '50px', height: '50px'}} src={pin}/>
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

export default Markers;