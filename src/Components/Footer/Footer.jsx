
import 'bootstrap/dist/css/bootstrap.css';
import '../../Main.css';

function Footer(){
    return(
        <div className='footer' id='footer'>
            <h3 className='main-title'>Contact</h3>
            <p className='detail'>"Ready to ignite a transformative creative journey? Join me in crafting digital wonders that spark innovation and enchantment"</p>
            {/* <p className='detail'>"Ready to embark on a life-changing collaboration? Let’s embark on this creative adventure together and make digital magic!"</p> */}
            <div className='text-center footer-details'><h5><i class="bi bi-envelope-fill"></i> nuthanhc07@gmail.com</h5>
            <h5><i class="bi bi-telephone-fill"></i> +91 8971066071</h5></div>
            <div className='d-flex justify-content-center social-icons'>
                <a href="https://instagram.com/nuthan.hc?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://wa.me/8971066071">
                    <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://www.linkedin.com/in/nuthan-hc/">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/nuthanhc">
                    <i className="bi bi-github"></i>
                </a>
            </div>

        </div>
    );
}

export default Footer;
