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

class Header extends Component {
    render() {
        return (
            <div>
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
                <div>
                    <section id="login">
                        <div className="modal fade" id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{ display: 'none' }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header" align="center">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span className="fa fa-times" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div id="div-forms">
                                        <form id="login-form">
                                            <h3 className="text-center">Login</h3>
                                            <div className="modal-body">
                                                <label htmlFor="username">Username</label>
                                                <input id="login_username" className="form-control" type="text" placeholder="Enter username " required />
                                                <label htmlFor="username">Password</label>
                                                <input id="login_password" className="form-control" type="password" placeholder="Enter password" required />
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" /> Remember me
                  </label>
                                                </div>
                                            </div>
                                            <div className="modal-footer text-center">
                                                <div>
                                                    <button type="submit" className="btn btn-general btn-white">Login</button>
                                                </div>
                                                <div>
                                                    <button id="login_register_btn" type="button" className="btn btn-link">Register</button>
                                                </div>
                                            </div>
                                        </form>
                                        <form id="register-form" style={{ display: 'none' }}>
                                            <h3 className="text-center">Register</h3>
                                            <div className="modal-body">
                                                <label htmlFor="username">Username</label>
                                                <input id="register_username" className="form-control" type="text" placeholder="Enter username" required />
                                                <label htmlFor="register_email">E-mailId</label>
                                                <input id="register_email" className="form-control" type="text" placeholder="Enter eMail" required />
                                                <label htmlFor="register_password">Password</label>
                                                <input id="register_password" className="form-control" type="password" placeholder="Password" required />
                                            </div>
                                            <div className="modal-footer">
                                                <div>
                                                    <button type="submit" className="btn btn-general btn-white">Register</button>
                                                </div>
                                                <div>
                                                    <button id="register_login_btn" type="button" className="btn btn-link">Log In</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*====================================================
                 HOME-P
======================================================*/}
                    <div id="home-p" className="home-p pages-head1 text-center">
                        <div className="container">
                        <br/><br/><br/>
                            <h1 className="wow fadeInUp" data-wow-delay="0.1s">SUBMIT INFORMATION</h1>
                            <p></p>
                        </div>
                        {/*/end container*/}
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Header);