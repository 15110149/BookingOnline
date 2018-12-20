import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
  <div id="footer-s1" className="footer-s1">
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 ">
            <div>
              <img src="img/logoRH.jpg" alt className="img-fluid " width="100%" height="150%" />
            </div>
          
            <br />
          </div>
          {/* End About Us */}
          {/* Recent News */}
          <div className="col-md-3 col-sm-6 ">
            <div className="heading-footer">
              <h2>USEFUL LINKS</h2>
            </div>
            <ul className="list-unstyled link-list">
              <li>
                <a href="about.html">Home</a>
                <i className="fa fa-angle-right" />
              </li>
              <li>
                <a href="project.html">Services</a>
                <i className="fa fa-angle-right" />
              </li>
              <li>
                <a href="careers.html">AboutUs</a>
                <i className="fa fa-angle-right" />
              </li>
           
            </ul>
          </div>
          {/* End Recent list */}
          {/* Recent Blog Entries */}
         
          {/* End Recent Blog Entries */}
          {/* Latest Tweets */}
          <div className="col-md-3 col-sm-6">
            <div className="heading-footer">
              <h2>GET IN TOUCH</h2>
            </div>
            <address className="address-details-f">
              01 Vo Van Ngan street, Thu Duc Distric, HCMC
              <br /> Phone: (+84) 0800808088
              <br /> Email:
              <a href="mailto:info@Businessbox.com" className>ROYALHOTEL@GMAIL.COM</a>
            </address>
            <ul className="list-inline social-icon-f top-data">
              <li>
                <a href="https://www.facebook.com/xtek.asia/" target="_empty">
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
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 ">
            <div>
              <img src="img/logoH.png" alt className="img-fluid " width="100%" height="150%" />
            </div>
          
            <br />
          </div>
          {/* End Latest Tweets */}
        </div>
      </div>
      
      {/*/container */}
    </div>
  </div>
  <div id="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="footer-copyrights">
            <p>Copyrights © 2018 All Rights Reserved by PHIVAN-TRINHA.
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Services</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a href="#home" id="back-to-top" className="btn btn-sm btn-green btn-back-to-top smooth-scrolls hidden-sm hidden-xs" title="home" role="button">
    <i className="fa fa-angle-up" />
  </a>
</footer>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Footer);