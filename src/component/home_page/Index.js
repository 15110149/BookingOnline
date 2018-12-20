import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store/Store';
import Header_Home from '../header/Header_Home'
import About_Top from './About_Top'
import About_Topside from './About_Topside'
import Story from './Story'
import Company_thought from './Company_thought'
import Service_Home from './Service_Home'
import Client from './Client'
import Form_Contact from '../form_contact/Form_Contact'
import News from './News'
import Footer from '../footer/Footer';
import Services from './Services';
function mapStateToProps(state) {
    return {

    };
}

class Index extends Component {
    render() {
        return (
            window.scroll(0,0),
            <div>
       
          <Header_Home />
          <About_Top />
          <Services/>
          <About_Topside/>
          {/* <Story/>
          <Company_thought/> */}
          <Service_Home/>
          {/* <Client/> */}
          <Form_Contact/>
          {/* <News/> */}
          <Footer/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Index);