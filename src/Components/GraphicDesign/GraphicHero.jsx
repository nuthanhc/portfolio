import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../Main.css';


function GraphicHero(){
    return(
        <div className='graphic-hero' style={{ backgroundImage: `url("/images/graphichero.png")` }}>
            <h1 className='profile_bio'>Graphic Design Gallery</h1>
        </div>
    );
}

export default GraphicHero;