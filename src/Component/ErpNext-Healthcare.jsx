import React from 'react'
import Helmet from 'react-helmet';
import video from "../assets/video.mp4"
import Healthcareimg1 from "../assets/Healthcareimg1.webp"
import erpnext_line from "../assets/erpnext-line2.webp"
import Healthcare_line from "../assets/Healthcare-line.webp"
import whyour1 from "../assets/why_our1.webp"
import whyour2 from "../assets/why_our2.webp"
import whyour3 from "../assets/why_our3.webp"
import whyour4 from "../assets/why_our4.webp"
import whyour5 from "../assets/why_our5.webp"
import whyour6 from "../assets/why_our6.webp"
import whyour7 from "../assets/why_our7.webp"
import whyour8 from "../assets/why_our8.webp"
import whyour9 from "../assets/why_our9.webp"
import Hospital1 from "../assets/Hospital1.webp"
import Hospital2 from "../assets/Hospital2.webp"
import Hospital3 from "../assets/Hospital3.webp"
import Hospital4 from "../assets/Hospital4.webp"
import Hospital5 from "../assets/Hospital5.webp"
import Hospital6 from "../assets/Hospital6.webp"




const ErpNext_healthcare = () => {

    return (
        <>
            <Helmet>
                <title>ASIOT - ErpNext-Healthcare</title>
                <meta name="description" content="ASIOT - ErpNext-Healthcare" />
                <meta name="title" content="ASIOT - ErpNext-Healthcare" />
            </Helmet>
            <section className='Healthcare-section1' id='intro'>
                <div id="video-container">
                    <video preload="auto" autoPlay={true} loop={true} muted={true} width="1440" height="810">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="overlay">
                            <div className="overlay__inner">
                                <div className="healthcare-img">
                                    <img src={Healthcareimg1} alt="ERPNEXT_main" className='Healthcare_Circle' />
                                </div>
                                <div className="healthcare-para">
                                    <h1>ERPNext For  <span className='Pink_span'>Healthcare</span> Industry</h1>
                                    <img src={Healthcare_line} alt="ERPNEXT_main" className='Healthcare_line' />
                                    <p>
                                        The Best Unified Solution to Channelize Your Sales, Purchases, Inventory and Production Operations.
                                    </p>
                                    <img src={erpnext_line} alt="ERPNEXT_main" className='Healthcare_line2' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="stream-line">
                            <h2>Upgrade Your Healthcare
                                Business Now!
                            </h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <input type="text" placeholder="Name*" />
                                </div>
                                <div className="col-md-12">
                                    <input type="text" placeholder="Email*" />
                                </div>
                                <div className="col-md-12">
                                    <input type="text" placeholder="Phone Number*" />
                                </div>
                                <div className="col-md-12">
                                    <input type="text" placeholder="Company Name(Optional)" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 Sign-up">
                                    <a href="/contact-us" className="btn-gradient2 btn-gradient-dark Sign-up-free-btn"><span className=""><b>Join Us</b>
                                    </span></a>
                                </div>
                            </div>
                        </div>
                        {/* <a className="lets-erp lets-erp-health" href="/Contact">Let’s Get Started</a> */}

                    </div>
                </div>
            </section>
            <section className='Healthcare-section2'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Why Our Customers Use<span className='Purple_span'> ERPNext Healthcare</span></h2>
                        </div>
                    </div>
                    <div className="row ERPNext_row">
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="ERPNext_row_box">

                                <img className="leader-box-main-img" src={whyour1} alt='Healthcare-section' />
                                <div className="ERPNext_box_text">
                                    <h5>
                                        24/7 Availability
                                    </h5>
                                    <p>Available round the clock with an expert technical team, we are all ready to listen to your EPRNext Healthcare setup and business plan and execute it on a large scale.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="ERPNext_row_box">
                                <img className="leader-box-main-img leader-box-main-img2" src={whyour2} alt='Healthcare-section' />
                                <div className="ERPNext_box_text">
                                    <h5>
                                        Experienced Team
                                    </h5>
                                    <p>The Certified and experienced ERP experts at ASIOT plan & implement a reliable solution based on the commercial requirement of your business.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="ERPNext_row_box ">

                                <img className="leader-box-main-img" src={whyour3} alt='Healthcare-section' />
                                <div className="ERPNext_box_text">
                                    <h5>
                                        Global Assistance
                                    </h5>
                                    <p>The use of technology has become a key part of success in the healthcare industry, and we are striving to make its optimal use to increase productivity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ERPNext_row">
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="ERPNext_row_box">

                                <img className="leader-box-main-img" src={whyour4} alt='Healthcare-section' />
                                <div className="ERPNext_box_text">
                                    <h5>
                                        Free Demo
                                    </h5>
                                    <p>Book your free ERPNext healthcare demo with us to list out your preferences, business model, parameters, & challenges to us. Considering this, we provide the Best ERP solution for the Hospital Industry to fit your needs & budget.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="ERPNext_row_box">
                                <img className="leader-box-main-img" src={whyour5} alt='Healthcare-section' />
                                <div className="ERPNext_box_text">
                                    <h5>
                                        Domain Expertise
                                    </h5>
                                    <p>Our team has cross-industry experience & domain expertise in ERPNext Healthcare implementation, to target the profitability & radical growth of the hospitality sectors all over the world.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="ERPNext_row_box ">

                                <img className="leader-box-main-img" src={whyour6} alt='Healthcare-section' />
                                <div className="ERPNext_box_text">
                                    <h5>
                                        Accessibility
                                    </h5>
                                    <p>With ERPNext healthcare solution, you have access to all critical healthcare data like medical records and reports at your fingertips.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ERPNext_row">
                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="ERPNext_row_box">

                                <img className="leader-box-main-img" src={whyour7} alt='Healthcare-section' />
                                <div className="ERPNext_box_text">
                                    <h5>
                                        Customization
                                    </h5>
                                    <p>Select an ERPNext for healthcare industry you'd like to implement, and we'll customize it based on your preferences and needs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="ERPNext_row_box">
                                <img className="leader-box-main-img" src={whyour8} alt='Healthcare-section' />
                                <div className="ERPNext_box_text">
                                    <h5>
                                        Satisfaction Guaranteed

                                    </h5>
                                    <p>ASIOT breathes business, lives business, and produces business until our valued customers are satisfied.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 text-center">
                            <div className="ERPNext_row_box ">
                                <img className="leader-box-main-img" src={whyour9} alt='Healthcare-section' />
                                <div className="ERPNext_box_text">
                                    <h5>
                                        Warranty Period
                                    </h5>
                                    <p>Get warranty services with ERPNext Healthcare Software Implementation for specific time period.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ERPNext_row">
                        <div className="col-md-12">
                            <a href="/Contact" className="btn-gradient2 btn-gradient-dark Sign-up-free-btn"><span><b>Get Started</b></span></a>
                        </div>
                    </div>
                </div>

            </section>
            <section className='Healthcare-section3'>
                <div className="container">
                    <div className="row">
                        <h2>ERPNext for <span className='Purple_span'>Hospital Industry</span></h2>
                    <div className="col-md-12">
                        <p>The healthcare industry is ever evolving and faces a lot of challenges, hence the need of leveraging the innovative technology to streamline operational processes. An open-source ERPNext solution integrates all the data, breaks down silos and streamlines various departments like Accounting, Inventory, CRM, HR, Sales and purchase and so on.</p>
                        <p>Integration of ERPNext in the healthcare sector boosts organizational development, comply with legal guidelines, ensure enterprise needs and eliminate redundancies. By providing access to real-time data, ERP systems can boost the performance of business processes such as customer relationship management, analytics, supply chain management and human resources management.</p>
                    </div>
                    </div>
                </div>
            </section>
            <section className='Healthcare-section4'>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="Hospital-text">
                        <h2>Appointment<span className='Purple_span'> Scheduling</span></h2>
                        <p>ERPNext features integrated Appointment Scheduling for a real-time view of product availability, stock levels in your warehouses, stock transfers, and more. Batched or serialized items? Take your pick. Scan barcodes with your device camera for blazing fast search through stock for better retail management.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <img className="Hospital-img" src={Hospital1} alt='Healthcare-section' />
                    </div>
                    </div>
                </div>
            </section>
            <section className='Healthcare-section4 green-bg'>
                <div className="container">
                    <div className="row row-reverse-direction">
                    <div className="col-md-6">
                        <div className="Hospital-text">
                        <h2>EMR Electronic <span className='Purple_span'>Medical Record</span></h2>
                        <p>For ERPNext Implementation in Healthcare Industry, you can get in touch with ASIOT Technology who have an experienced team of ERP consultants, coders, designers and business developers to work on your business model. The entire process will include: discovery and planning, development, design, testing.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <img className="Hospital-img" src={Hospital2} alt='Healthcare-section' />
                    </div>
                    </div>
                </div>
            </section>
            <section className='Healthcare-section4'>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="Hospital-text">
                        <h2>Financial Accounting<span className='Purple_span'> System</span></h2>
                        <p>The Biggest Challenge of Healthcare Industries & Businesses like Hospitals, Clinics, and Dispensaries all around the world, is Patient, Doctor and Resource Management at one time. For that, there comes a need for the software, or systems which can easily streamline all medical business activities.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <img className="Hospital-img" src={Hospital3} alt='Healthcare-section' />
                    </div>
                    </div>
                </div>
            </section>
            <section className='Healthcare-section4 green-bg'>
                <div className="container">
                    <div className="row row-reverse-direction">
                    <div className="col-md-6">
                        <div className="Hospital-text">
                        <h2>Inventory & <span className='Purple_span'>Purchase</span></h2>
                        <p>Inventory & Purchase centralizing all data with multiple branches, it brings a great level of accuracy in various operations of Healthcare Industries. Scan barcodes with your device camera for blazing fast search through stock for better retail management.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <img className="Hospital-img" src={Hospital4} alt='Healthcare-section' />
                    </div>
                    </div>
                </div>
            </section>
            <section className='Healthcare-section4'>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="Hospital-text">
                        <h2>Payroll <span className='Purple_span'>Management</span></h2>
                        <p>At ASIOT, we provide a Digitized ERPNext Healthcare Software Solution Platform to locate medical records, billing and inventory at one place. Move ahead with our best suited ERP Healthcare Solution for Hospital Industry to increase your business productivity</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <img className="Hospital-img" src={Hospital5} alt='Healthcare-section' />
                    </div>
                    </div>
                </div>
            </section>
            <section className='Healthcare-section4 green-bg'>
                <div className="container">
                    <div className="row row-reverse-direction">
                    <div className="col-md-6">
                        <div className="Hospital-text">
                        <h2>MIS<span className='Purple_span'> Reports</span></h2>
                        <p>With a record of assisting the top rated Hospitals, Healthcare Industries, Clinics and Dispensaries all around the globe, we stand among the Best ERPNext Solution Providers to bridge the gap between patients and doctors.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <img className="Hospital-img" src={Hospital6} alt='Healthcare-section' />
                    </div>
                    </div>
                    <div className="row ERPNext_row">
                        <div className="col-md-12">
                        <a href="/Contact" className="btn-gradient2 btn-gradient-dark Sign-up-free-btn"><span><b>Get Started</b></span></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Healthcare-section5'>
            <div className="container">
            <div  className="row justify-content-center">
					<h2>Frequently Asked<span  className="Purple_span"> Questions</span></h2>
					<div  className="col-md-12">
						<div  className="Faq-accordion">
							<button  className="accordion">Which is the Best ERP System for Healthcare?</button>
							<div  className="accordion-content">
								<p>
									ERPNext is the best healthcare management software for hospital industry, clinics,
									and
									dispensaries. It comes with customization features which help the businesses to have
									a
									system based on the specific requirements.
								</p>
							</div>

							<button  className="accordion">What is the Role of ERPNext System in Healthcare?</button>
							<div  className="accordion-content">
								<p>
									It is a boon for hospitals, dispensaries, and clinics to have an ERP system where
									they can easily manage the data/information of patients, doctors, resources and keep
									a track on all business activities on a regular basis.
								</p>
							</div>

							<button  className="accordion">What is ERPNext Healthcare Software?</button>
							<div  className="accordion-content">
								<p>
									ERPNext Healthcare Software is designed for the hospital management to plan and
									execute multiset operations like appointment booking, treatment plan, lab tests,
									record management, inventory control, pharmacy etc. at a centralized platform.
								</p>
							</div>
							<button  className="accordion">How to Implement ERPNext Healthcare in Hospitals?</button>
							<div  className="accordion-content">
								<p>
									For ERPNext Implementation in Healthcare Industry, you can get in touch with
									ASIOT who have an experienced team of ERP consultants, coders, designers and
									business developers to work on your business model. The entire process will include:
									discovery and planning, development, design, testing, deployment and support.
								</p>
							</div>
						

							<button  className="accordion">Is ERPNext Healthcare Solution Customizable?</button>
							<div  className="accordion-content">
								<p>
									Using ERPNext Github- A small plugin for Frappe that adds the support of customizations to the numerical controls, we can customize your business requirement
								</p>
							</div>

						</div>
					</div>
				</div>
            </div>
            </section>
        </>
    );
};
export default ErpNext_healthcare;