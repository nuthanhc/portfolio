import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';

function Internship(){
    return(
        <div className='internship'>
            <h3 className='main-title'>Internship Chronicles</h3>
            <div className='web'>
                <h3 className='title text-center'>Web Technology</h3>
                <p className='detail'>"I refined my Web Development skills during a transformative 6-month internship at IRP Innovative Solutions. Immersed in real-world projects, I garnered invaluable experience and actively contributed to impactful solutions. This paid opportunity further amplified my expertise, enabling me to elevate my Web Development skills while delivering meaningful contributions to real-world projects."</p>
                <div className="internship-card" onClick=''>
                    <div className="card-content">
                        <div className="card-details">
                            <div className='content-text'>
                                <h6 className="text-title">Certificate</h6>
                                
                            </div>
                        </div>
                        <div className="card-arrow">
                            <i class="bi bi-patch-check"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Internship;