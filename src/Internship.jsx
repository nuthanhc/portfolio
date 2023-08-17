// import p3 from './images/profile3.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';

function Internship(){
    return(
        <div className='internship'>
            <h3 className='main-title'>Internship Chronicles</h3>
            <div className='web'>
                <h3 className='title'>Web Technology</h3>
                <p className='detail'>"Completed a 6-month training internship at the prestigious Company <b>IRP Innovative Solutions</b>, where I sharpened my <b>Web Development</b> skills on real-world projects."</p>
                <p className='detail'>"Completed a 6-month Paid internship at the prestigious Company <b>IRP Innovative Solutions</b>, where I Worked under Real-time projects"</p>
                <div className="internship-card" onClick=''>
                    <div className="card-content">
                        <div className="card-details">
                            <div className='content-text'>
                                <h6 className="text-title text-center">Certificate</h6>
                            </div>
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

export default Internship;