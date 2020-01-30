import React from 'react'
import Map from "./Map";
import { NavLink, useParams } from 'react-router-dom'
import { findByLabelText } from '@testing-library/react';


function TrainLines(props) {
    console.log(props)
    const { stations } = props
    let lineToFind = useParams().line_slug.split(' ')[0]

    // let lineToFind = match.match.params.line_slug.split(' ')[0]
    if (stations) {


        let foundStations = stations.filter(element => {
            let lineArr = element.line.split('-')
            return lineArr.includes(lineToFind)
        });
        // let sortedStations = foundStations.name.sort()
        let sortedStations = foundStations.sort(function (a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        console.log(sortedStations)



        return (
            <div style={{ display: 'flex' }}>
                <Map stations={foundStations} filterd={true} />
                <div style={{ display: 'flex', flexDirection: 'column', overflow: 'scroll', height: '70vh', padding: '10px', border: '5px solid brown' }}>
                    {sortedStations.map((element) => (
                        <ul style={{listStyle: 'none'}}>
                            <li >Station Name: {element.name}</li>
                            <li>Lines at this Station: {element.line}</li>
                            <li>Important Notes: {element.notes}</li>
                        </ul>
                    ))}
                </div>
            </div>
        )
    }
    return <div></div>
}
export default TrainLines;