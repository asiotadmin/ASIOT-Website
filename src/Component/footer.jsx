import React from 'react'
import "../Javascript.jsx";
import ASIOT_Logo2 from "../assets/ASIOT_Logo2.png"
const Footer = () => {
  const handleClick = event => {
    // // 👇️ refers to the div element
    // console.log(event.currentTarget);

    // console.log('div clicked');
  };
    return (
        <>
              <footer>
            <div>
              <span className="logo">ASIOT Technologies</span>
            </div>
            <div className="row">
              <div className="col-3">
                <span className="footer-cat">Solution</span>
                <ul className="footer-cat-links">
                  <li><a href><span>Interprise App Development</span></a></li>
                  <li><a href><span>Android App Development</span></a></li>
                  <li><a href><span>ios App Development</span></a></li>
                </ul>
              </div>
              <div className="col-3">
                <span className="footer-cat">Industries</span>
                <ul className="footer-cat-links">
                  <li><a href><span>Healthcare</span></a></li>
                  <li><a href><span>Sports</span></a></li>
                  <li><a href><span>ECommerce</span></a></li>
                  <li><a href><span>Construction</span></a></li>
                  <li><a href><span>Club</span></a></li>
                </ul>
              </div>
              <div className="col-3">
                <span className="footer-cat">Quick Links</span>
                <ul className="footer-cat-links">
                  <li><a href><span>Reviews</span></a></li>
                  <li><a href><span>Terms &amp; Condition</span></a></li>
                  <li><a href><span>Disclaimer</span></a></li>
                  <li><a href><span>Site Map</span></a></li>
                </ul>
              </div>
              <div className="col-3" id="newsletter">
                <span className="footer-cat">Stay Connected</span>
                <form id="subscribe">
                  <input type="email" id="subscriber-email" placeholder="Enter Email Address" />
                  <input type="submit" defaultValue="Subscribe" id="btn-scribe" />
                </form>
                <div className="social-links social-2">
                  <a href><i className="fab fa-facebook-f" /></a>
                  <a href><i className="fab fa-twitter" /></a>
                  <a href><i className="fab fa-linkedin-in" /></a>
                  <a href><i className="fab fa-instagram" /></a>
                  <a href><i className="fab fa-tumblr" /></a>
                  <a href><i className="fab fa-reddit-alien" /></a>
                </div>
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
              <div className="social-links social-1 col-6">
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-linkedin-in" /></a>
                <a href><i className="fab fa-instagram" /></a>
                {/* <a href><i className="fab fa-tumblr" /></a> */}
                {/* <a href><i className="fab fa-reddit-alien" /></a> */}
              </div>
            </div>
            <div id="copyright">
              © All Rights Reserved 2019-2020
            </div>
            <a href="#topHeader" id="gotop">Top</a>
          </footer>
        </>
    );
};
export default Footer;