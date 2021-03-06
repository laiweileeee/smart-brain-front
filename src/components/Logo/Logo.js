import React from 'react';
import Tilt from 'react-tilt';
import faceid from './faceid.png';
import './Logo.css';

// no state => pure function
const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 75 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '5px'}}src={faceid} alt="logo"/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;