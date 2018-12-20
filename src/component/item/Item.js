import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* <div className="col-md-12"> 
                                <div className="col-md-4 col-sm-6 service-padding">
                                    <div className="service-item">
                                        <div className="service-item-icon">
                                         <i className={this.props.Icon} />
                                        </div>
                                        <div className="service-item-title">
                                            <h3>{this.props.Tittle}</h3>
                                        </div>
                                        <div className="service-item-desc">
                                            <p>{this.props.Detail}</p>
                                            <div className="content-title-underline-light" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                {/* <section id="career-p3">
                    <div className="container-fluide">
                        <div className="row career-p3-title">

                        </div>

                        <div className="career-p3-cont text-center">
                            <i className={this.props.Icon} />
                            <h5>{this.props.Tittle}</h5>
                            <div className="service-item-desc">
                                <p>{this.props.Detail}</p>
                                <div className="content-title-underline-light" />
                            </div>





                        </div>
                    </div>
                </section> */}





            </div>

        );
    }
}

export default connect(
    mapStateToProps,
)(Item);