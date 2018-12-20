import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel2'
import '../../../node_modules/react-owl-carousel2/lib/OwlCarousel'
import '../../../node_modules/react-owl-carousel2/src/owl.carousel'

function mapStateToProps(state) {
  return {

  };
}
class Company_thought extends Component {
  render() {
    return (


      <div>
        <div className="overlay-thought" />
        <section id="thought" className="bg-parallax thought-bg">
          <div className="container">
            <div id="thought-desc" className="row title-bar title-bar-thought owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-2220px, 0px, 0px)', transition: '0.7s', width: 7770 }}><div className="owl-item cloned" style={{ width: 1110 }}><div className="col-md-12 thought-desc">
                <p className="wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                  <img src="img/microsoft-logo.png" alt="logo" width="50px" height="100px" /> We all need people who will give us feedback. That's how we improve.
              </p>
                <h6>Bill Gates</h6>
              </div>
              </div>
                <div className="owl-item cloned" style={{ width: 1110 }}><div className="col-md-12 thought-desc">
                  <p className="wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                    <img src="img/facebook-logo.png" alt="logo" width="50px" height="100px" /> The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is
                    guaranteed to fail is not taking risks.
              </p>
                  <h6 className="color-blue">Mark Zuckerberg</h6>
                </div></div>
                <div className="owl-item active" style={{ width: 1000 }}><div className="col-md-12 ">
                  <p className="wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                    <img src="img/logoXsmall.png" alt="logo" width="60px" height="120px" /> We do everything in technique for your successful business
                   </p>
                  <h6 className="color-green">Pham Vi</h6>
                </div></div><div className="owl-item" style={{ width: 1110 }}><div className="col-md-12 thought-desc" style ={{paddingRight:300}}>
                  <p className="wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                    <img src="img/microsoft-logo.png" alt="logo" width="80%" height="100px" /> We all need people who will give us feedback. That's how we improve.
              </p>
                  <h6>Bill Gates</h6>
                </div></div><div className="owl-item" style={{ width: 1110 }}><div className="col-md-12 thought-desc">
                  <p className="wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                    <img src="img/facebook-logo.png" alt="logo" width="50px" height="100px" /> The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is
                    guaranteed to fail is not taking risks.
              </p>
                  <h6 className="color-blue">Mark Zuckerberg</h6>
                </div></div><div className="owl-item cloned" style={{ width: 1110 }}><div className="col-md-12 ">
                  <p className="wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                    <img src="img/logoXsmall.png" alt="logo" width="60px" height="120px" /> We do everything in technique for your successful business
              </p>
                  <h6 className="color-green">Pham Vi</h6>
                </div></div>
                
                <div className="owl-item cloned" style={{ width: 1110 }}><div className="col-md-12 thought-desc">
                  <p className="wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                    <img src="img/microsoft-logo.png" alt="logo" width="50px" height="100px" /> We all need people who will give us feedback. That's how we improve.
                  </p>
                  <h6>Bill Gates</h6>
                </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev">prev</div><div className="owl-next">next</div></div><div className="owl-dots"><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div></div></div>
                </div>
                
        </section>

      </div>



    );
  }
}

export default connect(
  mapStateToProps,
)(Company_thought);