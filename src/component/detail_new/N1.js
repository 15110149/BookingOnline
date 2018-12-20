import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../news_page/Header';
import Footer from '../footer/Footer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function mapStateToProps(state) {
  return {

  };
}

class N1 extends Component {
  render() {
    return (
      window.scroll(0, 0),
      <div>
        <Header />
        <section>
          <div className="container">
            <div className="row">
              {/* left news details */}
              <div className="col-md-8">
                <div className="single-news-p1-cont">
                  <div className="single-news-desc">
                    <h3 className=" wow  fadeInRightBig TitleNew">EU Watchdog Accuses Facebook, Google of Privacy Shenanigans</h3>
                    <hr />
                    <div className="bg-light-gray">
                      <img src="img/news/n1.jpg" alt className="img-left wow  fadeInDown" width="700px" height="400px" />
                      <p className=" wow fadeInUp">
                        Facebook and Google have manipulated users into sharing data using so-called "dark patterns," such as misleading wording
                        and confusing interfaces, according to a report the Norwegian Consumer Council released Wednesday. The
                        practices nudged users toward accepting privacy options that favored the tech companies rather than themselves,
                        the NCC found. Facebook and Google have no intention of providing users with an actual choice, the NCC
                        has claimed, and their use of dark patterns constitutes a violation of the General Data Protection Regulation
                        implemented across Europe last month. Some of the dark patterns: providing misleading privacy-intrusive
                        default settings; hiding privacy-friendly choices; and giving users the illusion of control while at the
                        same time presenting them with take-it-or-leave-it options. Privacy-friendly options -- when they are provided
                        -- tend to require more effort from the user, according to the NCC. The companies have been manipulating
                        users into sharing information, the NCC alleged, noting that such behavior shows a lack of respect for
                        individuals or their personal data and privacy. Users who declined to choose certain settings were subject
                        to deletion of their accounts in some cases. The Norwegian trade organization, which has been joined by
                        other consumer and privacy groups in Europe and in the United States, has called for European data protection
                        authorities to investigate whether Facebook and Google -- as well as Microsoft to a lesser degree, via
                        its Windows products -- have been acting in accordance with the GDPR and U.S. rules. If the companies are
                        found to be in violation of the GDPR, they could face fines of up to 20 million euros (US$24 million) or
                        4 percent of their annual global turnover.
              </p>
                      <p className=" wow fadeInUp">
                      </p><h5 className=" wow fadeInUp">Default Settings</h5>
                      <p className=" wow fadeInUp">
                        When it comes to the collection and sharing of user data, the default settings provided by the tech companies favor the companies
                        over the end user, the NCC concluded. Users rarely change pre-selected settings, and both Facebook and
                        Google have set the least-friendly privacy choices as their defaults, according to the report. More worrisome
                        is that the sharing of personal data and the use of targeted advertising routinely are presented as being
                        beneficial to the user, said the NCC. The wording and design suggests users actually benefit from having
                        their data shared. At the same time, users who might want to opt for stricter privacy controls receive
                        warnings about lost functionality. The NCC singled out Google for designing a privacy dashboard that
                        actually discourages users from changing or even taking control of their settings, and for implying that
                        users benefit from the default settings. The NCC noted that Facebook users actually are given no substantial
                        choice -- even after they take the extra effort to change their respective settings. Microsoft received
                        some praise for giving equal weight to privacy-friendly and unfriendly options in its Windows 10 operating
                        system settings. Patterns of Deception The impact of the report's findings is not limited to people within
                        Europe. "Basically, 'dark matter' reads like a list of practices that have been commonplace for years
                        among Web companies that rely on advertising revenues for survival -- particularly Facebook and Google,"
                        said Charles King, principal analyst at Pund-IT. "The bigger issue here is that since the EU's recently
                        implemented GDPR outlaws those functions, offending companies need to scrub them out of their sites or
                        risk significant fines," he told TechNewsWorld. "The thing is that dark practices are so mundane that
                        they've become pretty scrub-resistant, as the NCC investigation discovered," King added. The companies
                        have been increasingly successful at monetizing data. "Facebook and Google have built very powerful platforms,
                        businesses and audiences off the backs of their users' data," said Brock Berry, CEO of AdCellerant. "Their
                        platforms are almost a utility to the public, in many ways, that's operated like a business," he told
                        TechNewsWorld. "When they're divisive in their tactics, they open the doors for competitors to enter
                        the market, and I hope consumers step up, slow their usage of these platforms, and test other options
                        that are more customer/consumer-centric," Berry added. "Facebook and Google have a duty to be consumer-friendly
                        and customer-first focused," he said. "It's against everything they stand for to be surreptitious in
                        their methods of collecting user data."
              </p>
                      <h5>Dark Truth</h5>
                      <p className=" wow fadeInUp">
                        Although the NCC report specifically calls out Facebook and Google, as well as Microsoft's Windows 10 operating system, this
                        could be just the tip of the iceberg in terms of how software firms have been handling the issue of privacy.
                        "This practice isn't limited to the big tech companies; almost all tech companies obfuscate the data
                        they collect about users," said Josh Crandall, principal analyst at Netpop Research. "Most of the data
                        are used for productive purposes, but sometimes companies have used it for more profit-oriented endeavors
                        that users may not appreciate," he told TechNewsWorld. However, given the severity of the fines that
                        companies may face, the days of dark patterns could be coming to an end in Europe and the United States.
                        "Facebook, Google, Microsoft and others are working to address the problem," remarked Pund-IT's King.
                        "It's too dangerous and costly for them to ignore, but it also looks like an issue that defies a simple
                        'turn off the spigot' fix -- meaning we're likely to continue to see similar investigations and findings
                        in the months to come," he predicted. "In addition, it should be a wake-up call for companies affected
                        by GDPR who hope they can somehow skate under the radar and escape notice," King said. "Facebook, etc.,
                        are obviously big fish, but over time the NCC and other GDPR watchdogs will turn their attention to smaller
                fry." </p>
                      <blockquote className="bq wow fadeInUp" style={{ float: 'right', color: 'rgb(17, 16, 16)', fontSize: 15 }}>By Peter Suciu </blockquote>
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
                  <h3 style={{ color: '#777' }} className="pb-2">Hot Trend</h3>
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
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(N1);