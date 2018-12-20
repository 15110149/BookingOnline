import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Service_Home extends Component {
    render() {
        return (
          <section id="business-growth-p1" className="business-growth-p1 bg-gray">
          <div className="container">
            <div className="row title-bar">
              <div className="col-md-12">
                <h1 className="wow fadeInUp"> Royal Hotel</h1>
                <div className="heading-border" />
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  <img src="img/logoRH.jpg" alt="logo" width="30%" height="40%" className="img-left" /> 
                  Regally positioned on the seafront in Deal, The Royal Hotel combines charming period features with stunning contemporary comfort, making it the perfect destination for a seaside escape. 

Whether it’s a romantic break, a family holiday or a business trip that brings you to the Kent coast, The Royal promises a stay you won’t forget - with spectacular views, luxurious accommodation and exceptional food and drink.

Indeed, this picturesque, early 18th century Georgian hotel is a special place not only to stay, but also to dine. 

Our Boathouse bar and terrace invites you to take in glorious sea views and enjoy a range of tempting dishes crafted from the finest locally sourced ingredients - while The Quarterdeck restaurant specialises in fresh seafood from the surrounding shores. 

Menus are complemented by an extensive range of both local and international wines, and beers brewed just a few miles away by Britain’s oldest brewer, Shepherd Neame.

History and heritage isn’t just confined to our ales though. From the moment you set foot in The Royal Hotel, Deal’s rich naval history echoes throughout, reflected in the traditional style of the bar and the attractive themed décor of the bedrooms.

Frequently visited by Lord Nelson and Lady Hamilton in years gone by, the hotel has long lived up to the town’s ‘Befriend a stranger’ motto - and we look forward to extending a warm welcome your way soon.
                </p>        
              </div>   
             </div>
             <section id="career-p3">
  <div className="container-fluide">
    <div className="row career-p3-title">
      <div className="col-md-12">
        <h3 className="text-center">UTILITIES</h3>
      </div> 
    </div>
    <div className="row">   
      <div className="col-md-4 col-sm-6 wow rotateInDownRight">
        <div className="career-p3-cont text-center">
          <i className="fa fa-laptop fa-3x" />
          <h5>DEVICES</h5>
        </div>
      </div>
 
      <div className="col-md-4 col-sm-6  wow rotateInUpLeft">
        <div className="career-p3-cont text-center">
          <i className="fa fas fa-taxi  fa-3x" />
          <h5>VEHICLE</h5>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 wow rotateInDownLeft">
        <div className="career-p3-cont text-center">
          <i className="fa fas fa-music  fa-3x" />
          <h5>ENTERTAINMENT</h5>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 wow rotateInDownRight">
        <div className="career-p3-cont text-center">
          <i className="fa fab fa-envira fa-3x" />
          <h5>CLEANING</h5>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 wow  rotateInUpRight">
        <div className="career-p3-cont text-center">
          <i className="fa fas fa-coffee fa-3x" />
          <h5>FOOD & DRINK</h5>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 wow rotateInDownLeft">
        <div className="career-p3-cont text-center">
          <i className="fa fas fa-paw fa-3x" />
          <h5>PET CARE</h5>
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

export default connect(
    mapStateToProps,
)(Service_Home);