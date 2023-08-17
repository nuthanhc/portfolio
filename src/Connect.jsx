
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';

function Connect(){
    return(
        <div className='connect'>
            <h3 className='main-title'>Connect</h3>
            <p className='detail'>"Ready to embark on a life-changing collaboration? Let’s embark on this creative adventure together and make digital magic!"</p>
            <div className='text-center'><h5><i class="bi bi-envelope-fill"></i> nuthanhc07@gmail.com</h5>
            <h5><i class="bi bi-telephone-fill"></i> 8971066071</h5></div>
            <div className='d-flex justify-content-center social-icons'>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-whatsapp"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-github"></i>
            </div>
        </div>
    );
}

export default Connect;