import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import './App.css';
import Header_Home from './component/header/Header_Home'
import store from './component/store/Store';
import TopMenu from './component/topmenu/TopMenu';
import Data from './Data.json'
import Header_Services from './component/header/Header_Services';
import Item from './component/item/Item';
import Services_About from './component/services_page/Services_About';
import Form_Contact from './component/form_contact/Form_Contact';
import About_Top from './component/home_page/About_Top';
import About_Topside from './component/home_page/About_Topside';
import Story from './component/home_page/Story';
import Company_thought from './component/home_page/Company_thought';
import Service_Home from './component/home_page/Service_Home';
import Client from './component/home_page/Client';
import News from './component/home_page/News';
import Footer from './component/footer/Footer';
import Index from './component/home_page/Index';
import Services_Index from './component/services_page/Services_Index'
import About_Index from '../src/component/about_page/About_Index'
import News_Index from './component/news_page/News_Index';
import Career_Index from './component/career_page/Career_Index';
import Contact_Index from './component/contact_page/Contact_Index';
import Routers from './component/router/Routers';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Detail_new from './component/detail_new/Detail_new';
import Detail_new2 from './component/detail_new/Detail_new2';
import Detail_new3 from './component/detail_new/Detail_new3';
import N1 from '../src/component/detail_new/N1';
import N2 from '../src/component/detail_new/N2';
import N3 from '../src/component/detail_new/N3';
import N4 from '../src/component/detail_new/N4';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div>
          
          <BrowserRouter>
            <div>
              <Route exact path="/" render={() => (<Index/>)} />
              <Route path="/about" component= {About_Index} />
              <Route path="/contact" component={Contact_Index} />
              {/* <Route path="/career" component={Career_Index} />
              <Route path="/news"  component={News_Index} /> */}
              <Route path="/services" component={Services_Index} />    
              {/* <Route path="/detail-new-p1" component={Detail_new}/> 
              <Route path="/detail-new-p2" component={Detail_new2}/> 
              <Route path="/detail-new-p3" component={Detail_new3}/> 
              <Route path="/n1" component={N1}/> 
              <Route path="/n2" component={N2}/> 
              <Route path="/n3" component={N3}/> 
              <Route path="/n4" component={N4}/>  */}


            </div>
          </BrowserRouter>

        </div>
      </Provider>
    );
  }
}
// 
export default App;
