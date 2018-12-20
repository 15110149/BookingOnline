import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../footer/Footer';
import Header from '../news_page/Header';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function mapStateToProps(state) {
    return {

    };
}

class N2 extends Component {
    render() {
        
        return (
            window.scroll(0,0),
            <div>
                <Header/>
                <section>
  <div className="container">
    <div className="row">
      {/* left news details */}
      <div className="col-md-8">
        <div className="single-news-p1-cont">
          <div className="single-news-desc">
            <h3 className=" wow  fadeInRightBig TitleNew">Best free Android apps of 2018: 100 you must download</h3>
            <hr />
            <div className="bg-light-gray">
              <img src="img/news/n2.jpg" alt className="img-left wow  fadeInDown" width="400px" height="300px" />
              <p className=" wow fadeInUp">
                It's been ten years since Android was first outed by Google, and back then it was hard to imagine the sheer number of apps
                we'd have today. There are apps for everything, and many of them are completely free, meaning you're just
                a few downloads away from supercharging your smartphone at no extra cost.
                <b>What's the best phone of 2017?</b>
                Admittedly, the huge quantity of apps doesn't mean they're all quality - far from it in fact, and finding the good ones can
                be tough. There are tools and techniques to help, with various lists in the Play Store providing you with
                Editor's Picks across a range of categories, new releases and even apps that are specifically recommended
                for you based on your previous installs. You can also hunt out apps that are similar to your favorites
                by searching for an app you have and seeing what else comes up. And checking out user reviews and ratings
                can save you from downloading a dud of an app. But even with all that, the sheer number of apps on Google
                Play means many of the best can often get lost, while weaker ones sometimes rise to the top. So to make
                sure you never install a duff app here's our selection of the best you should install right now - each
                one carefully chosen to ensure you'll have a whole suite of fun, engaging and, dammit, useful apps on your
                phone or tablet.
              </p>
              <blockquote className="bq wow fadeInUp" style={{float: 'right', color: 'rgb(17, 16, 16)', fontSize: 15}}>By James Rogerson </blockquote>
              {/* <blockquote class="blockquote">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. consectetur adipiscing
              elit. Integer posuere erat a ante</p>
            <footer class="blockquote-footer"> Kumar Gaurav                    
              <cite title="Source Title">Founder and CEO, Cashaa</cite>
            </footer>
          </blockquote> */}
            </div>
            <div className="comments-container">
              <ul id="comments-list" className="comments-list">
                <li>
                  <div className="comment-main-level">
                  </div>
                  <ul className="comments-list reply-list">
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="col-md-1">
      </div>
      {/* Right news details */}
      <div className="col-md-3">
        <div className="small-news-box">
          {/* <a href="n1.html">
        <div class="right-side-sn-cont">
          <img src="img/news/n1.jpg" alt="" class="img-fluid">
          <p>EU Watchdog Accuses Facebook, Google of Privacy Shenanigans</p>
          <small>
            <fa class="fa-watch">Jun 29, 2018 5:00 AM PT</fa>
          </small>
        </div>
      </a> */}
          <Link to="/n1">
            <div className="right-side-sn-cont">
              <img src="img/news/n1.jpg" alt className="img-fluid" />
              <p>EU Watchdog Accuses Facebook, Google of Privacy Shenanigans</p>
              <small>
                <fa className="fa-watch">Jun 29, 2018 5:00 AM PT</fa>
              </small>
            </div>
          </Link>
          <Link to="/n3">
            <div className="right-side-sn-cont">
              <img src="img/news/n3.jpg" alt className="img-fluid" />
              <p>Google's new API improves biometric authentication in Android P</p>
              <small>
                <fa className="fa-watch">22 June 2018, 17:05 p.m</fa>
              </small>
            </div>
          </Link>
          <Link to="/n4">
            <div className="right-side-sn-cont">
              <img src="img/news/n4.jpg" alt className="img-fluid" />
              <p>Google Cloud App Engine now supports the Node.js runtime</p>
              <small>
                <fa className="fa-watch"> 13 June 2018, 15:03 p.m</fa>
              </small>
            </div>
          </Link>
        </div>
        <div className="ad-box-sn">
          <h3 style={{color: '#777'}} className="pb-2">Hot Trend</h3>
          <div className="card">
            <div className="desc-comp-offer-cont">
              <div className="thumbnail-blogs">
                <div className="caption">
                  <i className="fa fa-chain" />
                </div>
                <img src="img/news/ht.jpg" className="img-fluid" alt="..." />
              </div>
              <h3>7 Technology Trends That Will Dominate 2018</h3>
              <p className="desc">
                So what will the biggest tech trends of 2018 be, and how will our lives change, accordingly?
              </p>
              <a href="https://www.forbes.com/sites/jaysondemers/2017/12/30/7-technology-trends-that-will-dominate-2018/#75cbb5cb57d7">
                <i className="fa fa-arrow-circle-o-right" /> Learn More</a>
            </div>
          </div>
          <div className="card">
            <div className="desc-comp-offer-cont">
              <div className="thumbnail-blogs">
                <div className="caption">
                  <i className="fa fa-chain" />
                </div>
                <img src="img/news/ht2.jpg" className="img-fluid" alt="..." />
              </div>
              <h3>6 Software Development Trends for 2018</h3>
              <p className="desc">There’s endless opportunity and danger ahead, and who is society going to call on to help us navigate it?</p>
              <a href="https://stackify.com/software-development-trends-2018/">
                <i className="fa fa-arrow-circle-o-right" /> Learn More</a>
            </div>
          </div>
          <div className="card">
            <div className="desc-comp-offer-cont">
              <div className="thumbnail-blogs">
                <div className="caption">
                  <i className="fa fa-chain" />
                </div>
                <img src="img/news/hw.jpg" className="img-fluid" alt="..." />
              </div>
              <h3>Hot hardware trends for 2018</h3>
              <p className="desc">How could stock kitchen cabinets offer soft close and you don’t? </p>
              <a href="https://www.woodworkingnetwork.com/best-practices-guide/components-hardware-assembly/hot-hardware-trends-2018">
                <i className="fa fa-arrow-circle-o-right" /> Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(N2);