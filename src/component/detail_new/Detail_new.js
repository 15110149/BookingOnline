import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../news_page/Header';
import Footer from '../footer/Footer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function mapStateToProps(state) {
    return {

    };
}

class Detail_new extends Component {
    render() {
        return (
            window.scroll(0, 0),
            <div>
                <Header />
                <section id="single-news-p1" className="single-news-p1">
                    <div className="container">
                        <div className="row">
                            {/* left news details */}
                            <div className="col-md-8">
                                <div className="single-news-p1-cont">
                                    <div className="single-news-img">
                                        <img src="img/news/news-blockchain.jpg" alt className="img-fluid" />
                                    </div>
                                    <div className="single-news-desc">
                                        <h3>How Blockchain Companies Offer The Promise of Modernisation to Mainstream Industries</h3>
                                        <hr />
                                        <div className="bg-light-gray">
                                            <p>
                                                Blockchain, a technology that was until very recently the domain of techies, has caught the attention of mainstream industries
                                                around the world. Businesses across various sectors are now lining up to adopt this distributed ledger
                                                technology which promises far greater levels of efficiency, security, and productivity than most current
                                                technologies offer. This is distributed ledger tech offers a decentralised and transparent method for two
                                                or more parties to conduct transactions involving money and high-value assets and exchange valuable documents
                                                or information in a highly secure manner. Although the most popular and successful application of blockchain
                                                technology has been in the creation of cryptocurrencies like Bitcoin, Ethereum, Ripple, etc. the technology
                                                can prove to be highly transformative to several industries. Let’s take a look at a few of them: Healthcare
                                                industry While the digitisation of healthcare systems and records are a reality in many parts of the world,
                                                India’s healthcare industry is still heavily reliant on paper-based records. There is a pressing need for
                                                modernisation and digitisation within this sector which is still encumbered by inefficient systems. Blockchain
                                                has the ability to help make healthcare information of transparent and easily accessible for patients and
                                                providers, while keeping it secure from hackers. Entertainment industry As music and videos went digital
                                                about two decades, piracy became a growing concern for music artists, production companies, and record
                                                companies who lost control over ownership of content as well as revenue streams due to online downloads.
                                                However, today the entertainment industry is looking towards blockchain technology to create better digital
                                                rights management systems for media such music and videos, and find new content monetisation opportunities.
                                                Many companies are developing blockchain-driven solutions which are aimed towards creating a standard system
                                                for authenticating content ownership and rights on a global scale. Real estate industry Anyone who has
                                                ever purchased or sold a home knows just how much paperwork is involved in a real estate transaction. Blockchain
                                                technology can eliminate all the hassles of such paper-based processes and complex transactions arising
                                                at the time of exchange of fixed real estate assets between two or more parties. With blockchain, all documents
                                                is involved in such deals. Smart contracts powered by blockchain will play an integral role in managing
                                                both fulfilment of legal requirements for real estate transactions and help in disbursing funds as soon
                                                as the pre-determined criteria for the sale and purchase of assets are met. Blockchain is a technology
                                                that has caught the attention of not just private businesses and crypto exchanges, but also the Indian
                                                government, which has committed a substantial amount of money for the development of IndiaChain, the country’s
                                                own home-grown answer to Blockchain. According to reports, the government is also exploring the possibility
                                                of blockchain being used to maintain land records, health data, and linking it to India Stack, a digital
                                                framework developed around Aadhaar. The government has also been keen on using the distributed ledger technology
                                                as part of the Digital India initiative, and bring greater transparency and accountability in the country’s
                                                existing banking system. It is no surprise that alongside developments like these, blockchain players operating
                                                in India find themselves in an unusual fix due to the government’s ambiguity in recognising virtual currencies.
                                                Although IndiaChain is envisioned as a foundation on which a decentralised digital banking system will
                                                be based, allowing blockchain-powered cryptocurrencies to operate, albeit in a regulated environment, will
                                                be the key to building a truly digitised and cashless economy. Therefore, the government’s approval for
                                                the use of virtual currencies will not only help transform the way in which financial transactions are
                                                conducted, but also bring more transparency into them to prevent fraudulent transactions from taking place.
              </p>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                                              at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                              as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                                              packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                              ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose </p>
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
                            {/* Right news details */}
                            <div className="col-md-4">
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
                                    <a href="n2.html">
                                        <div className="right-side-sn-cont">
                                            <img src="img/news/n2.jpg" alt className="img-fluid" />
                                            <p>Best free Android apps of 2018: 100 you must download</p>
                                            <small>
                                                <fa className="fa-watch"> 19 hours ago</fa>
                                            </small>
                                        </div>
                                    </a>
                                    <Link to="/n3">
                                        <div className="right-side-sn-cont">
                                            <img src="img/news/n3.jpg" alt className="img-fluid" />
                                            <p>Google's new API improves biometric authentication in Android P</p>
                                            <small>
                                                <fa className="fa-watch">22 June 2018, 17:05 p.m</fa>
                                            </small>
                                        </div>
                                    </Link>
                                    <Link to ="/n4">
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
                <Footer/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Detail_new);
