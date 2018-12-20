import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function mapStateToProps(state) {
    return {

    };
}

class News_Small extends Component {
    render() {
        return (
            <div>
                <Link to={this.props.LinkN}>
                    <div className="right-side-sn-cont">
                        <img src={this.props.NS_Img} alt className="img-fluid" />
                        <p>{this.props.NS_Tittle}</p>
                        <small>
                            <fa className="fa-watch"> {this.props.NS_Day}</fa>
                        </small>
                    </div>
                </Link>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(News_Small);