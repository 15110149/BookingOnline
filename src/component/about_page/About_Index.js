import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header'
import About_P from './About_P';
import Form_Contact from '../form_contact/Form_Contact';
import Footer from '../footer/Footer';
function mapStateToProps(state) {
    return {

    };
}

class About_Index extends Component {
    render() {
        return (
            window.scroll(0,0),
            <div>
                <Header/>
                <About_P/>
                {/* <Form_Contact/> */}
                <Footer/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(About_Index);