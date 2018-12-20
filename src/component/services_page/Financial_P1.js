import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function mapStateToProps(state) {
    return {

    };
}

class Financial_P1 extends Component {
    render() {
        return (
            <div>  
                    <section id="financial-p1" className="bg-parallax financial-p3-bg">
                        <div className="overlay-financial-p1" />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 financial-p1-pos">
                                    <div className="financial-p1-cont">
                                        <h3>Excellent Strategies For </h3>
                                        <p>Xtek will deliver value to all the stakeholders and will attain excellence and leadership through such delivery of value. We will strive to support the stakeholders in all activities related to us. Xtek provide great things.Everyone defines success differently – as much as there are people, there are different opinions. Number one in our priority list is the success of our students, alumni and their employers.</p>
                                        <button className="btn btn-general btn-white" role="button">
                                        <Link to="/contact" className="nav-link smooth-scroll" >Contact Us</Link>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-6 financial-p1-emp-img" />
                            </div>
                        </div>
                    </section>
                    <section id="financial-p1" className="bg-parallax financial-p2-bg">
                        <div className="overlay-financial-p1" />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 financial-p1-emp-img" />
                                <div className="col-md-6 financial-p1-pos financial-p1-emp-desc-d">
                                    <div className="financial-p1-cont">
                                        <h3>Transfer Financial Services</h3>
                                        <p>Xtek will deliver value to all the stakeholders and will attain excellence and leadership through such delivery of value. We will strive to support the stakeholders in all activities related to us. Xtek provide great things.Everyone defines success differently – as much as there are people, there are different opinions. Number one in our priority list is the success of our students, alumni and their employers.</p>
                                        <button className="btn btn-general btn-white" role="button">
                                        <Link to="/contact" className="nav-link smooth-scroll" >Contact Us</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                  

                </div>

        );
    }
}

export default connect(
    mapStateToProps,
)(Financial_P1);