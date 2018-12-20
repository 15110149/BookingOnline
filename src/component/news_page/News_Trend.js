import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class News_Trend extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="desc-comp-offer-cont">
                        <div className="thumbnail-blogs">
                            <div className="caption">
                                <i className="fa fa-chain" />
                            </div>
                            <img src={this.props.Trend_Img} className="img-fluid" alt="..." />
                        </div>
                        <h3>{this.props.Trend_tittle}</h3>
                        <p className="desc">
                           {this.props.Desc}
                        </p>
                        <a href={this.props.Trend_Link}>
                            <i className="fa fa-arrow-circle-o-right" /> Learn More</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(News_Trend);