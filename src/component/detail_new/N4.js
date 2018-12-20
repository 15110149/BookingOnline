import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../news_page/Header';
import Footer from '../footer/Footer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function mapStateToProps(state) {
    return {

    };
}

class N4 extends Component {
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
            <h3 className=" wow  fadeInRightBig TitleNew">Google Cloud App Engine now supports the Node.js runtime</h3>
            <hr />
            <div className="bg-light-gray">
              <img src="img/news/n4.jpg" alt className="img-left wow  fadeInDown" width="400px" height="250px" />
              <p className=" wow fadeInUp">
                Google Cloud has announced support for the popular cross-platform Node JavaScript runtime in the standard App Engine environment
                Node.js allows server code to be written in JavaScript. With the support added today, Google is seeking
                to make this process as simple for developers as possible. To ensure simplicity, Google is not putting
                any limitation on the Node.js packages that developers can use — and it will not have any language or API
                restrictions. Here are the benefits Google claims its Node.js support will bring: Fast deployments and
                automatic scaling - With App Engine standard environment, you can expect short deployment times. For example,
                it takes under a minute to deploy a basic Express.js application. Further, your Node.js apps will scale
                instantaneously depending on web traffic; App Engine automatically scales to zero when there are no incoming
                requests and quickly scales up the number of instances when traffic increases. Idiomatic developer experience
                - When designing the new runtime, we focused on providing a delightful and idiomatic developer experience.
                For example, the new Node.js runtime has no language or API restrictions. You can use your favorite Node.js
                modules, including native ones, by simply declaring your npm dependencies in your package.json, and App
                Engine installs them in the cloud after deploying your app. Out of the box, you will find your application
                logs and key performance indicators in Stackdriver. Finally, the base image contains the OS packages you
                need to run headless Chrome, which you can easily control using the Puppeteer module. Read more in the
                documentation. Strong security - With our automated one-click certificate generation, you can serve your
                application under a secure HTTPS URL with your own custom domain. In addition, we take care of security
                updates so that you don't have to, automatically updating the operating system and Node.js minor and patch
                versions. Node.js has some history with Google. The runtime is based on V8, Google's open source high-performance
                JavaScript engine. As of last year, the company is also a Platinum Sponsor of the Node.js foundation. The
                new support for Node.js can be trialed in App Engine’s free tier.
              </p>
              <blockquote className="bq wow fadeInUp" style={{float: 'right', color: 'rgb(17, 16, 16)', fontSize: 15}}>By Ryan Daws</blockquote>
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
          <Link to="/n1">
            <div className="right-side-sn-cont">
              <img src="img/news/n1.jpg" alt className="img-fluid" />
              <p>EU Watchdog Accuses Facebook, Google of Privacy Shenanigans</p>
              <small>
                <fa className="fa-watch">Jun 29, 2018 5:00 AM PT</fa>
              </small>
            </div>
          </Link>
          <Link to="/n2">
            <div className="right-side-sn-cont">
              <img src="img/news/n2.jpg" alt className="img-fluid" />
              <p>Best free Android apps of 2018: 100 you must download</p>
              <small>
                <fa className="fa-watch"> 19 hours ago</fa>
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
)(N4);