import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopMenu from '../topmenu/TopMenu';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Index from '../home_page/Index';
import Services_Index from '../services_page/Services_Index';
import About_Index from '../about_page/About_Index'
import News_Index from '../news_page/News_Index';
import Career_Index from '../career_page/Career_Index';
import Contact_Index from '../contact_page/Contact_Index';
function mapStateToProps(state) {
  return {

  };
}

class Header_Home extends Component {
  render() {
    return (
      <body id="page-top">
      <section id="home">

        <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
          <header> 
          <nav className="navbar navbar-expand-lg navbar-light affix vesco-top-nav" id="mainNav" data-toggle="affix">
              <div className="container  ">
                <a className="navbar-brand smooth-scroll" >
                  <img src="img/logoH.png" alt="logo" width="60%" height="50%" />
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarResponsive" >



                  <ul className="navbar-nav ml-auto " >
                    <li className="nav-item">
                      <Link to="/" className="nav-link smooth-scroll" >Home</Link>

                    </li>
                    <li className="nav-item">
                      <Link to="/services" className="nav-link smooth-scroll" >Services</Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link to="/about" className="nav-link smooth-scroll" >About Us</Link>
                    </li>

                    {/* <li className="nav-item dropdown">
                      <Link to="/news" className="nav-link smooth-scroll" >News</Link>
                    </li> */}
                    {/* <li className="nav-item dropdown">
                      <Link to="/career" className="nav-link smooth-scroll" >Career</Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link to="/contact" className="nav-link smooth-scroll" >Contact Us</Link>
                    </li> */}

                    <li>
                      <div className="top-menubar-nav">
                        <div className="topmenu ">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-9">
                                <ul className="list-inline top-contacts">
                                  <li>
                                    <i className="fa fa-envelope" /> Email:
                                        <a href="mailto:info@htmlstream.com">Contact@xtek.asia</a>
                                  </li>
                                  <li>
                                    <i className="fa fa-phone" /> Hotline: (+84) 93 905 3790
                                      </li>
                                </ul>
                              </div>
                              <div className="col-md-3">
                                <ul className="list-inline top-data">
                                  <li>
                                    <a href="#" target="_empty">
                                      <i className="fa top-social fa-facebook" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target="_empty">
                                      <i className="fa top-social fa-twitter" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" target="_empty">
                                      <i className="fa top-social fa-google-plus" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#" className="log-top" data-toggle="modal" data-target="#login-modal">Login</a>
                                  </li>
                                </ul>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          {/*====================================================
                             HOME
          ======================================================*/}

          <div className="carousel-inner">
            <div className="carousel-item active slides">
              <div className="overlay" />
              <div className="slide-1" />
              <div className="hero ">
                <hgroup className="wow fadeInUp">
                  <h1>Welcome to 
                        <span>
                      <a href className="typewrite" data-period={2000} data-type="[&quot;  Royal Hotel&quot;]">
                        <span className="wrap" />
                      </a>
                    </span>
                  </h1>
                  <h3>  Every Room A Home<br /> Let's us connect to you</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="list-inline top-contacts">
                      <li>
                          <i className="fa fas fa-map-signs" /> Address: 01 Vo Van Ngan Road, Thu Duc, TPHCM
                        </li>
                        <li>
                          <i className="fa fa-envelope" /> Email:
                              <a href="mailto:info@htmlstream.com" style={{color : 'rgb(243, 181, 9)'}} >RoyalHotel@gmail.com</a>
                        </li>
                        <li>
                          <i className="fa fa-phone" /> Hotline: (+84) 0800808088
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </hgroup>
              </div>
            </div>
          </div>
        </div>
      </section>
</body>
    );
  }
}

export default connect(mapStateToProps)(Header_Home);