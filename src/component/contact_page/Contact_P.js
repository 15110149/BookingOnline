import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from './Map';

function mapStateToProps(state) {
    return {

    };
}

class Contact_P extends Component {
    render() {
        return (
            <div>
                <section id="contact-p1" className="contact-p1">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="contact-p1-cont">
          <h3>Contact our experienced team</h3>
          <div className="heading-border-light" /> 
          <p>
          </p><div>
            We understand the importance of communication with our clients and therefore schedule meetings regularly to remain fully aligned with you throughout all phases of a project. We envisage a close collaboration with you and consider this to be essential for each project.
            The project team ensures progress of planned activities, mitigates risks and pro-actively manages critical activities. Key is to successfully deliver contracted deliverables within budget and time.
          </div>
          <p />
        </div>
      </div>
      <div className="col-md-4"> 
        <div className="contact-p1-cont2"> 
          <address className="address-details-f">
            33/22 Ly Van Phuc street, Tan Dinh ward, District 1, HCM City, VietNam <br />           
            Phone: (+84) 93 905 3790 <br />
            Email: <a href="mailto:Contact@xtek.asia" className>David@xtek.asia</a>
          </address>
          <ul className="list-inline social-icon-f top-data">
            <li><a href="https://www.facebook.com/xtek.asia/" target="_empty"><i className="fa top-social fa-facebook"  /></a></li>
            <li><a href="#" target="_empty"><i className="fa top-social fa-twitter"/></a></li>
            <li><a href="#" target="_empty"><i className="fa top-social fa-google-plus"  /></a></li> 
          </ul>
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
)(Contact_P);