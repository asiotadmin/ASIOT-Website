import React from "react";
import ERPNext from "../assets/Erp-Banner.webp";
import MobileApp from "../assets/MobileApp.webp";
import Devops from "../assets/devops.webp";
import Upper_arrow from "../assets/Upper_arrow.webp";
import Client1 from "../assets/Client1.webp";
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.webp";
import blog4 from "../assets/blog4.webp";
import blog5 from "../assets/blog5.webp";
import blog6 from "../assets/blog6.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper";
import Helmet from "react-helmet";
import $ from 'jquery';



const Homepage = () => {
  $(document).ready(function () {

    const typedText = document.querySelector(".typed-text");
    const cursor = document.querySelector(".cursor");

    const textArray = ["Streamline Marketing and Sales Automation Through ERPNext", "Streamline Marketing and Sales Automation Through DevOps", "Streamline Marketing and Sales Automation Through Frappe"];

    let textArrayIndex = 0;
    let charIndex = 0;

    const erase = () => {
      if (charIndex > 0) {
        cursor.classList.remove('blink');
        typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 80);
      } else {
        cursor.classList.add('blink');
        textArrayIndex++;
        if (textArrayIndex > textArray.length - 1) {
          textArrayIndex = 0;
        }
        setTimeout(type, 1000);
      }
    }

    const type = () => {
      if (charIndex <= textArray[textArrayIndex].length - 1) {
        cursor.classList.remove('blink');
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 120);
      } else {
        cursor.classList.add('blink');
        setTimeout(erase, 1000);
      }
    }

    type();

  });
  return (
    <>
      <Helmet>
        <title>ASIOT - Home</title>
        <meta name="description" content="We are a boutique digital solutions and transformation company. Our experts in custom software application development help your business build custom mobile apps to amplify your business. Visit our website to know more about our services."/>
        <meta name="title" content="Custom Software Application Development | Digital Solutions for Business | ASIOT" />
      </Helmet>

      <section id="intro" className="hero">
        <div className="row">
          <div className="col-md-12">
            <div className="animated_div">
              <p>
                For Businesses Aiming to <br></br>
                <span className="typed-text"></span>
                <span className="cursor blink">&nbsp;</span>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="main_div">
              <a href="/" target="_blank">
                <span>ASIOT</span>
              </a>
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
                <p>
                  Open source ERP software to integrate tasks, boosts
                  productivity, &amp; leverages data in real-time. Integrate
                  product planning, development, manufacturing, sales, HR &amp;
                  more.
                </p>
                <a
                  href="/erpnext-software"
                  className="Animation-btn"
                  title="Learn More"
                >
                  Know More<span className="button">&nbsp; </span>
                </a>
              </div>
            </div>
          </div>
          <div className="row content ">
            <div className="col-md-6 features-right HubSpot_right">
              <div className="features-info ">
                <h2>Mobile App</h2>
                <p>
                  HubSpot is a Growth Platform that helps Businesses streamline
                  their Marketing, Sales, and Service Processes with Software
                  Tools to Attract Visitors, Engage Leads, and Close Customers.
                </p>
                <a
                  href="/services-hubspot"
                  className="Animation-btn"
                  title="Learn More"
                >
                  Know More<span className="button">&nbsp; </span>
                </a>
              </div>
            </div>
            <div className="col-md-6 features-img reveal HubSpot_left">
              <img
                src={MobileApp}
                className="Erp_img Devops_img"
                alt="ASIOT_mobileApp"
              />
            </div>
          </div>
          <div className="row content flex-direction-reverse">
            <div className="circle2_2"></div>
            <div className="col-md-6 features-img reveal">
              <img src={Devops} className="Erp_img" alt="ASIOT_Devops" />
            </div>
            <div className="col-md-6 features-right">
              <div className="features-info ">
                <h2>DevOps</h2>
                <p>
                  We cover all aspects of the Software Development Life Cycle
                  and Custom Software Application Development right from
                  Building, Deploying, and Testing, to Configuration Management
                  with the latest Software Technologies.
                </p>
                <a
                  href="/nestorops"
                  className="Animation-btn "
                  title="Learn More"
                >
                  Know More<span className="button">&nbsp; </span>
                </a>
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
              <h2>
                Our <span className="Purple_span">Clients</span>
              </h2>
              <img
                className="Upper_arrow"
                src={Upper_arrow}
                alt="Upper_arrow"
              />
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
                  <div className="row slider_row">
                    <div className="col-md-4">
                      <img src={Client1} alt="Client1" className="Client_img" />
                    </div>
                    <div className="col-md-8 Text_para">
                      <p>
                        “After checking all the alternatives, ASIOT Technologies
                        was the only solution to provide so much more than that.
                        On top of that, it was also the only solution that
                        didn’t involve so much pain during integration, so quick
                        and easy, my team loves it.”
                      </p>
                      <h3>James Smith</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="row slider_row">
                    <div className="col-md-4">
                      <img src={Client1} alt="Client1" className="Client_img" />
                    </div>
                    <div className="col-md-8 Text_para">
                      <p>
                        “After checking all the alternatives, ASIOT Technologies
                        was the only solution to provide so much more than that.
                        On top of that, it was also the only solution that
                        didn’t involve so much pain during integration, so quick
                        and easy, my team loves it.”
                      </p>
                      <h3>James Smith</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="row slider_row">
                    <div className="col-md-4">
                      <img src={Client1} alt="Client1" className="Client_img" />
                    </div>
                    <div className="col-md-8 Text_para">
                      <p>
                        “After checking all the alternatives, ASIOT Technologies
                        was the only solution to provide so much more than that.
                        On top of that, it was also the only solution that
                        didn’t involve so much pain during integration, so quick
                        and easy, my team loves it.”
                      </p>
                      <h3>James Smith</h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="row slider_row">
                    <div className="col-md-4">
                      <img src={Client1} alt="Client1" className="Client_img" />
                    </div>
                    <div className="col-md-8 Text_para">
                      <p>
                        “After checking all the alternatives, ASIOT Technologies
                        was the only solution to provide so much more than that.
                        On top of that, it was also the only solution that
                        didn’t involve so much pain during integration, so quick
                        and easy, my team loves it.”
                      </p>
                      <h3>James Smith</h3>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="Our_blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                ASIOT Technologies <span className="Purple_span">Blog's </span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-dark">
              <img src={blog1} alt="blog1" />
              <div className="Blog_text">
                <a href="/">
                  Building a LMS App for Educational Sectors Has Become So Much
                  Easier than Before!
                </a>
              </div>
            </div>
            <div className="col-md-4 text-dark">
              <img src={blog2} alt="blog1" />
              <div className="Blog_text">
                <a href="/">
                  Building a LMS App for Educational Sectors Has Become So Much
                  Easier than Before!
                </a>
              </div>
            </div>
            <div className="col-md-4 text-dark">
              <img src={blog3} alt="blog1" />
              <div className="Blog_text">
                <a href="/">
                  Building a LMS App for Educational Sectors Has Become So Much
                  Easier than Before!
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-dark">
              <img src={blog4} alt="blog1" />
              <div className="Blog_text">
                <a href="/">
                  Building a LMS App for Educational Sectors Has Become So Much
                  Easier than Before!
                </a>
              </div>
            </div>
            <div className="col-md-4 text-dark">
              <img src={blog5} alt="blog1" />
              <div className="Blog_text">
                <a href="/">
                  Building a LMS App for Educational Sectors Has Become So Much
                  Easier than Before!
                </a>
              </div>
            </div>
            <div className="col-md-4 text-dark">
              <img src={blog6} alt="blog1" />
              <div className="Blog_text">
                <a href="/">
                  Building a LMS App for Educational Sectors Has Become So Much
                  Easier than Before!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Homepage;
