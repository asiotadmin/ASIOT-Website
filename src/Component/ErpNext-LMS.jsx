import React from 'react'
import Helmet from 'react-helmet';
import video2 from "../assets/video2.mp4"
import Healthcare_line from "../assets/Healthcare-line.webp"
import lmsmodule1 from "../assets/Lms-module1.webp"
import lmsmodule2 from "../assets/Lms-module2.webp"
import lmsmodule3 from "../assets/Lms-module3.webp"
import lmsmodule4 from "../assets/Lms-module4.webp"
import lmsmodule5 from "../assets/Lms-module5.webp"
import lmsmodule6 from "../assets/Lms-module6.webp"
import lmsfeature1 from "../assets/Lms-feature1.webp"
import lmsfeature2 from "../assets/Lms-feature2.webp"
import lmsfeature3 from "../assets/Lms-feature3.webp"
import lmsfeature4 from "../assets/Lms-feature4.webp"
import lmsfeature5 from "../assets/Lms-feature5.webp"
import lmsfeature6 from "../assets/Lms-feature6.webp"
import lmsfeature7 from "../assets/Lms-feature7.webp"
import lmsfeature8 from "../assets/Lms-feature8.webp"
import lmsfeature9 from "../assets/Lms-feature9.webp"

const ErpNext_LMS = () => {

    return (
        <>
            <Helmet>
                <title>ASIOT - ErpNext-Lms</title>
                <meta name="description" content="ASIOT - ErpNext-Lms" />
                <meta name="title" content="ASIOT - ErpNext-Lms" />
            </Helmet>
            <section className='Healthcare-section1 Lms-section1' id='intro'>
                <div id="video-container">
                    <video preload="auto" autoPlay={true} loop={true} muted={true} width="1440" height="810">
                        <source src={video2} type="video/mp4" />
                    </video>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="overlay">
                            <div className="overlay__inner">
                                <div className="healthcare-para LMS-para">
                                    <h1>ERPNext For <span className='Blue_span'>LMS</span> Industry</h1>
                                    <img src={Healthcare_line} alt="ERPNEXT_main" className='Healthcare_line' />
                                    <p>
                                    The Best Unified Solution to Channelize Your Sales, Purchases, Inventory and Production Operations.
                                    </p>
                                    <div className="row ERPNext_row">
                                        <div className="col-md-12">
                                            <a href="/Contact" className="btn-gradient2 btn-gradient-dark Sign-up-free-btn"><span><b>Get Started</b></span></a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="stream-line">
                            <h2>Upgrade Your LMS
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
                                    <a href="/contact-us" className="btn-gradient-dark Sign-up-free-btn Join-us"><span className=""><b>Reach Us</b>
                                    </span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Lms-section2'>
            <div className="container">
            <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>ERPNext for <span className='Purple_span'>Learning Management System</span></h2>
                        </div>
                    </div>
                   <div className="row">
                    <div className="col-md-12">
                        <p>ASIOT provides the best Cloud based ERP software solutions for the education industry. We offer next-generation Cloud based- ERPNext Solutions for schools, universities and corporates, designed to meet the diverse needs of the institution along with a suite of exclusive services that are unique to the company. Our ERPNext Solutions makes it easier to manage and monitor all aspects of learning in one place and comes bundled with LMS Solution.</p>
                        <br />
                        <p>Cloud ERP Implementation enables optimization of resources & reaches high productivity by delivering complete automation. We offer integrated solutions of customized modules. Automate your entire manual administrative operations to ensure smooth and hassle-free daily operations pertaining to admission, attendance, fee collection, course management, library management etc.</p>
                    </div>
                   </div>
                </div>
            </section>
            <section className='Lms-section3'>
                <div className="container">
                <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2><span className='Purple_span'>Modules</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="module-box">
                            <img src={lmsmodule1} alt="lms-modules"/>
                            <h5>Student<br></br>Management</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="module-box">
                            <img src={lmsmodule2} alt="lms-modules"/>
					        <h5>Account <br></br>Management</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="module-box">
                            <img src={lmsmodule3} alt="lms-modules"/>
                            <h5>Admission <br></br>Management</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="module-box">
                            <img src={lmsmodule4} alt="lms-modules"/>
					        <h5>Learning <br></br>Management</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="module-box">
                            <img src={lmsmodule5} alt="lms-modules"/>
					        <h5>Attendance <br></br>Management</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="module-box">
                            <img src={lmsmodule6} alt="lms-modules"/>
					        <h5>Assessment <br></br>Management</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Lms-section4'>
                <div className="container">
                    <div className="row">
                    <h2><span className='Purple_span'>Features</span></h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-box">
                            <img src={lmsfeature1} alt="lms-modules"/>
					        <h5>Centralized Database</h5>
                            <p>Explore and discover a large number of authentic items.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-box">
                            <img src={lmsfeature2} alt="lms-modules"/>
					        <h5>Data Security</h5>
                            <p>Create appealing listings for your product to sell online.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-box">
                            <img src={lmsfeature3} alt="lms-modules"/>
					        <h5>Dashboard & Reports</h5>
                            <p>Offer deal alerts, price drops, order alerts, chat messages.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-box">
                            <img src={lmsfeature4} alt="lms-modules"/>
					        <h5>Robust Features</h5>
                            <p>Easily chat and negotiate with interested buyers.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-box">
                            <img src={lmsfeature5} alt="lms-modules"/>
					        <h5>Customizable Platform</h5>
                            <p>Explore a wide range of listings with a detailed description.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-box">
                            <img src={lmsfeature6} alt="lms-modules"/>
					        <h5>Data-Driven Decision</h5>
                            <p>Flick through Buyer’s or Customer’s Profile to know their credibility.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-box">
                            <img src={lmsfeature7} alt="lms-modules"/>
					        <h5>Adaptability Features</h5>
                            <p>Explore and discover a large number of authentic items.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-box">
                            <img src={lmsfeature8} alt="lms-modules"/>
					        <h5>Student Experience</h5>
                            <p>Create appealing listings for your product to sell online.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-box">
                            <img src={lmsfeature9} alt="lms-modules"/>
					        <h5>Centralized Accounting</h5>
                            <p>Create appealing listings for your product to sell online.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='Healthcare-section5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <h2>Frequently Asked<span className="Purple_span"> Questions</span></h2>
                        <div className="col-md-12">
                            <div className="Faq-accordion">
                                <button className="accordion">What is ERPNext LMS?</button>
                                <div className="accordion-content">
                                    <p>
                                    ERPNext LMS software is an e-learning solution for students, educational institutes,
									and learning centers to provide
									them with a centralized platform for efficiently conducting teaching and learning
									activities.
                                    </p>
                                </div>

                                <button className="accordion">Which is the Best ERP Solution for Learning Management
								systems?</button>
                                <div className="accordion-content">
                                    <p>
                                    ERPNext LMS is the best solution to enhance the teaching and learning experience for
									students, teachers, and institutes.
                                    </p>
                                </div>

                                <button className="accordion">Why ERPNext LMS for Education Business Startups?</button>
                                <div className="accordion-content">
                                    <p>
                                    ERPNext Learning Management System is the perfect digital solution to centralize all
									activities related to learning and
									teaching, like study material, exam reports, and attendance updates, at one point,
									which is accessible to students,
									parents, and teachers.
                                    </p>
                                    <p>
                                        Using ERPNext Github- A small plugin for Frappe that adds the support of customizations to the numerical controls, we can customize your business requirement
                                    </p>
                                    <p>
									Benefits of ERPNext LMS implementation are:
								</p>
                                <ul>
									<li>
										Streamlined Operations: Now, you can integrate a single platform, allowing for
										simplified and efficient management of
										academic operations, student information, and employee training.</li>
									<li>
										Improved Student Experience: It gives students easy access to course materials,
										assignments, and grades. It can also
										facilitate communication between students, teachers, and administrators.</li>
									<li>
										Better Data Management: With ERPNext LMS, you can easily manage student and
										employee
										data, making it easier to manage,
										analyze, and report.</li>
									<li>
										Cost-Effective: Implementing an ERPNext LMS can reduce operational costs by
										eliminating the need for multiple systems
										and manual processes. It can also improve the efficiency of operations, leading
										to
										increased productivity and cost
										savings.</li>
								</ul>
                                </div>
                                <button className="accordion">Where can ERPNext LMS be implemented?</button>
                                <div className="accordion-content">
                                <p>ERPNext LMS can be implemented in several academic, business, and learning centers:
								</p>
								<ul>
									<li>Educational Institutes, Schools, Colleges, and Universities: For conducting
										digital programs.</li>
									<li>Hospitals, Clinics, and Healthcare organizations: To manage employee and student
										training and development programs.</li>
									<li>Manufacturing Industries: Training employees about new equipment, safety
										procedures, and quality control processes.</li>
									<li>Retail organizations: To train employees on customer service, product knowledge,
										and sales techniques.</li>
									<li> Financial Services: Providing financial regulations, risk management, and
										customer services.</li>
								</ul>

                                </div>
                                <button className="accordion">How does ERPNext LMS work?</button>
                                <div className="accordion-content">
                                    <p>
                                    ERPNext LMS implementation helps create and distribute the delivery of educational
									content, managing staff and students
									and their routine activities and tasks on one platform.
                                    </p>
                                </div>
                                <button className="accordion">Is ERPNext LMS Solution Customizable?</button>
                                <div className="accordion-content">
                                    <p>
                                    Using ERPNext Github- A small plugin for Frappe that adds the support of
									customizations to
									the numerical controls, we can customize your business requirement
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
export default ErpNext_LMS;