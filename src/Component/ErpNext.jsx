import React from 'react'
import Helmet from 'react-helmet';
import ERPNEXT_main from "../assets/ERPNEXT_main.webp"
import erpnext_line from "../assets/erpnext-line.webp"
import specific from "../assets/specific-arrow.svg"
import best1 from "../assets/best1.webp"
import best2 from "../assets/best2.webp"
import best3 from "../assets/best3.webp"
import best4 from "../assets/best4.webp"
import best5 from "../assets/best5.webp"
import best6 from "../assets/best6.webp"
import best7 from "../assets/best7.webp"
import best8 from "../assets/best8.webp"
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.webp";
import blog4 from "../assets/blog4.webp";
import blog5 from "../assets/blog5.webp";
import blog6 from "../assets/blog6.webp";



const ErpNext = () => {
    return (
        <>
            <Helmet>
                <title>ASIOT - ErpNext</title>
                <meta name="description" content="ErpNext page" />
                <meta name="title" content="ErpNext page" />
            </Helmet>
            <section className='ERP_section1'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="left-erp">
                            <h1>ERPNext help you to
                                grow your business faster</h1>
                            <p>ASIOT is the ERPNext solutions platform teams use to stay focused on the goals, track engagement for report your business .</p>
                            <a className="erp_nextbtn" href="/Contact">Get Started</a>
                            <br />
                            <img src={erpnext_line} alt="ERPNEXT_main" />

                        </div>

                    </div>
                    <div className="col-md-6">
                        <img src={ERPNEXT_main} alt="ERPNEXT_main" className='ERP_main_img' />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a className="lets-erp" href="/Contact">Let’s Get ERPNext</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="modules reveal ERP_section2">
                <div className="container">
                    <div className="row">
                        <h2>Benefits You Get With Our<span className='Purple_span'> ERPNext Software Solutions</span></h2>
                        <div className="row container">
                            <ul className="module-list">
                                <li>
                                    <div className="module-box">
                                        <div className="module-box-inner">
                                            <h3>Finance</h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="module-box">
                                        <div className="module-box-inner">

                                            <h3>Inventory</h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="module-box">
                                        <div className="module-box-inner">
                                            <h3>CRM</h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="module-box">
                                        <div className="module-box-inner">
                                            <h3>Selling</h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="module-box">
                                        <div className="module-box-inner">
                                            <h3>Buying</h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="module-box">
                                        <div className="module-box-inner">
                                            <h3>Human Resources</h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="module-box">
                                        <div className="module-box-inner">
                                            <h3>Management</h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="module-box">
                                        <div className="module-box-inner">
                                            <h3>Customer Services</h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ERP_section3'>
                <div className="container">
                    <div className="row erp-heading-row">
                        <div className="col-md-12">
                            <h2><span className='Purple_span'>Industry Specific</span> ERP Software</h2>
                            <p>Customizable open source ERPNext software, you can easily revamp and tune internal processes to your unique business style.</p>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="specific-module">
                                <h4>ERPNext Manufacturing</h4>
                                <p>Make use of best features such as work order planning and employees and other data in real time.</p>
                            <img src={specific} alt="ERPNEXT_main" className='specific-img'/>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="specific-module">
                                <h4>ERPNext Retail</h4>
                                <p>Leverage ERPNext software solution to track financs across all multi store retail business.</p>
                             <img src={specific} alt="ERPNEXT_main" className='specific-img'/>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="specific-module">
                                <h4>ERPNext Healthcare</h4>
                                <p>Open Source ERP allows the staff to make appointmentswith patients, collect reports etc.</p>
                             <img src={specific} alt="ERPNEXT_main" className='specific-img'/>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="specific-module">
                            <h4>ERPNext E-Learning</h4>
                            <p>The ERPNExt Software is custom designed to handle sales POS for food; room inventory services.</p>
                             <img src={specific} alt="ERPNEXT_main" className='specific-img'/>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="specific-module">
                                <h4>Food Industry</h4>
                                <p>ERPNext Software that integrates LMS solutions with live classes private video channel, etc</p>
                             <img src={specific} alt="ERPNEXT_main" className='specific-img'/>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="specific-module">
                            <h4>Automative Industry</h4>
                            <p>Manage business processes, agile operations, optimize costs across the organization etc.</p>
                             <img src={specific} alt="ERPNEXT_main" className='specific-img'/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ERP_section4'>
            <div className="container">
                    <div className="row erp-heading-row">
                        <div className="col-md-12">
                            <h2>ERPNext Software is the world’s best<span className='Purple_span'> 100% Open source ERP</span></h2>
                        </div>
                    </div>
                    <div className="row best-box-row">
                        <div className="col-md-3">
                            <div className="best-box">
                            <img src={best1} alt="ERPNEXT_main" className='best-box-img best-box-img1'/>
                                <h4>Open Source ERP System</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                           <div className="best-box">
                           <img src={best2} alt="ERPNEXT_main" className='best-box-img'/>

                           <h4>Active Projects Since 2010</h4>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="best-box">
                           <img src={best3} alt="ERPNEXT_main" className='best-box-img'/>
                           <h4>Used By 100+ companies</h4>
                           </div>
                        </div>
                        <div className="col-md-3">
                        <div className="best-box">
                        <img src={best4} alt="ERPNEXT_main" className='best-box-img best-box-img4'/>
                            <h4>Best for small & medium biz</h4>
                        </div>
                        </div>
                    </div>
                    <div className="row best-box-row">
                        <div className="col-md-3">
                            <div className="best-box">
                            <img src={best5} alt="ERPNEXT_main" className='best-box-img'/>
                           <h4>More than 100+ countries</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                           <div className="best-box">
                           <img src={best6} alt="ERPNEXT_main" className='best-box-img'/>
                           <h4>Customized & Extensible</h4>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="best-box">
                           <img src={best7} alt="ERPNEXT_main" className='best-box-img'/>
                           <h4>Accounting & Finance CRM</h4>
                           </div>
                        </div>
                        <div className="col-md-3">
                          <div className="best-box">
                          <img src={best8} alt="ERPNEXT_main" className='best-box-img'/>
                          <h4>Manufacturing & Inventory</h4>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        <section className="Our_blogs ERP_section5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                Read our blogs and get <span className="Purple_span">our insights from us.</span>
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
export default ErpNext;