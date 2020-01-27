import React from 'react';
// import SkyLine from './Pics/new-york-manhattan-panoramic-view-gaidars-chris-sudmalis.jpg'

function Header() {
    return (
        <div
            style={{
            textAlign: 'center',
            height: '40px',
            fontSize: '10px',
                // backgroundImage: "<img style={{width: \'50px\', height: \'50px\'}} src={SkyLine}/>"
            // margin: '0'
        }}
            className="Header">
            <h1>TRAIN-TRACKER</h1>

        </div>
    );
}

export default Header;