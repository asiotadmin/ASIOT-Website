import React from 'react'
import "../Javascript.jsx";
import ASIOT_Logo2 from "../assets/ASIOT_Logo2.png"
const Navbar = () => {
  const handleClick = event => {
    // 👇️ refers to the div element
    // console.log(event.currentTarget);

    // console.log('div clicked');
  };
    return (
        <>
            <header id="topHeader">
          
          <nav>
          <a href="/" className="logo">
            <img src={ASIOT_Logo2} alt="Logo" />
          </a>
            {/* <span className="logo">ASIOT Technologies</span> */}
            <div className="menu-btn-3" onClick={handleClick}>
              <span />
            </div>
            <div className="mainMenu">
              <a href><span>Technology</span></a>
              <a href><span>Service</span></a>
              <a href><span>About Us</span></a>
              <a href>Work With Us</a>
            </div>
          </nav>
        </header>
        </>
    );
};
export default Navbar;