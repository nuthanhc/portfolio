import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
import heroimage from './images/uiuxhero.png';


function UiUxHero(){
    return(
        <div className='uiux-hero' style={{ backgroundImage: `url(${heroimage})` }}>
            <h1 className='profile_bio text-white'>UI / UX Design's Gallery</h1>
        </div>
    );
}

export default UiUxHero;