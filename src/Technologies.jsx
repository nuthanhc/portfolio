import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Main.css';
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'
import python from './images/python.png'
import php from './images/php.png'
import mysql from './images/mysql.png'
import figma from './images/figma.png'
import xampp from './images/xampp.png'
import codeigniter from './images/codeigniter.png'



function Technologies(){
    return(
        <div className='technologies'>
            <h3 className='main-title'>Programming Languages, Tools & Frameworks</h3>
            <div className='languages'> 
                <div className='d-flex justify-content-center tech-images'>
                    <img src={html} alt="html" className="tech-icon" />
                    <img src={css} alt="css" className="tech-icon" />
                    <img src={js} alt="js" className="tech-icon" />
                    <img src={react} alt="react" className="tech-icon" />
                    <img src={python} alt="python" className="tech-icon" />
                    <img src={php} alt="php" className="tech-icon" />
                    <img src={mysql} alt="mysql" className="tech-icon" />
                </div>

            </div>
            <div className='tools'> 
                <div className='d-flex justify-content-center tech-images'>
                    <img src={figma} alt="figma" className="tech-icon" />
                    <img src={xampp} alt="adobe" className="tech-icon" />
                    <img src={codeigniter} alt="codeigniter" className="tech-icon" />
                </div>

            </div>
            
        </div>
    );
}

export default Technologies;