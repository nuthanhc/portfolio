import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Main.css';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import python from './images/python.png';
import php from './images/php.png';
import mysql from './images/mysql.png';
import git from './images/git.png';
import figma from './images/figma.png';
import xampp from './images/xampp.png';
import codeigniter from './images/codeigniter.png';




function Tools(){
    return(
        <div className='technologies' id='tools-languages'>
            <h3 className='main-title'>Programming Languages, Tools & Frameworks</h3>
            <div className='languages'> 
                <div className='d-flex justify-content-center tech-images'>
                    <img src={html} alt="html" className="tech-icon" loading="lazy"/>
                    <img src={css} alt="css" className="tech-icon" loading="lazy"/>
                    <img src={js} alt="js" className="tech-icon" loading="lazy"/>
                    <img src={react} alt="react" className="tech-icon" loading="lazy"/>
                    <img src={python} alt="python" className="tech-icon" loading="lazy"/>
                    <img src={php} alt="php" className="tech-icon" loading="lazy"/>
                    <img src={mysql} alt="mysql" className="tech-icon" loading="lazy"/>
                </div>

            </div>
            <div className='tools'> 
                <div className='d-flex justify-content-center tech-images'>
                    <img src={git} alt="git" className="tech-icon"loading="lazy"/>
                    <img src={figma} alt="figma" className="tech-icon" loading="lazy"/>
                    <img src={xampp} alt="adobe" className="tech-icon" loading="lazy"/>
                    <img src={codeigniter} alt="codeigniter" className="tech-icon" loading="lazy"/>
                </div>

            </div>
            
        </div>
    );
}

export default Tools;