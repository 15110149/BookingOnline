import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../footer/Footer';
import Header from '../news_page/Header';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
function mapStateToProps(state) {
    return {

    };
}

class N3 extends Component {
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
            <h3 className=" wow  fadeInRightBig TitleNew">Google's new API improves biometric authentication in Android P</h3>
            <hr />
            <div className="bg-light-gray">
              <img src="img/news/n3.jpg" alt className="img-left wow  fadeInDown" width="400px" height="300px" />
              <p className=" wow fadeInUp">
                Google has announced a biometric authentication API which enables developers to improve the security of their apps. Biometrics
                has become a favoured and quick security method for users. While there are certainly more secure methods
                of authentication, few are so fast and unintrusive. Vishwath Mohan, Security Engineer at Google, wrote
                in a blog post: 
              </p>
              <p style={{paddingLeft: 10}}>
                “Biometric authentication mechanisms are becoming increasingly popular, and it's easy to
                see why. They're faster than typing a password, easier than carrying around a separate security key, and
                they prevent one of the most common pitfalls of knowledge-factor based authentication—the risk of shoulder
                surfing.” 
              </p>
              <p className=" wow fadeInUp">
                Knowledge-factor based authentication is something like a PIN or password. Aside from biometrics,
                the other major form of authentication is possession-based – which uses something you own like a token
                generator. Google wants to improve two major areas with biometric authentication in Android P: Define a
                better model to measure biometric security, and use that to functionally constrain weaker authentication
                methods. Provide a common platform-provided entry point for developers to integrate biometric authentication
                into their apps. There are currently two metrics used for biometric authentication – False Accept Rate
                (FAR), and False Reject Rate (FRR). Google believes FAR is a security concern as it measures how often
                an illegitimate user is accidentally recognised as being the device owner. FRR is problematic for usability,
                according to Google, as it measures how often a legitimate device owner has to retry their authentication.
                Two new metrics have been added in Android P – Spoof Accept Rate (SAR), and Imposter Accept Rate (IAR).
                They measure how easily an attacker bypasses authentication. Spoofing refers to the use of a known-good
                recording (e.g. replaying a voice recording or using a face or fingerprint picture), while impostor acceptance
                means a successful mimicking of another user's biometric (e.g. trying to sound or look like a target user).
                These metrics were used to categorise biometric authentication mechanisms as either strong or weak – with
                seven percent or lower representing strong, or above seven percent as weak. With the BiometricPrompt API,
                Google wanted to allow weaker biometrics while still reducing the risk of unauthorised access. “BiometricPrompt
                only exposes strong modalities, so developers can be assured of a consistent level of security across all
                devices their application runs on,” wrote Mohan. “A support library is also provided for devices running
                Android O and earlier, allowing applications to utilize the advantages of this API across more devices.”
                The API enables the platform to select which biometric is most appropriate without developers having to
                implement specific logic for it themselves. You can find documentation for the BiometricPrompt API here.
                What are your thoughts on Google’s new BiometricPrompt API? Let us know in the comments.
              </p>
              <p />
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
          <Link to="/n2">
            <div className="right-side-sn-cont">
              <img src="img/news/n2.jpg" alt className="img-fluid" />
              <p>Best free Android apps of 2018: 100 you must download</p>
              <small>
                <fa className="fa-watch"> 19 hours ago</fa>
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
  <Footer/>
</section>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(N3);