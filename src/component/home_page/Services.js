import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function mapStateToProps(state) {
    return {

    };
}

class Services extends Component {
    render() {
        return (
          <div>
          <div className="text-center" >
          <div style={{ backgroundColor: "#fdf8c0c4", paddingBottom: "5%", paddingTop: "2%" }}>
              <h1 className="heading heading-line " >
                  <span  ><strong>STAY WITH US</strong></span>
              </h1>
              <div className="row " style={{ paddingTop: "2%" }}  >
                  <div className="col-md-4 three_third wow slideInUp">
                      <h2 className="bgtop" style={{ height: 15 }} />
                      <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                          <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10, color: "#000000" }}>
                              <strong>
                              Feature Room
                              </strong>
                          </h2>
                          <img src="img/img/r1.jpg" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                         
                          <details>
                              <summary className="fa fa-play"> Read More </summary>
                              <nav>

                                  {/* <img src="img/img/simplicity.png" alt="..." className="img-fluid"  style={{ paddingBottom: "10%" }}/> */}
                                  <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                  Some of the finest accommodation in Deal, our feature rooms are the perfect place to unwind - featuring luxurious design, supreme comfort and fantastic sea views from their private balconies.<br />  <br />
                                  </p>
                              </nav>

                          </details>
                      </div>
                  </div>
                  <div className="col-md-4 three_third wow slideInUp">
                      <h2 className="bgtop" style={{ height: 15 }} />
                      <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                          <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10, color: "#000000" }}>
                              <strong>
                              Superior Double or Twin
         </strong>
                          </h2>
                          <img src="img/img/r2.jpg" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />

                          <details>
                              <summary className="fa fa-play"> Read More </summary>
                              <nav>
                                  {/* <img src="img/img/simplicity.png" alt="..." className="img-fluid"  style={{ paddingBottom: "10%" }}/> */}
                                  <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                  Our spacious superior double and twin rooms are a haven for quality and comfort, ensuring your stay in Deal will be everything you dreamed of - with stylish cream décor and warm fabric accents offering understated refinement.</p>
                              </nav>
                          </details>
                      </div>
                  </div>
                  <div className="col-md-4 three_third wow slideInUp">
                      <h2 className="bgtop" style={{ height: 15 }} />
                      <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                          <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10, color: "#000000" }}>
                              <strong>
                              Double/Twin Room
         </strong>
                          </h2>
                          <img src="img/img/r3.jpg" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                          
                          <details>
                              <summary className="fa fa-play"> Read More </summary>
                              <nav>
                                  {/* <img src="img/img/r3.jpg" alt="..." className="img-fluid"  style={{ paddingBottom: "10%" }}/> */}
                                  <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                  Decorated in soft, relaxing shades and complemented by subtle furnishings, each of our standard double / twin rooms offer high quality facilities helping to make your stay ideal in every way.</p>
                              </nav>
                          </details>
                      </div>
                  </div>
              </div>
          </div>
      </div>




 <div className="text-center" >
          <div style={{ backgroundColor: "#fdf8c0c4", paddingBottom: "5%", paddingTop: "2%" }}>
                           <div className="row " style={{ paddingTop: "2%" }}  >
                  <div className="col-md-4 three_third wow slideInUp">
                      <h2 className="bgtop" style={{ height: 15 }} />
                      <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                          <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10, color: "#000000" }}>
                              <strong>
                              Family Rooms
                              </strong>
                          </h2>
                          <img src="img/img/r4.jpg" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />
                         
                          <details>
                              <summary className="fa fa-play"> Read More </summary>
                              <nav>

                                  {/* <img src="img/img/simplicity.png" alt="..." className="img-fluid"  style={{ paddingBottom: "10%" }}/> */}
                                  <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                  Here at the Royal Hotel we like to pride ourselves as being a haven for quality and comfort and we are well equipped to cater for families too, with a selection of family rooms sleeping 2 adults and up to 3 children.
                                  </p>
                              </nav>

                          </details>
                      </div>
                  </div>
                  <div className="col-md-4 three_third wow slideInUp">
                      <h2 className="bgtop" style={{ height: 15 }} />
                      <div className="container-fluid desc-comp-offer-cont " style={{ backgroundColor: "#ffffff" }}  >
                          <h2 style={{ fontSize: 18, textAlign: "center", marginTop: 10, color: "#000000" }}>
                              <strong>
                              Single Rooms
         </strong>
                          </h2>
                          <img src="img/img/r5.jpg" alt="..." className="img-fluid" style={{ paddingBottom: "10%" }} />

                          <details>
                              <summary className="fa fa-play"> Read More </summary>
                              <nav>
                                  {/* <img src="img/img/simplicity.png" alt="..." className="img-fluid"  style={{ paddingBottom: "10%" }}/> */}
                                  <p style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
                                  Decorated in natural tones, our single rooms offer total relaxation in stylish surroundings, complete with a full range of quality facilities.</p>
                              </nav>
                          </details>
                      </div>
                  </div>
                  
              </div>
          </div>
      </div>
      </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Services);