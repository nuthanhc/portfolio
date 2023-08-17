import profile from './images/profile_img.png'
import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter as Link } from 'react-router-dom';
import './Main.css';

function AboutMe(){
    return(
        <div className='about_me'>
            <div className='profile_bio'>
                <h1 data-animation="fadeInUp" data-delay=".6s"  >I'm Developer Nuthan H C</h1>
                <p>Get ready for a journey into the world of an aspiring UI/UX and web development prodigy!</p>
                <div className='d-flex'>
                    <p>AboutMe</p>
                </div> 
            </div>
            <div className='profile_img'><img src={profile} alt="" /></div>
        </div>
    );
}

export default AboutMe;