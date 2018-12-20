import React, { Component } from 'react';
import Data from './../../Data.json'
import Item from '../item/Item';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class Services_About extends Component {
    render() {
        return (
            <section id="business-growth-p1" className="business-growth-p1 bg-gray">
            <div className="container">
              <div className="row title-bar">
                <div className="col-md-12">
                  <h1 className="wow fadeInUp">Xtek's Services</h1>
                  <div className="heading-border" />
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    <img src="img/logoXbig.png" alt="logo" width="70px" height="80px" className="img-left" /> 
                    Is your application portfolio optimized to deliver real business value? At Xtek, we continuously improve and transform our customer’s applications to ensure they are optimized for today and adaptable for the business needs of tomorrow. We understand that business applications must be deployed or upgraded quickly, securely, efficiently and at the lowest possible cost. We also understand the need to better control and reduce expenses in running application portfolios. 
                    Xtek’s portfolio stretches from application development and integration to application management and outsourcing, and fully integrates emerging delivery models like Software as a Service.
                  </p>        
                </div>   
               </div>
               <section id="career-p3">
    <div className="container-fluide">
      <div className="row career-p3-title">
        <div className="col-md-12">
          <h3 className="text-center">Xtek's Services</h3>
        </div> 
      </div>
      <div className="row">   
        <div className="col-md-4 col-sm-6 wow rotateInDownRight">
          <div className="career-p3-cont text-center">
            <i className="fa fa-laptop fa-3x" />
            <h5>Web Application</h5>
          </div>
        </div>
   
        <div className="col-md-4 col-sm-6  wow rotateInUpLeft">
          <div className="career-p3-cont text-center">
            <i className="fa fa-android  fa-3x" />
            <h5>Mobile Apps</h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 wow rotateInDownLeft">
          <div className="career-p3-cont text-center">
            <i className="fa fa-envira  fa-3x" />
            <h5>Design</h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 wow rotateInDownRight">
          <div className="career-p3-cont text-center">
            <i className="fa fa-pagelines fa-3x" />
            <h5>Build Start-up Products</h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 wow  rotateInUpRight">
          <div className="career-p3-cont text-center">
            <i className="fa fa-group fa-3x" />
            <h5>Start-up <br/>Supporting</h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 wow rotateInDownLeft">
          <div className="career-p3-cont text-center">
            <i className="fa fa-lightbulb-o fa-3x" />
            <h5>Technology solutions</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
         </div>                 
            </section>
        );
    }
}

export default Services_About;