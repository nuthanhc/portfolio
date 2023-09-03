import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Main.css';


function UiUxHero(){
    return(
        <div className='uiux-hero' style={{ backgroundImage: `url("/images/uiuxhero.png")` }}>
            <h1 className='profile_bio text-white'>UI / UX Design's Gallery</h1>
        </div>
    );
}

export default UiUxHero;