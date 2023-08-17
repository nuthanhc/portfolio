import 'bootstrap/dist/css/bootstrap.css';
import p1 from './images/profile1.jpg'
import p2 from './images/profile2.jpg'
import p3 from './images/profile3.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Main.css';

function SkillSet(){
    return(
        <div className='skill_set'>
            <h3 className='main-title'>Mastering the Skillset</h3>
            <div className='web'>
                <h3 className='title text-center'>Web Technology</h3>
                <p className='detail'>"Embarking on web development since college, I've crafted interactive solutions that blend form and function. Each project is an innovative journey, turning pixels into immersive user experiences. Join me in exploring limitless horizons, creating captivating digital landscapes."</p>
                <div className="project-card" onClick=''>
                    <div className="card-content">
                        <div className="card-details">
                            <div className="card-image">
                                <img src={p3} alt="Project" />
                            </div>
                            <div className='content-text'><h3 className="text-title">E-Commerces Website</h3>
                            <p>alhs fsdhfl lsd lsdldfh flsd  sdlhgvl</p></div>
                        </div>
                        <div className="card-arrow">
                            <i class="bi bi-caret-right-fill"></i>
                        </div>
                    </div>
                </div>

                <div className="project-card" onClick=''>
                    <div className="card-content">
                        <div className="card-details">
                            <div className="card-image">
                                <img src={p1} alt="Project" />
                            </div>
                            <div className='content-text'><h3 className="text-title">E-Commerces Website</h3>
                            <p>alhs fsdhfl lsd lsdldfh flsd  sdlhgvl</p></div>
                        </div>
                        <div className="card-arrow">
                            <i class="bi bi-caret-right-fill"></i>
                        </div>
                    </div>
                </div>

            </div>
            <div className='web pt-5'>
                <h3 className='title text-center'>UI / UX Design</h3>
                <p className='detail'>"I design UI/UX experiences that harmonize aesthetics and functionality, crafting intuitive interfaces for immersive digital journeys. Let's reshape the digital realm with captivating designs that redefine user interactions."</p>
                <div className="project-card" onClick=''>
                    <div className="card-content">
                        <div className="card-details">
                            <div className="card-image">
                                <img src={p2} alt="Project" />
                            </div>
                            <div className='content-text'><h3 className="text-title">E-Commerces Website</h3>
                            <p>alhs fsdhfl lsd lsdldfh flsd  sdlhgvl</p></div>
                        </div>
                        <div className="card-arrow">
                            <i class="bi bi-caret-right-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='web pt-5'>
                <h3 className='title text-center'>Graphic Design</h3>
                <p className='detail'>"I merge creativity with design principles to craft impactful graphics. From concept to creation, I transform ideas into visuals, adding aesthetic brilliance. Let's bring your visions to life through captivating graphic designs."</p>
                <div className="project-card" onClick=''>
                    <div className="card-content">
                        <div className="card-details">
                            <div className="card-image">
                                <img src={p3} alt="Project" />
                            </div>
                            <div className='content-text'><h3 className="text-title">E-Commerces Website</h3>
                            <p>alhs fsdhfl lsd lsdldfh flsd  sdlhgvl</p></div>
                        </div>
                        <div className="card-arrow">
                            <i class="bi bi-caret-right-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillSet;