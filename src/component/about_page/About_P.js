import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class About_P extends Component {
  render() {
    return (
   
      <div>
        {/* ==========================================P1===================================================== */}
        <section id="about-p1">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="about-p1-cont">
                  <h1>Tech to Us <br />is your best choice </h1>
                  <div>
                    <p>Tech to Us provides industry-leading technical support services to home customers and fully managed IT services to businesses clients. All our techs are experienced, friendly, professional and based in the US. Our goal is to provide you with quick and efficient solutions to all of your technology problems whatever they may be. We’ve worked with thousands of happy customers over the years and even include a 100% money back guarantee for all of our home support plans.</p>
                    <p> With Tech to Us, you’ll never have to worry about diagnostic fees, labor fees, additional fees or hidden fees of any kind. We charge a flat monthly or annual rate so that you’re never left wondering.</p>
                    <p> No matter what your technology needs are, we can provide you with a fast and friendly answer. Collectively, our team is able to handle a very wide array of tech issues. Our experienced team helps both home users and businesses achieve a new level of tech support. Tech to Us is the reliable, friendly and highly experienced way to solve ALL of your technology problems! Our home support plans are backed by our money back guarantee. Contact us today!</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="about-p1-img">
                  <img src="img/logoXbig.png" className="img-fluid wow fadeInUp" data-wow-delay="0.1s" alt="..." />
                </div>
                <p>
                </p><address className="address-details-f-about">
                  33/2 Dang Tat street, Tan Dinh ward, Distric 1, HCMC
          <br /> Phone: (+84) 93 905 3790
          <br /> Email:
          <a href="mailto:info@Businessbox.com" className>Xtek@asia.com</a>
                </address>
                <p />
              </div>
            </div>
          </div>
        </section>
        {/* =============================================P2============================================================== */}
        <section className="about-p2 bg-gradiant">
          <div className="container-fluid">
            <div className="row">
              <div className="about-p2-heading">
                <h1 className="cl-white">Xtek Official</h1>
                <div className="heading-border-light bg-white" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="about-p2-cont cl-white">
                  <img src="img/vp" className="img-fluid wow fadeInUp " data-wow-delay="0.1s" alt="..." height="200px" width="300px" />
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="about-p2-cont cl-white">
                  <img src="img/vp4.jpg" className="img-fluid wow fadeInUp " data-wow-delay="0.1s" alt="..." height="200px" width="300px" />
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="about-p2-cont cl-white">
                  <img src="img/vp1.jpg" className="img-fluid wow fadeInUp " data-wow-delay="0.1s" alt="..." height="200px" width="300px" />
           </div>
           </div>
           </div>
           </div>
</section>

            {/* =============================================P3============================================================== */}
            <section id="story" className="about-p3">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="story-desc">
                      <h3>Environmental and Experience</h3>
                      <div className="heading-border-light" />
                      <p>Number one in our priority list is the success of our students, alumni and their employers. We work
                        hard in the name of the success of our alumni – being among the best and holding the high employment
                        rate. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          </p>
                      <p> Various versions have evolved over the years, sometimes will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="story-himg">
                      <img src="img/img/image-3.jpg" className="img-fluid wow fadeInUp" data-wow-delay="0.1s" alt />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="container ">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="story-himg story-himg-middle-u">
                      <img src="img/img/image-2.jpg" className="img-fluid wow fadeInUp" data-wow-delay="0.1s" alt />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="story-desc story-desc-middle ">
                      <h3>Information Architecture</h3>
                      <div className="heading-border-light" />
                      <p>Number one in our priority list is the success of our students, alumni and their employers. We work
                        hard in the name of the success of our alumni – being among the best and holding the high employment
                        rate. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          </p>
                      <p> Various versions have evolved over the years, sometimes will uncover many web sites still in their
                          infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="story-himg story-himg-middle-l">
                      <img src="img/img/image-2.jpg" className="img-fluid" alt />
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <div className="story-himg">
                      <img src="img/img/image-1.jpg" className="img-fluid wow fadeInUp" data-wow-delay="0.1s" alt />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="story-desc">
                      <h3>Brand Positioning &amp; Publishing</h3>
                      <div className="heading-border-light" />
                      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                        text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                        versions have evolved over the years, sometimes will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
            humour and the like).</p>
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
)(About_P);