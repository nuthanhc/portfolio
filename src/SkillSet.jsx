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
                <h3 className='title'>Web Technology</h3>
                <p className='detail'>"Embarking on a journey of web development since my college days, I've harnessed the power of code to breathe life into captivating digital experiences. With a fervent passion for crafting interactive web solutions, I've woven intricate lines of code into meaningful projects that blend form and function. Each project I've undertaken is a testament to my commitment to innovation, where pixels transform into immersive user journeys. Join me as I continue to explore the limitless horizons of web development, creating digital landscapes that captivate and inspire."</p>
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
                <h3 className='title'>UI | UX Design</h3>
                <p className='detail'>"Embarking on a journey of web development since my college days, I've harnessed the power of code to breathe life into captivating digital experiences. With a fervent passion for crafting interactive web solutions, I've woven intricate lines of code into meaningful projects that blend form and function. Each project I've undertaken is a testament to my commitment to innovation, where pixels transform into immersive user journeys. Join me as I continue to explore the limitless horizons of web development, creating digital landscapes that captivate and inspire."</p>
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
                <h3 className='title'>Graphic Design</h3>
                <p className='detail'>"Embarking on a journey of web development since my college days, I've harnessed the power of code to breathe life into captivating digital experiences. With a fervent passion for crafting interactive web solutions, I've woven intricate lines of code into meaningful projects that blend form and function. Each project I've undertaken is a testament to my commitment to innovation, where pixels transform into immersive user journeys. Join me as I continue to explore the limitless horizons of web development, creating digital landscapes that captivate and inspire."</p>
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