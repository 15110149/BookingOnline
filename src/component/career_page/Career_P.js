import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Career_P extends Component {
    render() {
        return (
            <div>
                <section id="about" className="career-p1 about">
  <div className="container">
    <div className="row title-bar">
      <div className="col-md-12">
        <h1 className="wow fadeInUp">Come work with Xtek family</h1>
        <div className="heading-border" />
        <p className="wow fadeInUp" data-wow-delay="0.4s">
          We are a bunch of people who embody the united spirit of our Team Adventure.
          At Xtek, we work hard to recruit the very best talent to join our team. As the market leader and innovator of technical content solutions, our goal is to remain at the forefront of our industry by offering high-quality services delivered by our experienced, dedicated, and talented team of employees.
        </p>
        <div className="row wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
          <div className="col-md-4 col-sm-6 service-padding">
            <div className="service-item">
              <div className="service-item-icon"> <i className="fa fa-cog fa-spin fa-3x" />
              </div>
              <div className="service-item-title">
                <h3>Funny</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 service-padding">
            <div className="service-item">
              <div className="service-item-icon"> <i className="fa fa-modx fa-spin fa-3x" />
              </div>
              <div className="service-item-title">
                <h3>Creative</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 service-padding">
            <div className="service-item right-bord">
              <div className="service-item-icon"> <i className="fa fa-superpowers fa-spin fa-3x" />
              </div>
              <div className="service-item-title">
                <h3>Enthusiastic</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row"> 
        <div className="col-md-6">
          <div className="career-p1-himg">
            <img src="img/image-4.jpg" className="img-fluid wow fadeInUp" data-wow-delay="0.1s" alt />
          </div>
        </div>
        <div className="col-md-6">
          <div className="career-p1-desc">
            <h4>We Make from the Best</h4>
            <div className="heading-border-light" />
            <p>We are a bunch of people who embody the united spirit of our Team Adventure. While you are working your hardest on opportunities that will define your career, Businessbox makes sure your environment provides for you</p> 
            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years.</p>
            <ul>
              <li><i className="fa fa-arrow-circle-o-right" /> Champion the Mission.</li>
              <li><i className="fa fa-arrow-circle-o-right" /> Great Career Options.</li>
              <li><i className="fa fa-arrow-circle-o-right" /> Full flexiblity of life.</li> 
            </ul>
          </div>
        </div>  
      </div>
    </div> 
  </div></section>
  <div>
  <div className="overlay-career-p2" />
  <section id="thought" className="bg-parallax career-p2-bg">
    <div className="container">
      <div id="row" className="row title-bar-career-p2 ">
        <div className="col-md-4 ">
          <h1>100%</h1>
        </div>  
        <div className="col-md-8 ">
          <p className="wow fadeInUp " data-wow-delay="0.4s">Xtek will deliver value to all the stakeholders and will attain excellence and leadership through such delivery of value. We will strive to support the stakeholders in all activities related to us.</p>
        </div> 
      </div>
    </div>         
  </section>
</div>
<div>
  <div className="overlay-career-p3" />
  <section id="career-p3">
    <div className="container-fluide">
      <div className="row career-p3-title">
        <div className="col-md-12">
          <h3 className="text-center">Xtek's Process</h3>
        </div> 
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="career-p3-cont text-center">
            <i className="fa fa-superpowers" />
            <h5>Plan</h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="career-p3-cont text-center">
            <i className="fa fa-snowflake-o" />
            <h5>Team Building</h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="career-p3-cont text-center">
            <i className="fa fa-send-o" />
            <h5>Travel</h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="career-p3-cont text-center">
            <i className="fa fa-sun-o" />
            <h5>Charity</h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="career-p3-cont text-center">
            <i className="fa fa-crosshairs" />
            <h5>Football</h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="career-p3-cont text-center">
            <i className="fa fa-gift" />
            <h5>Seminars</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Career_P);