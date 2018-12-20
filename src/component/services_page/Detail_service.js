import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


function mapStateToProps(state) {
    return {

    };
}

class Detail_service extends Component {
    render() {
        return (
            <div>
                {/* ================================================= WEB APPLICATION ============================================ */}
                <div style={{ paddingTop: "3%" }}>
                    <section >
                        <div className=" slide carousel-fade " data-ride="carousel" >
                            <div className="carousel-inner wow zoomIn">
                                <div className="carousel-item active slides">
                                    <div className="hero ">
                                        <h1>Web
                                            <span>
                                                <a href className="typewrite" data-period={2000} data-type="[&quot; Application&quot;]">
                                                    <span className="wrap" />
                                                </a>
                                            </span>
                                        </h1>
                                        <div className="container-fluid " >
                                            <div className="row ">
                                                <div className="col-md-4 one_third column_shortcode">
                                                    <h5 className="heading heading-line">
                                                        <span className="heading-box color-green-h2">We Know:</span>
                                                        <span className="heading-title-line">
                                                            <span className="heading-title-line-inner" />
                                                        </span></h5><ul className="list">
                                                        <li><i className="icon-typicons-ok" /> <strong>Responsive Web Design</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>E-commerce</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>Product catalogs</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>Blogs</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>Portals/Intranets</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>Social media integration</strong></li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-4 one_third column_shortcode">
                                                    <h5 className="heading heading-line">
                                                        <span className="heading-box color-green-h2">We code in:</span>
                                                        <span className="heading-title-line">
                                                            <span className="heading-title-line-inner" />
                                                        </span></h5><ul className="list">
                                                        <li><i className="icon-typicons-ok" /> <strong>HTML5</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>CSS3</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>JavaScript</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>Bootstrap</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>PHP</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>MySQL</strong></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-4 one_third last column_shortcode">
                                                    <h5 className="heading heading-line">
                                                        <span className="heading-box color-green-h2">We use:</span>
                                                        <span className="heading-title-line">
                                                            <span className="heading-title-line-inner" />
                                                        </span></h5><ul className="list">
                                                        <li><i className="icon-typicons-ok" /> <strong>jQuery</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>Bootstrap</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>Roots.io</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>WordPress</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>PayPal</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>Code versioning</strong></li>
                                                    </ul>
                                                </div>



                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>

                </div>



                <div className="text-center" >
                    <div style={{ backgroundColor: "#cdfac2cb", paddingBottom: "5%", paddingTop: "2%" }}>
                        <h4 className="heading heading-line " >
                            <span  ><strong>Technology</strong></span>
                        </h4>
                        <div className="row " style={{ paddingTop: "2%" }}  >
                            <div className="col-md-4 three_third wow slideInUp">
                                <h2 className="bgtop" style={{ height: 15 }} />
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                                    <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10, color: "rgb(92, 201, 20)" }}>
                                        <strong>
                                         Frontend Development
                                        </strong>
                                    </h2>
                                    <img src="img/img/front-end.png" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                                    <br /><br /> <br />
                                    <details>
                                        <summary className="fa fa-play"> Read More </summary>
                                        <nav>

                                            {/* <img src="img/img/simplicity.png" alt="..." className="img-fluid"  style={{ paddingBottom: "10%" }}/> */}
                                            <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                                ScienceSoft keeps up with the latest trends in front-end development to meet the growing user demands for simplicity and visual appeal. To make web applications not only powerful, but also interactive, intuitive and stylish, we work with a wide range of technologies<br />  <br />
                                            </p>
                                        </nav>

                                    </details>
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow slideInUp">
                                <h2 className="bgtop" style={{ height: 15 }} />
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                                    <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10, color: "rgb(92, 201, 20)" }}>
                                        <strong>
                                            Backend development
                   </strong>
                                    </h2>
                                    <img src="img/img/back-end.png" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />

                                    <details>
                                        <summary className="fa fa-play"> Read More </summary>
                                        <nav>
                                            {/* <img src="img/img/simplicity.png" alt="..." className="img-fluid"  style={{ paddingBottom: "10%" }}/> */}
                                            <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                                We define our backend development tools in accordance with our customers’ business requirements and develop robust and durable backends, irrespective of the technologies we use. We also offer deployment and customization of a suitable content management system.              </p>
                                        </nav>
                                    </details>
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow slideInUp">
                                <h2 className="bgtop" style={{ height: 15 }} />
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                                    <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10, color: "rgb(92, 201, 20)" }}>
                                        <strong>
                                            Database development
                   </strong>
                                    </h2>
                                    <img src="img/img/data.png" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                                    <br /><br /> <br />
                                    <details>
                                        <summary className="fa fa-play"> Read More </summary>
                                        <nav>
                                            {/* <img src="img/img/simplicity.png" alt="..." className="img-fluid"  style={{ paddingBottom: "10%" }}/> */}
                                            <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                                Whether you already have a database and simply need integration, or cannot decide on your app’s initial database, our specialists are ready to help. ScienceSoft works with all the most widely known SQL and NoSQL databases, including:      <br />  <br />  <br />      </p>
                                        </nav>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center" >

                    <div style={{ backgroundColor: "#cdfac2cb", paddingBottom: "5%", paddingTop: "2%" }}>
                        <h4 className="heading heading-line " >
                            <span  ><strong>Responsive Web Design</strong></span>
                        </h4>
                        <div className="row " style={{ paddingTop: "2%" }}  >
                            <div className="col-md-4 three_third wow fadeInDown">
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }} >
                                    <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>Simplicity</p>
                                    <img src="img/img/simplicity.png" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow fadeInDown">
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}>
                                    <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>Consistency</p>
                                    <img src="img/img/contensive.png" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow fadeInDown">
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }} >
                                    <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>Speed</p>
                                    <img src="img/img/speed.jpg" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center" >
                    <div style={{ backgroundColor: "#cdfac2cb", paddingBottom: "5%", paddingTop: "2%" }}>
                        <h4 className="heading heading-line " >
                            <span  ><strong>OUR WEB APP DEVELOPMENT APPROACHES</strong></span>
                        </h4>
                        <div className="row " style={{ paddingTop: "2%" }}  >

                            <div className="col-md-6 three_third wow zoomIn">
                                <h2 className="bgtop" style={{ height: 15 }} />
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                                    <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10, color: "rgb(92, 201, 20)" }}>
                                        <strong>
                                            Single Page Apps
                   </strong>
                                    </h2>
                                    <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>

                                        We are convinced that a professionally developed single-page web app can offer impressive and secure web experience. By designing and developing interactive SPAs, we ensure responsiveness and cross-browser compatibility, as well as live up to users’ high expectations in agility and performance.
               <br /><br />
                                    </p>

                                </div>
                            </div>
                            <div className="col-md-6 three_third wow zoomIn">
                                <h2 className="bgtop" style={{ height: 15 }} />
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                                    <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10, color: "rgb(92, 201, 20)" }}>
                                        <strong>
                                            Progressive Web Apps
                   </strong>
                                    </h2>
                                    <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                        With smartphones and tablets playing a pivotal role in today’s web experience, the mobile-friendly nature of a web app is a necessity, not a whim. We develop mobile-enabled progressive web apps in line with Google’s definition of ‘progressiveness’, making them fast even on 2G networks, offline-available, and easily installable on a user’s home screen.                      </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





{/* ================================================= MOBILE APPLICATION ========================================== */}


                <div style={{ paddingTop: "3%" }}>
                    <section >
                        <div className=" slide carousel-fade" data-ride="carousel" style={{ backgroundImage: "url(../img/img/bg2.jpg)" }}>
                            <div className="carousel-inner wow zoomIn">
                                <div className="carousel-item active slides">
                                    <div className="hero ">
                                        <h1>Mobile
                                            <span>
                                                <a href className="typewrite" data-period={2000} data-type="[&quot; Application&quot;]">
                                                    <span className="wrap" />
                                                </a>
                                            </span>
                                        </h1>
                                        <div className="container-fluid " >
                                            <div className="row ">
                                                <div className="col-md-4 one_third column_shortcode wow zoomIn">
                                                    <img src="img/img/mb.png" alt="..." className="img-fluid" style={{ paddingBottom: "5%" }} />

                                                </div>

                                                <div className="col-md-4 one_third column_shortcode">
                                                    <h5 className="heading heading-line">
                                                        <span className="heading-box color-green-h2">Native Mobile </span>
                                                        <span className="heading-title-line">
                                                            <span className="heading-title-line-inner" />
                                                        </span></h5><ul className="listM" style={{ paddingLeft: "28%" }}>
                                                        <li><i className="icon-typicons-ok" /> <strong>iOS</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>Android</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>Windows Phone</strong></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-4 one_third last column_shortcode">
                                                    <h5 className="heading heading-line">
                                                        <span className="heading-box color-green-h2"> cross-platform</span>
                                                        <span className="heading-title-line">
                                                            <span className="heading-title-line-inner" />
                                                        </span></h5><ul className="listM">
                                                        <li><i className="icon-typicons-ok" /> <strong>Cordova/PhoneGap</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>Xamarin</strong></li>
                                                        <li><i className="icon-typicons-ok" /> <strong>React Native</strong></li>

                                                    </ul>
                                                </div>



                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>

                </div>


                <div className="text-center" >

                    <div style={{ backgroundColor: "#ffffff", paddingBottom: "5%", paddingTop: "2%" }}>
                        <h4 className="heading heading-line " >
                            <span  ><strong>FULL-CYCLE DEVELOPMENT SERVICES</strong></span>
                        </h4>
                        <img src="img/img/lc.png" alt="..." className="img-fluid" style={{ height: "80%", width: "60%" }} />

                    </div>
                </div>


                <div className="text-center" >
                    <div style={{ backgroundColor: "#e2dede", paddingBottom: "5%", paddingTop: "2%" }}>
                        <h4 className="heading heading-line " >
                            <span  ><strong>NATIVE MOBILE DEVELOPMENT</strong></span>
                        </h4>
                        <div className="row " style={{ paddingTop: "2%" }}  >
                            <div className="col-md-4 three_third wow fadeInUp">
                                <h2 className="bgtop" style={{ height: 15 }} />
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                                    <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
                                        <strong>
                                            iOS app developers
                                        </strong>
                                    </h2>
                                    <img src="img/img/ios.jpg" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />

                                    <details>
                                        <summary className="fa fa-play"> Read More </summary>
                                        <nav>
                                            <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                                ScienceSoft’s iOS app developers have a perfect command of both Objective-C and Swift. Working with iOS SDK, CocoaTouch, Core Data, Core Animation, Location Services, UIKit, and many more tools, our team delivers successful iPhone and iPad apps that easily get published on App Store.              </p>
                                        </nav>
                                    </details>
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow fadeInUp">
                                <h2 className="bgtop" style={{ height: 15 }} />
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                                    <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
                                        <strong>
                                            Android app developers
                                        </strong>
                                    </h2>
                                    <br />
                                    <img src="img/img/android.png" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                                    <br /><br />
                                    <details>
                                        <summary className="fa fa-play"> Read More </summary>
                                        <nav>
                                            <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                                Our Android app developers keep up with the time and write mobile apps not only on Java, but also on Kotlin. They leverage Android SDK, Eclipse IDE, Volley, Gradle, Logcat, UIAutomator, as well as powerful APIs to achieve the best app performance and appearance on all Android devices.
                                            </p>
                                        </nav>
                                    </details>
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow fadeInUp">
                                <h2 className="bgtop" style={{ height: 15 }} />
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                                    <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
                                        <strong>
                                            Windows Phone developers
                                        </strong>
                                    </h2>
                                    <br />
                                    <img src="img/img/wp.jpg" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                                    <br /><br /> <br />
                                    <details>
                                        <summary className="fa fa-play"> Read More </summary>
                                        <nav>
                                            <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                                Along with the mobile app specialists who focus on the two most popular platforms, we also have a team of Windows Phone developers. C#, Visual Studio 2010/13/15, Silverlight 4+, Microsoft Expression Blend, and other tools all help ScienceSoft deliver high-quality apps for Windows Phone.     <br />  <br />  <br />      </p>
                                        </nav>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center" >
                    <div style={{ backgroundColor: "#ffffff", paddingBottom: "5%", paddingTop: "2%" }}>
                        <h4 className="heading heading-line " >
                            <span  ><strong>CROSS-PLATFORM DEVELOPMENT</strong></span>
                        </h4>
                        <div className="row " style={{ paddingTop: "2%" }}  >
                            <div className="col-md-4 three_third wow flipInY">
                                <h2 className="bgtop" style={{ height: 15 }} />
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                                    <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
                                        <strong>
                                            Cordova/PhoneGap
                                        </strong>
                                    </h2><br />
                                    <img src="img/img/pg.png" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                                    <br /><br />
                                    <details>
                                        <summary className="fa fa-play"> Read More </summary>
                                        <nav>
                                            <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                                In addition, our team of front-end developers can tap their skills in your Cordova (PhoneGap), AngularJS, Ionic or React Native projects. Knowing the limitations of hybrid frameworks, our team makes shrewd strategic decisions to get the most out of JavaScript, CSS and HTML for mobile.
                                            </p>
                                        </nav>
                                    </details>
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow flipInY">
                                <h2 className="bgtop" style={{ height: 15 }} />
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                                    <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
                                        <strong>
                                            Xamarin
                                         </strong>
                                    </h2>
                                    <br />
                                    <img src="img/img/xm.jpg" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />

                                    <details>
                                        <summary className="fa fa-play"> Read More </summary>
                                        <nav>
                                            <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                                ScienceSoft employs another team of C# developers who create apps for all three popular platforms on Xamarin. We use both Xamarin.Forms and Xamarin.iOS/Android for our projects, and are well-versed in multiple plugins and libraries, including Plugin.CurrentActivity, Acr.Support, and Acr.UserDialog.              </p>
                                        </nav>
                                    </details>
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow flipInY">
                                <h2 className="bgtop" style={{ height: 15 }} />
                                <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                                    <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10 }}>
                                        <strong>
                                            React Native
                                         </strong>
                                    </h2>
                                    <br />
                                    <img src="img/img/rn.png" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                                    <br />  <br />
                                    <details>
                                        <summary className="fa fa-play"> Read More </summary>
                                        <nav>
                                            <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                                Offering fast development of apps with stable performance, React Native is a ‘bridge’ between Xamarin and Cordova. A framework that is even now used and supported by Facebook guarantees platform-specific UI and near-native response time.
                                                ScienceSoft’s latest React Native project involved development of a two-module healthcare mobile solution, showcased on both Google Play and App Store and rated 4+
                                            </p>
                                        </nav>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  {/* ================================================= DESIGN ========================================== */}

 <div style={{ paddingTop: "3%" }}>
                    <section >
                        <div className=" slide carousel-fade" data-ride="carousel" style={{ backgroundImage: "url(../img/img/bg2.jpg)" }}>
                            <div className="carousel-inner wow zoomIn">
                                <div className="carousel-item active slides">
                                    <div className="hero ">
                                        <h1>Web & Mobile
                                            <span>
                                                <a href className="typewrite" data-period={2000} data-type="[&quot; Design&quot;]">
                                                    <span className="wrap" />
                                                </a>
                                            </span>
                                        </h1>
                                        <div className="container-fluid " >
                                            <div className="row ">
                                                <div className="col-md-4 one_third column_shortcode wow rotateInDownLeft">
                                                    <img src="img/img/mb0.png" alt="..." className="img-fluid" style={{ paddingBottom: "5%" }} />

                                                </div>

                                                <div className="col-md-4 one_third column_shortcode wow zoomIn">
                                                <img src="img/img/mb00.png" alt="..." className="img-fluid" style={{ paddingBottom: "5%" }} />

                                                </div>
                                                <div className="col-md-4 one_third last column_shortcode wow rotateInDownRight">
                                                <img src="img/img/mb000.png" alt="..." className="img-fluid" style={{ paddingBottom: "5%" }} />
                                                </div>



                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>

                </div>

  <div style={{paddingBottom:1}}>
            <section id="about" className="about">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3 bg-matisseG">
                            <div class="about-content-box wow fadeInUp" data-wow-delay="0.3s">
                             
                                <h5> Strategy & Consulting </h5>
                                
                            </div>
                        </div>
                        <div class="col-md-3 bg-starshipG">
                            <div class="about-content-box wow fadeInUp" data-wow-delay="0.5s">
                                <h5>Creative Web Design</h5>
                              
                            </div>
                        </div>
                        <div class="col-md-3 bg-chathamsG">
                            <div class="about-content-box wow fadeInUp" data-wow-delay="0.7s">
                                <h5>Responsive Websites</h5>
                             
                            </div>
                        </div>
                        <div class="col-md-3  bg-blurG">
                            <div class="about-content-box wow fadeInUp" data-wow-delay="0.7s">
                                <h5>Content Management System</h5>
                               
                            </div>
                        </div>


                        
                    </div>
                </div>
            </section>
            </div>


 <div className="text-center" >
                    <div style={{ backgroundColor: "#ffffff", paddingBottom: "5%", paddingTop: "2%" }}>
                       
                        <div className="row " style={{ paddingTop: "2%" }}  >
                            <div className="col-md-4 three_third wow fadeInLeft">
                                <div className="container-fluid  " style={{ backgroundColor: "#ffffff" }}  >
                                  
                                    <img src="img/img/1.png" alt="..." className="img-fluid" style={{ paddingBottom: "5%" }} />
                                    <br /><br />
                                  
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow fadeInDown">
                                <div className="container-fluid " style={{ backgroundColor: "#ffffff" }}  >
                                   
                                    <img src="img/img/2.jpg" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />

                                  
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow fadeInRight">
                                <div className="container-fluid  " style={{ backgroundColor: "#ffffff" }}  >
                                  
                                    <img src="img/img/3.png" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                                    <br />  <br />
                                    
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow fadeInLeft">
                                <div className="container-fluid  " style={{ backgroundColor: "#ffffff" }}  >
                                  
                                    <img src="img/img/4.png" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                                    <br /><br />
                                  
                                </div>
                            </div>
                            <br/><br/>
                            <div className="col-md-4 three_third wow fadeInUp" >
                                <div className="container-fluid " style={{ backgroundColor: "#ffffff" }}  >
                                   
                                    <img src="img/img/5.jpg" alt="..." className="img-fluid" style={{ paddingBottom: "5%" }} />

                                  
                                </div>
                            </div>
                            <div className="col-md-4 three_third wow fadeInRight">
                                <div className="container-fluid  " style={{ backgroundColor: "#ffffff" }}  >
                                  
                                    <img src="img/img/6.png" alt="..." className="img-fluid" style={{ paddingBottom: "5%" }} />
                                    <br />  <br />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>









            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Detail_service);