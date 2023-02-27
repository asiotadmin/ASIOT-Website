import React from 'react'
import "../Javascript.jsx";
import ASIOT_Logo2 from "../assets/ASIOT_Logo.webp"
const Footer = () => {
  return (
    <>
      <footer>

        <div className="row First_footer_row">

          <div className="col-md-3">
            <div className='footer-logo-div'>
              <a href="/" className="logo">
                <img src={ASIOT_Logo2} alt="Logo" className='asiot-logo' />
              </a>
            </div>
            <div className="social-links social-1">
              <a href="/"><i className="fab fa-facebook-f" /></a>
              <a href="/"><i className="fab fa-twitter" /></a>
              <a href="/"><i className="fab fa-linkedin-in" /></a>
              <a href="/"><i className="fab fa-instagram" /></a>
            </div>

          </div>
          <div className="col-md-3">
            <span className="footer-cat">Services</span>
            <ul className="footer-cat-links">
              <li><a href="/"><span>Frappe</span></a></li>
              <li><a href="/"><span>DevOps</span></a></li>
              <li><a href="/"><span>MobileApp</span></a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <span className="footer-cat">Solutions</span>
            <ul className="footer-cat-links">
              <li><a href="/"><span>ERPNext</span></a></li>
              <li><a href="/"><span>ERPNext Healthcare</span></a></li>
              <li><a href="/"><span>ERPNext LMS</span></a></li>
              <li><a href="/"><span>ERPNext Manufacturing</span></a></li>
              <li><a href="/"><span>ERPNext Retail</span></a></li>

            </ul>
          </div>
          <div className="col-md-3" id="newsletter">

            <div id="address">
              <span className="footer-cat">Office Location</span>
              <ul>
                <li>
                  <i className="far fa-building" />
                  <div>Los Angeles<br />
                    Office 9B, Sky High Tower, New A Ring Road, Los Angeles</div>
                </li>
                <li>
                  <i className="fas fa-gopuram" />
                  <div>Mohali<br />
                    Office 272, Behind krishna Tower, Lakhnaur Pind Road, Mohali</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="copyright">
          © All Rights Reserved 2019-2020
        </div>
        {/* <a href="#intro" id="gotop">Top</a> */}
      </footer>
    </>
  );
};
export default Footer;