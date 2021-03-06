import React from 'react'
import { NavLink } from 'react-router-dom'
// import Station from './../images/station.jpeg'

function TrainStops(props) {
    const { selectStation } = props
    //  console.log(selectStation && selectStation)
    const arr = selectStation.line
    const splitArr = arr.split('-')
    console.log(splitArr)

    return (
        <div
            style={{
                // border: '3px solid black'
                width: '30vw',
                padding: '5px',
                // background: `url(${Station}) center center no-repeat`,
                backgroundSize: '70vh 30vw'
                // backgroundSize: 'cover'
            }}>
            <ul style={{ listStyle: 'none' }}>
                <li>Station Name: {selectStation && selectStation.name}</li>
                <li>Lines at this Station: {selectStation && splitArr.map(lineName => {
                    return <span><NavLink to={`/line_info/${lineName}`} >{lineName}</NavLink>&nbsp;</span>
                })}
                </li>
                5px<li>Important Notes: {selectStation && selectStation.notes}</li>

            </ul>
        </div>
    )


}
export default TrainStops;


