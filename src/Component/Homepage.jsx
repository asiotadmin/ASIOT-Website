import React from 'react'
import ERPNext from "../assets/Erp-Banner.webp"
import MobileApp from "../assets/MobileApp.webp"
import Devops from "../assets/devops.webp"
import Upper_arrow from "../assets/Upper_arrow.webp"
import Client1 from "../assets/Client1.webp"
import blog1 from "../assets/blog1.webp"
import blog2 from "../assets/blog2.webp"
import blog3 from "../assets/blog3.webp"
import blog4 from "../assets/blog4.webp"
import blog5 from "../assets/blog5.webp"
import blog6 from "../assets/blog6.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper';
import Helmet from 'react-helmet';


const Homepage = () => {
  return (
    <>
<<<<<<< HEAD
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
=======
        <Helmet>
        <title>ASIOT - Home</title>
        <meta name="description" content="ASIOT Technologies is the best it solutions company in the world" />
        <meta name="title" content="ASIOT Solutions" />

      </Helmet>
        
        <section id="intro" className='hero'>
          <div className="row">
            <div className="col-md-12">
              <div className='animated_div'>
                <p>For Businesses Aiming to  <br></br><span className="typed-text"></span><span className="cursor blink">&nbsp;</span></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className='main_div'>
                <a href="#" target="_blank"><span>ASIOT</span></a>
              </div>
            </div>
          </div>


        </section>


        <section className="features">
          <div className="container">
            <div className="row content flex-direction-reverse">
              <div className="circle1"></div>
              <div className="col-md-6 features-img reveal">
                <img src={ERPNext} className="Erp_img" alt="ASIOT_ERPNext" />
              </div>
              <div className="col-md-6 features-right">
                <div className="features-info">
                  <h2>Frappe/ERPNext</h2>
                  <p>Open source ERP software to integrate tasks, boosts productivity, &amp; leverages data in real-time.
                    Integrate product
                    planning, development, manufacturing, sales, HR &amp; more.</p>
                  <a href="/erpnext-software" className="Animation-btn" title="Learn More">Know More<span className="button">
                    &nbsp; </span></a>
                </div>
              </div>
            </div>
            <div className="row content ">
              <div className="col-md-6 features-right HubSpot_right">
                <div className="features-info ">
                  <h2>Mobile App</h2>
                  <p>HubSpot is a Growth Platform that helps Businesses streamline their Marketing, Sales, and Service Processes with Software Tools to Attract Visitors, Engage Leads, and Close Customers.</p>
                  <a href="/services-hubspot" className="Animation-btn" title="Learn More">Know More<span className="button">
                    &nbsp; </span></a>
                </div>
              </div>
              <div className="col-md-6 features-img reveal HubSpot_left">
                <img src={MobileApp} className="Erp_img Devops_img" alt="ASIOT_mobileApp" />
              </div>
>>>>>>> efab707261e26336a5a2cc670175908dfd57565b

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
<<<<<<< HEAD
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
=======
            <div className="row content flex-direction-reverse">
              <div className="circle2_2"></div>
              <div className="col-md-6 features-img reveal">
                <img src={Devops} className="Erp_img" alt="ASIOT_Devops" />
              </div>
              <div className="col-md-6 features-right">
                <div className="features-info ">
                  <h2>DevOps</h2>
                  <p>We cover all aspects of the Software Development Life Cycle and Custom Software Application Development right from Building, Deploying, and Testing, to Configuration Management with the latest Software Technologies.</p>
                  <a href="/nestorops" className="Animation-btn " title="Learn More">Know More<span className="button">
                    &nbsp; </span></a>
                </div>
              </div>
            </div>

          </div>
        </section>


        <section className="Our_reach">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>160+</h1>
                <p>Partner with us, and let’s build something great together.</p>
              </div>
            </div>

          </div>
        </section>

        <section className="Our_clients">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Our <span className='Purple_span'>Clients</span></h2>
                <img className='Upper_arrow' src={Upper_arrow} alt="Upper_arrow" />
                <Swiper
                  // install Swiper modules
                
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log('slide change')}
                >
                  <SwiperSlide>
                    <div className='row slider_row'>
                      <div className="col-md-4">
                        <img src={Client1} alt="Client1" className='Client_img' />
                      </div>
                      <div className="col-md-8 Text_para">
                        <p>“After checking all the alternatives, ASIOT Technologies was the
                          only solution to provide so much more than that. On top
                          of that, it was also the only solution that didn’t involve so much pain during integration, so quick and easy,
                          my team loves it.”</p>
                          <h3>James Smith</h3>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide> <div className='row slider_row'>
                      <div className="col-md-4">
                        <img src={Client1} alt="Client1" className='Client_img' />
                      </div>
                      <div className="col-md-8 Text_para">
                        <p>“After checking all the alternatives, ASIOT Technologies was the
                          only solution to provide so much more than that. On top
                          of that, it was also the only solution that didn’t involve so much pain during integration, so quick and easy,
                          my team loves it.”</p>
                          <h3>James Smith</h3>
                      </div>
                    </div></SwiperSlide>
                  <SwiperSlide> <div className='row slider_row'>
                      <div className="col-md-4">
                        <img src={Client1} alt="Client1" className='Client_img' />
                      </div>
                      <div className="col-md-8 Text_para">
                        <p>“After checking all the alternatives, ASIOT Technologies was the
                          only solution to provide so much more than that. On top
                          of that, it was also the only solution that didn’t involve so much pain during integration, so quick and easy,
                          my team loves it.”</p>
                          <h3>James Smith</h3>
                      </div>
                    </div></SwiperSlide>
                  <SwiperSlide> <div className='row slider_row'>
                      <div className="col-md-4">
                        <img src={Client1} alt="Client1" className='Client_img' />
                      </div>
                      <div className="col-md-8 Text_para">
                        <p>“After checking all the alternatives, ASIOT Technologies was the
                          only solution to provide so much more than that. On top
                          of that, it was also the only solution that didn’t involve so much pain during integration, so quick and easy,
                          my team loves it.”</p>
                          <h3>James Smith</h3>
                      </div>
                    </div></SwiperSlide>
                </Swiper>
              </div>
            </div>

          </div>
        </section>

        <section className='Our_blogs'>
          <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>ASIOT Technologies <span className='Purple_span'>Blog's </span></h2>
            </div>
          </div>
        <div className="row">
          <div className="col-md-4 text-dark">
            <img src={blog1} alt="blog1" />
            <div className='Blog_text'><a href="#">Building a LMS App for Educational Sectors Has Become So Much Easier than Before!</a></div>

         
          </div>
          <div className="col-md-4 text-dark">
            <img src={blog2} alt="blog1" />
            <div className='Blog_text'><a href="#">Building a LMS App for Educational Sectors Has Become So Much Easier than Before!</a></div>

         
          </div>
          <div className="col-md-4 text-dark">
            <img src={blog3} alt="blog1" />
            <div className='Blog_text'><a href="#">Building a LMS App for Educational Sectors Has Become So Much Easier than Before!</a></div>

         
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-dark">
            <img src={blog4} alt="blog1" />
            <div className='Blog_text'><a href="#">Building a LMS App for Educational Sectors Has Become So Much Easier than Before!</a></div>

         
          </div>
          <div className="col-md-4 text-dark">
            <img src={blog5} alt="blog1" />
            <div className='Blog_text'><a href="#">Building a LMS App for Educational Sectors Has Become So Much Easier than Before!</a></div>

         
          </div>
          <div className="col-md-4 text-dark">
            <img src={blog6} alt="blog1" />
            <div className='Blog_text'><a href="#">Building a LMS App for Educational Sectors Has Become So Much Easier than Before!</a></div>

         
          </div>
        </div>
        </div>
        </section>
>>>>>>> efab707261e26336a5a2cc670175908dfd57565b
    </>
  );
};
export default Homepage;