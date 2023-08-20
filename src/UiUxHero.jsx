import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
import heroimage from './images/uiuxhero.png';


function UiUxHero(){
    return(
        <div className='uiux-hero' style={{ backgroundImage: `url(${heroimage})` }}>
            <h1 className='text-white'>UI / UX Gallery</h1>
        </div>
    );
}

export default UiUxHero;