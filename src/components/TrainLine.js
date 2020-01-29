import React from 'react'
// import { NavLink } from 'react-router-dom'


function TrainLine(props) {
    // const { selectStation } = props
    // const arrLine = selectStation.line
    // const splitArrLine = arrLine.split('-')
    // console.log(selectStation)
    // console.log(splitArrLine)


    return (
        <div
            style={{
                // border: '3px solid black'
                width: '30vw',
                padding: '5px'
            }}>
            <ul>
                <li>Station Name: {selectStation && selectStation.name}</li>
                <li>Lines at this Station: {selectStation && arrLine}
                </li>
                <li>Important Notes: {selectStation && selectStation.notes}</li>

            </ul>
        </div>
    )


}
export default TrainLine;