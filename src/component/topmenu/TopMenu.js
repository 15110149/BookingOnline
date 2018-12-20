import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class TopMenu extends Component {
    render() {
        return (
            // <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
                 <nav className="navbar navbar-expand-lg  navbar-light" id="mainNav" data-toggle="affix">
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
                                                <a className="nav-link smooth-scroll" href="index.html">Home</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link smooth-scroll" href="project.html">Project</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link smooth-scroll" href="services.html">Services</a>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <a className="nav-link smooth-scroll" href="about.html">About Us</a>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <a className="nav-link smooth-scroll" href="news-list.html">News</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link smooth-scroll" href="careers.html">Career</a>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <a className="nav-link smooth-scroll" href="contact.html">Contact Us</a>
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

            // </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(TopMenu);