import React from 'react';
import SkyLine from './../images/skyline.jpg'

function Header() {
    return (
        <div
            style={{
                textAlign: 'center',
                height: '40px',
                fontSize: '10px',
                background: `url(${SkyLine}) center center no-repeat`,
                backgroundSize: 'cover'

                // margin: '0'
            }}
            className="Header">
            <h1
            >TRAIN-TRACKER</h1>
            {/* <img style={{width: '50px', height: '50px'}} src={SkyLine}/> */}

        </div>
    );
}

export default Header;