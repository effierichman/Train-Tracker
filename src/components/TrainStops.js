import React from 'react'


function TrainStops(props) {
    const { selectStation } = props
//  console.log(selectStation && selectStation)

    return (
        <div 
        style={{
            // border: '3px solid black'
        }}>
            <ul>
                <li>Station Name: {selectStation && selectStation.name}</li>
                <li>Lines at this Station: {selectStation && selectStation.line}</li>
                <li>Important Notes: {selectStation && selectStation.notes}</li>
           
            </ul>
        </div>
        )


}
export default TrainStops;