import React from 'react'
import Helmet from 'react-helmet';
import ErpRetailBanner from "../assets/Artwork.webp"
import Retailfeature1 from "../assets/Retail-feature1.webp"
import Retailfeature2 from "../assets/Retail-feature2.webp"
import posvideo from "../assets/Pos.mp4"
import Counter from "../assets/Counter.webp"
import Slider from "../assets/Slider.webp"
import Gallery from "../assets/Gallery.webp"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper";
import Client1 from "../assets/Client1.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import $ from 'jquery';

const ERPRetail = () => {
    //     window.onload = function () {
    //         document.getElementById("campaign-alert").style.display = "none";
    //    };
    $(document.body).addClass('erpretail-page');

    return (
        <>
            <Helmet>
                <title>ERPNext for Retail Shop - ASIOT</title>
                <meta name="description" content="The erpnext for retail shop software is a comprehensive open-source ERP system that can be used for various businesses, including retail shops." />
                <meta name="title" content="ERPNext for Retail Shop - ASIOT" />
            </Helmet>
            <section className='Retail-section1'>
                <div className="row">
                    <div className="col-md-6">
                        <h1>
                            ERPNext for Retail Shop
                        </h1>
                        <p>Power-up Your Retail Business With ERPNext<br /> Retail - Simplify and Grow.</p>
                        <a href="/" className='Retail-link'>More Info</a>  <a href="/" className='Retail-link2'>Join now!</a>
                    </div>
                    <div className="col-md-6">
                        <img src={ErpRetailBanner} alt="ErpRetailBanner" />
                    </div>
                </div>
                <div className="container">
                    <div className="row retail-row2">
                        <div className="col-md-4 right-border">
                            <h3>Sales Management</h3>
                            <h5>Create and manage sales orders for products or services.</h5>
                        </div>
                        <div className="col-md-4 right-border">
                            <h3>Purchase Management</h3>
                            <h5>Create and manage purchase orders for goods with ease.</h5>
                        </div>
                        <div className="col-md-4">
                            <h3>Inventory Management</h3>
                            <h5>Create and manage a comprehensive inventory list.</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Retail-section2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2><span className='bottom-span'>Features</span> of ERPNext Retail</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Retailfeature1} alt="Retailfeature1" className='section2-img1' />
                        </div>
                        <div className="col-md-6">
                            <h3 className='pos-heading'>Point of Sale (POS)</h3>
                            <p>A user-friendly and intuitive interface that allows businesses to process sales, accept payments, and manage customer data from a central location.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className='inventory-heading'>Inventory Management</h3>
                            <p className='inventory-para'>Helps businesses keep track of their inventory levels, manage stock movements, and set reorder levels for their products.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={Retailfeature2} alt="Retailfeature1" className='section2-img2' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='Retail-section3'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>We are marching ahead with the pride of our<span className='bottom-span'> success</span></h2>
                            <p>Help's you transform and manage the change easily.</p>
                            <div className="video-wrapper">
                                <div className="video-container" >
                                    <video controls id="video" autoPlay={true}  preload="auto" loop={true} muted={true} >
                                        <source src={posvideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={Counter} alt="Counter" className='Counter' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Retail  <span className='bottom-span'>Management</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Slider} alt="Slider" className='Slider-retail'/>
                        </div>
                        <div className="col-md-6">
                            <p className='success-para1'>Retail management is the process of overseeing the operations of a retail business to maximize profits and customer satisfaction. This includes planning and implementing strategies for product merchandising, inventory management, sales forecasting, marketing, customer service, and staff management.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Retail-section4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2><span className='bottom-span'>Business</span> Type</h2>
                        <img src={Gallery} alt="Gallery" className='Gallery' />

                    </div>
                </div>
            </div>
            </section>

            <section className="Our_clients Testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
              <span className='bottom-span'>Testimonials</span>
              </h2>
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
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>What are you waiting for?</h2>
              <a href="/" className='Join-now'>Join Now!</a>
                </div>
                </div>
        </div>
      </section>
        </>
    );
};
export default ERPRetail;