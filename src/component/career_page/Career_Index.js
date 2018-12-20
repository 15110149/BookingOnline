import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../career_page/Header';
import Career_P from './Career_P';
import Form_Contact from '../form_contact/Form_Contact';
import Footer from '../footer/Footer';

function mapStateToProps(state) {
    return {

    };
}

class Career_Index extends Component {
    render() {
        return (
            window.scroll(0,0),
            <div>
            <Header/>
            <Career_P/>
            {/* <Form_Contact/> */}
            <Footer/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Career_Index);