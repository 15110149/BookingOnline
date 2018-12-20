import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class About_Topside extends Component {
    render() {
        return (
            <section id="about" className="about">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4 bg-starship">
                            <div class="about-content-box wow zoomIn" data-wow-delay="0.3s">
                                <i class="	fa fa-eye fa-2x"></i>
                                {/* <h5>Android</h5> */}
                                <h5>Royal's Vision</h5>
                                <p class="desc">
                                "Every Room A Home"
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 bg-chathams">
                            <div class="about-content-box wow zoomIn" data-wow-delay="0.5s">
                                <i class="fa fa-ge fa-2x"></i>
                                <h5>Royal's Mission </h5>
                                <p class="desc">
                                It is working All Together, our Honour to serve you in every Opportunity because every Moment of Truth with you counts for us to live up to your Expectation."
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 bg-matisse">
                            <div class="about-content-box wow zoomIn" data-wow-delay="0.7s">
                                <i class="fa fa-diamond fa-2x"></i>
                                <h5>Core Values</h5>
                                <p class="desc">
                                Integrity, credibility, quality, efficiency, and sharing success. Dedicated commitment to customers. Always improving and growing day by day
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(
    mapStateToProps,
)(About_Topside);