import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function mapStateToProps(state) {
    return {

    };
}

class News_P1 extends Component {
    render() {
        return (
            <div>
                <div className="single-news-p1-cont" style={{ marginBottom: 30, marginRight: 50,boxShadow: '1px 1px 1px rgba(0,0,0,0.1)' }}>
                    <div className="single-news-img">
                        <img src={this.props.NewsImg} alt className="img-fluid" />
                    </div>
                    <div className="single-news-desc m-0 pt-1 pb-0 px-0">
                        <h3>{this.props.NewsTittle}</h3>
                        <hr />
                        <div className="bg-light-gray">
                            <p>
                               {this.props.Content}
                            </p>
                            <Link to ={this.props.LinkNew} className="mb-2">Read More
                            <i className="fa fa-long-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(News_P1);