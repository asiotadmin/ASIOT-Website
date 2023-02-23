import React from 'react'
import "../Javascript.jsx";
import ASIOT_Logo2 from "../assets/ASIOT_Logo.webp"
const Navbar = () => {
    return (
        <>
             <div id="header">
              
  <div className="logo">
  <a href="/" className="logo">
            <img src={ASIOT_Logo2} alt="Logo" className='asiot-logo'/>
          </a>
  </div>  
  <nav>
    {/* <form  className="search" action="search.php"> 
      <input name="q" placeholder="Search..." type="search"/>
    </form> */}
    <ul>
      <li>
        <a className="first_home" href="/">Home</a>
      </li>
               
                    <li className="dropdown dropdown-toggle-btn">
                        <a href="/" data-toggle="dropdown">Solutions<b className="caret"></b></a>
                        <ul className="dropdown-menu multi-level dropdown-right-btn">
                            <li><a href="/ErpNext">Frappe</a></li>  
                            <li><a href="/">DevOps</a></li>                                                       
                            <li className="dropdown-submenu">
                                <a href="/" data-toggle="dropdown">Mobile App</a>
                                <ul className="dropdown-menu">
                                <li><a href="/ErpNext">ERPNext</a></li>
            <li><a href="/ErpNextHealthcare">ERPNext Healthcare</a></li>
            <li><a href="/">ERPNext LMS</a></li>
            <li><a href="/">ERPNext Manufacturing</a></li>
            <li><a href="/">ERPNext Retail</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>                    
           
           


      <li  className="dropdown dropdown-toggle-btn">
        <a href="/">Services</a>
          <ul>
            <li><a href="/">ASIOT Service1</a></li>
            <li><a href="/">ASIOT Service2</a></li>
            <li><a href="/">ASIOT Service3</a></li>
            <li><a href="/">ASIOT Service4</a></li>
            <li><a href="/">ASIOT Service5</a></li>
          </ul>        
      </li>
      <li>
        <a href="/">About Us</a>
      </li>
      <li>
        <a href="/">Career </a>
      </li>

      

    </ul>

    <div className="navbar-nav navbar-nav2">
               
                
               <span className="nav-item nav-signup">
                                       <a className="nav-link btn-gradient modal-toggle modal-toggle1" href="/Contact">Contact Us
                                           <span className="button"> &nbsp; </span></a>
                                   </span>
                               </div>
    
  </nav>
</div>

        </>
    );
};
 
export default Navbar;