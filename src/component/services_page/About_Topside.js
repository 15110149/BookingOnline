import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class About_Topside extends Component {
    render() {
        return (
            <div style={{paddingBottom:1}}>
            <section id="about" className="about">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3 bg-starship">
                            <div class="about-content-box wow fadeInUp" data-wow-delay="0.3s">
                                <i class="fa fa-android fa-2x"></i>
                                <h5>Android</h5>
                                <p class="desc">Be Together, Not The Same</p>
                            </div>
                        </div>
                        <div class="col-md-3 bg-chathams">
                            <div class="about-content-box wow fadeInUp" data-wow-delay="0.5s">
                                <i class="fa fa-apple fa-2x"></i>
                                <h5>IOS</h5>
                                <p class="desc">Think Different</p>
                            </div>
                        </div>
                        <div class="col-md-3 bg-matisse">
                            <div class="about-content-box wow fadeInUp" data-wow-delay="0.7s">
                                <i class="fa fa-windows fa-2x"></i>
                                <h5>Window</h5>
                                <p class="desc">Your potential. Our passion</p>
                            </div>
                        </div>
                        <div class="col-md-3 bg-blur">
                            <div class="about-content-box wow fadeInUp" data-wow-delay="0.7s">
                                <i class="fa fa-linux fa-2x"></i>
                                <h5>Linux</h5>
                                <p class="desc">Power the world</p>
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
)(About_Topside);