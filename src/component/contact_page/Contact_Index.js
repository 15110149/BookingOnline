import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../contact_page/Header';
import Contact_P from './Contact_P';
import Form_Contact from '../form_contact/Form_Contact';
import Map from './Map'
import Footer from '../footer/Footer';
function mapStateToProps(state) {
    return {

    };
}

class Contact_Index extends Component {
    render() {
        return (
            window.scrollTo(0, 0),
            <div>            
                <Header/>
                <Contact_P/>
                <Form_Contact/>
                <Map/>
                <Footer/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Contact_Index);