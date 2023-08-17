import 'bootstrap/dist/css/bootstrap.css';
import petlogo from './images/petlogo.png'
import servicelogo from './images/servicelogo.jpg'
import uiuxlogo from './images/uiuxlogo.png'
import gdlogo from './images/gdlogo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Main.css';

function SkillSet(){
    return(
        <div className='skill_set' id="skillset">
            <h3 className='main-title'>Mastering the Skillset</h3>
            <div className='web'>
                <h3 className='title text-center'>Web Technology</h3>
                <p className='detail'>"Embarking on web development since college, I've crafted interactive solutions that blend form and function. Each project is an innovative journey, turning pixels into immersive user experiences. Join me in exploring limitless horizons, creating captivating digital landscapes."</p>
                <div className="project-card" onClick=''>
                    <div className="card-content">
                        <div className="card-details">
                            <div className="card-image">
                                <img src={petlogo} alt="Project" />
                            </div>
                            <div className='content-text'><h3 className="text-title">Pet Shop Management</h3>
                            <p className='text-para'>"An online pet-shop meets various pet requirements through e-commerce operations."</p></div>
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
                                <img src={servicelogo} alt="Project" />
                            </div>
                            <div className='content-text'><h3 className="text-title">Home Service Management</h3>
                            <p className='text-para'>"This project simplifies your daily needs by providing a variety of at-home services."</p></div>
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
                                <img src={uiuxlogo} alt="Project" />
                            </div>
                            <div className='content-text'><h3 className="text-title">Design Delights: UI/UX Showcase</h3>
                            <p className='text-para'>"Come Walk Through My Gallery of Design Delights: Explore the World of UI/UX Creations"</p></div>
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
                                <img src={gdlogo} alt="Project" />
                            </div>
                            <div className='content-text'><h3 className="text-title">Pixel Perfection: Visual Art Gallery</h3>
                            <p className='text-para'>"Discover a Mesmerizing Journey through Creative Pixels and Visual Wonders."</p></div>
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