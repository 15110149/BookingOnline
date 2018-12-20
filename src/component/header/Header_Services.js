import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Header_Services extends Component {
    render() {
        return (
            <div>
                <header>
                <nav className="navbar navbar-expand-lg navbar-light affix vesco-top-nav" id="mainNav" data-toggle="affix">
                        <div className="container  ">
                            <a className="navbar-brand smooth-scroll" href="index.html">
                                <img src="img/logoXsmall.png" alt="logo" width="70%" height="60%" />
                            </a>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse " id="navbarResponsive">

                                 <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                      <Link to="/" className="nav-link smooth-scroll" >Home</Link>

                    </li>
                    <li className="nav-item">
                      <Link to="/services" className="nav-link smooth-scroll" >Services</Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link to="/about" className="nav-link smooth-scroll" >About</Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link to="/news" className="nav-link smooth-scroll" >News</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link to="/career" className="nav-link smooth-scroll" >Career</Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link to="/contact" className="nav-link smooth-scroll" >Contact</Link>
                    </li>

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
                <div id="home-p" className="home-p pages-head2 text-center">
  <div className="container">
    <h1 className="wow fadeInUp" data-wow-delay="0.1s">Xtek is fully responsive and Clean</h1>
    <p>Our Services</p>
  </div>{/*/end container*/}
</div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Header_Services);