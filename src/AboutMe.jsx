import profile from './images/profile_img.png'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
import Resume from './Resume';


function AboutMe(){
    return(
        <div className='about_me'>
            <div className='profile_bio'>
                <h1 data-animation="fadeInUp" data-delay=".6s">I'm Nuthan H C : Crafting Digital Dreams with Code!</h1>
                <p>Prepare for an expedition into the realm of an aspiring UI/UX and Web Development enthusiast!</p>
                <div>
                    <Resume/>
                </div> 
            </div>
            <div className='profile_img'><img src={profile} alt="" loading="lazy" /></div>
        </div>
    );
}

export default AboutMe;