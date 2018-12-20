import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import News_P1 from './News_P1';
import News_p1 from '../../../src/News_p1.json'
import News_Small from './News_Small';
import News_small from '../../../src/News_small.json'
import News_Trend from './News_Trend'
import News_trend from '../../../src/News_trend.json'
import Footer from '../footer/Footer';
function mapStateToProps(state) {
    return {

    };
}

class News_Index extends Component {
    render() {
        return (
            window.scrollTo(0, 0),
            <div >
                <Header />
                <div><br /></div>
                <section id="single-news-p1" class="single-news-p1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8" >
                                {News_p1.map((value, key) => {
                                    return (
                                        <div className="row wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                            <News_P1 key={key.value} NewsImg={value.NewsImg} NewsTittle={value.NewsTittle} Content={value.Content} LinkNew={value.LinkNew}/>
                                        </div>

                                    )
                                })

                                }
                            </div>
                            <div className="col-md-4">
                                <div className="small-news-box">

                                    {News_small.map((value, key) => {
                                        return (
                                            <div className="row wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                                <News_Small key={key.value} NS_Img={value.NS_Img} NS_Tittle={value.NS_Tittle} NS_Day={value.NS_Day} LinkN ={value.LinkN} />
                                            </div>

                                        )
                                    })

                                    }

                                    <div className="ad-box-sn">
                                        <h3 style={{ color: '#777' }} className="pb-2">Hot Trend</h3>

                                        {News_trend.map((value, key) => {
                                            return (
                                                <div className="row wow animated fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                                    <News_Trend key={key.value} Trend_Img={value.Trend_Img} Trend_tittle={value.Trend_tittle} Desc={value.Desc} Trend_Link={value.Trend_Link} />
                                                </div>

                                            )
                                        })

                                        }
                                    </div>
                                </div></div>
                        </div></div>
                </section>
                <Footer/>
            </div>

        );
    }
}

export default connect(
    mapStateToProps,
)(News_Index);