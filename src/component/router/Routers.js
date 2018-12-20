import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link,Switch  } from 'react-router-dom'
import Index from '../home_page/Index';
import About_Index from '../about_page/About_Index';
function mapStateToProps(state) {
    return {

    };
}

class Routers extends Component {
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Routers);