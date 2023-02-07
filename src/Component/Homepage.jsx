import React from 'react'
import mobileDevlopment from "../assets/mobileDevlopment.png"
import delivery_experience from "../assets/delivery_experience.png"
import Visa from "../assets/Visa.png"
import Suzuki_logo from "../assets/Suzuki_logo.png"
import Logo_NIKE from "../assets/Logo_NIKE.png"
import LG from "../assets/LG.png"
import ESPN from "../assets/ESPN.png"
import BMW from "../assets/BMW.png"
import audi from "../assets/audi.jpg"
import Allianz from "../assets/Allianz.png"
import analyzing from "../assets/analyzing.jpg"
import aws from "../assets/aws.png"
import Dell from "../assets/Dell.png"
import Intel from "../assets/Intel.png"
import ibm from "../assets/ibm.png"
import Microsoft from "../assets/Microsoft.png"
import Nasscom from "../assets/Nasscom.png"
import Samsung from "../assets/Samsung.png"
import Nvidia from "../assets/Nvidia.png"
import tm from "../assets/tm.png"
import tata from "../assets/tata.png"
import Infosys_logo from "../assets/Infosys_logo.png"
import Wipro_Logo from "../assets/Wipro_Logo.png"
import Amazon_logo from "../assets/Amazon_logo.png"


const Homepage = () => {
  return (
    <>
      <div>

        <link href="https://fonts.googleapis.com/css?family=Lato|Nanum+Gothic:700|Raleway&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css" rel="stylesheet" />
        <title>ASIOT Technologies</title>
        <section id="intro" className=''>
          <div id="intro-info">
            <div>
              <h1>Full Service Web Development Company</h1>
              <div id="intro-tag-btn">
                <span>Over 100M app downloads across 1500+ projects.</span>
                <a href className="brand-btn">Let's Talk</a>
              </div>
            </div>
          </div>
          <div id="development-img">
            <img src={mobileDevlopment} alt="Mobile App Development" title="Mobile App Development" />

          </div>
        </section>
        <section id="delivery" className='reveal'>
          <h1 className="sec-heading">Delivering Experience Since 2018</h1>
          <div className="col-5 delivery-img">
            <img src={delivery_experience} alt="Productivity Delivering Experience" title="Delivering Experience Since 2009" />
          </div>
          <div className="col-7">
            <h2>Accelerating your business growth with Digital Experiences</h2>
            <p>
              Organizations Accelerating Their Digital Workplace Achieve Improvements4© 2021 TechTarget, Inc. All Rights Reserved.Respondents report that the number of remote
              users in their environments has nearly tripled over
              the last 12 months (an increase of 2.8x, from 20%
              of users on average to 56%) and for many this shift
              may represent a new normal unlikely to change
              in the near term. For organizations with sub-par
              device technology and without the right tools to
              support, secure, and manage remote users, this
              shift could be disastrous. 
              <br /><br /> 
              Organizations, from
              commercial businesses to educational institutions,
              need to keep users online and productive and
              need to meet their expectations for what a modern
              digital experience should be.
            </p>
            <div className="btn-footer">
              <a href className="brand-btn">Contact Us</a>
            </div>
          </div>
        </section>
        <section id="services" className='reveal'>
          <h1 className="sec-heading">Our Services</h1>
          <ul>
            <li>
              <div>
                <a href>
                  <i className="fas fa-laptop" /><span>Stratagy and Consultant</span>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href>
                  <i className="fas fa-users" /><span>User Experience Design</span>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href>
                  <i className="fas fa-mobile-alt" /><span>Mobile App Development</span>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href>
                  <i className="fab fa-chrome" /><span>Web App Development Services</span>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href>
                  <i className="fas fa-ribbon" /><span>Quality Analysis and Testing</span>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href>
                  <i className="fas fa-ticket-alt" /><span>Application Management &amp; Support</span>
                </a>
              </div>
            </li>
          </ul>
          <div id="service-footer">
            <a href className="brand-btn">View All Service</a>
          </div>
        </section>
        <section id="success-story" className='reveal'>
          <h1 className="sec-heading">Our Success Stories</h1>
          <div className="slider">
            <div className="col-6 slide-text">
              <div>
                <h2>World Travel Protection</h2>
                <p>
                We provide corporate, education and leisure travellers with peace of mind whenever – and wherever – they travel.
                </p>
                <a href className="brand-btn">Contact Us</a>
              </div>
            </div>
            <div className="col-6 slide-img">
              <img src={delivery_experience} alt="Productivity Delivering Experience" title="Delivering Experience Since 2009" />
            </div>
          </div>
        </section>
        <section id="revenue" className="brand-logos reveal">
          <h1 className="sec-heading">We Drive Growth &amp; Revenue for the Best Companies</h1>
          <div>
            <a><img src={Allianz} alt="Allianz" title="Work with Allianz" /></a>
            <a><img src={audi} alt="Audi" title="Work with Audi" /></a>
            <a><img src={BMW} alt="BMW" title="Work with BMW" /></a>
            <a><img src={ESPN} alt="ESPN" title="Work with ESPN" /></a>
            <a><img src={LG} alt="LG" title="Work with LG" /></a>
            <a><img src={Logo_NIKE} alt="Nike" title="Work with Nike" /></a>
            <a><img src={Suzuki_logo} alt="Suzuki" title="Work with Suzuki" /></a>
            <a><img src={Visa} alt="Visa" title="Work with Visa" /></a>
          </div>
        </section>
        <section id="highlights" className='reveal'>
          <h1 className="sec-heading">Company Highlights</h1>
          <div className="slider">
            <div className="col-6 slide-text">
              <div>
                <h2>Team ASIOT Technologies at IBM, Americas 2019, Los Angeles</h2>
                <p>
                Our curiosity runs deep. That's why we let you explore new paths at your own speed — making sure you're constantly learning. Discover the possibilities.
                </p>
                <a href className="brand-btn">See More</a>
              </div>
            </div>
            <div className="col-6 slide-img">
              <img src={analyzing} alt="Team Work in Los Angeles" title="Company Team Work" />
            </div>
          </div>
        </section>
        <section id="partners" className="brand-logos reveal">
          <h1 className="sec-heading">Our Partners</h1>
          <div>
            <a><img src={aws} alt="Work with AWS" title="Our Work" /></a>
            <a><img src={Dell} alt="Dell" title="Work with Dell" /></a>
            <a><img src={Intel} alt="intel" title="Work with intell" /></a>
            <a><img src={ibm} alt="IBM" title="Work with IBM" /></a>
            <a><img src={Microsoft} alt="Microsoft" title="Work with Microsoft" /></a>
            <a><img src={Nasscom} alt="Nasscom" title="Work with Nasscom" /></a>
            <a><img src={Samsung} alt="Samsung" title="Work with Samsung" /></a>
            <a><img src={Nvidia} alt="Nvidia" title="Work with Nvidia" /></a>          </div>
        </section>
        <section id="topList" className="brand-logos reveal">
          <h1 className="sec-heading">Recognition as Top Mobile Development Company</h1>
          <div>
            <a>
              <img src={tm} alt="Top 10 MobleApp Development Companies" title="Top 10 MobleApp Development Companies" />
              <span>Recognised Among Top 10 MobleApp Development Companies</span>
            </a>
            <a>
              <img src={tata} alt="Top 10 MobleApp Development Companies" title="Top 10 MobleApp Development Companies" />
              <span>Recognised Among Top 10 MobleApp Development Companies</span>
            </a>
            <a>
              <img src={Infosys_logo} alt="Top 10 MobleApp Development Companies" title="Top 10 MobleApp Development Companies" />
              <span>Recognised Among Top 10 MobleApp Development Companies</span>
            </a>
            <a>
              <img src={Wipro_Logo} alt="Top 10 MobleApp Development Companies" title="Top 10 MobleApp Development Companies" />
              <span>Recognised Among Top 10 MobleApp Development Companies</span>
            </a>
            <a>
              <img src={Amazon_logo} alt="Top 10 MobleApp Development Companies" title="Top 10 MobleApp Development Companies" />
              <span>Recognised Among Top 10 MobleApp Development Companies</span>
            </a>
          </div>
        </section>

      </div>
    </>
  );
};
export default Homepage;