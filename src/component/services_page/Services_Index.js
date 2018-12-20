import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header_Services from '../header/Header_Services'
import Services_About from './Services_About'
import Financial_P1 from './Financial_P1';
import Form_Contact from '../form_contact/Form_Contact'
import Footer from '../footer/Footer'
import About_Topside from './About_Topside';
import Detail_service from './Detail_service';
function mapStateToProps(state) {
    return {

    };
}

class Services_Index extends Component {
    render() {
        return (
            window.scroll(0,0),
            <div>
                 <Header_Services/>
                 <Services_About/> 
                
                 <Detail_service/>
                 <About_Topside/>
                 <Financial_P1/>
                 {/* <Form_Contact/> */}
                
                 <Footer/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Services_Index);