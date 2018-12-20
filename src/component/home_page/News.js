import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function mapStateToProps(state) {
    return {

    };
}

class News extends Component {
    render() {
        return (
          window.scroll(0,0),
            <div>
                <section id="comp-offer">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3 col-sm-6  desc-comp-offer wow fadeInUp" data-wow-delay="0.2s">
        <h2>Latest News</h2>
        <div className="heading-border-light" />
        <button className="btn btn-general btn-white" role="button">
          <Link to="/news" className="nav-link smooth-scroll"  >See More</Link>
        </button>
      </div>
      <div className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.4s">
        <div className="desc-comp-offer-cont">
          <div className="thumbnail-blogs">
            <div className="caption">
              <i className="fa fa-chain" />
            </div>
            <img src="img/news/blockchain.jpg" className="img-fluid" alt="..." />
          </div>
          <h3>blockchain technology</h3>
          <p className="desc">Blockchain technology has in recent years become front and center of the technology discussion with intuitive
            applications being powered by its network architecture. </p>
          <a href="https://www.blockchain.com/">
            <i className="fa fa-arrow-circle-o-right" /> Learn More</a>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.6s">
        <div className="desc-comp-offer-cont">
          <div className="thumbnail-blogs">
            <div className="caption">
              <i className="fa fa-chain" />
            </div>
            <img src="img/news/bot.jpg" className="img-fluid" alt="..." />
          </div>
          <h3>Chatbot technology</h3>
          <p className="desc">Chatbots are a huge trend, there’s no doubt about it. Big name brands are jumping at the opportunity to meet
            their customers where they’re already spending time — in messaging apps. </p>
          <a href="https://www.techemergence.com/chatbot-comparison-facebook-microsoft-amazon-google/">
            <i className="fa fa-arrow-circle-o-right" /> Learn More</a>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.8s">
        <div className="desc-comp-offer-cont">
          <div className="thumbnail-blogs">
            <div className="caption">
              <i className="fa fa-chain" />
            </div>
            <img src="img/news/images.jpg" className="img-fluid" alt="..." />
          </div>
          <h3>5G Technology</h3>
          <p className="desc">With blazing fast speeds and high computing power, 5G tech is poised to change the world—and I don’t say that
            lightly. Why? The IoT wouldn’t be where it is without the support and speed of 5G, which promise multigigabit
            download speeds. </p>
          <a href="https://searchnetworking.techtarget.com/definition/5G">
            <i className="fa fa-arrow-circle-o-right" /> Learn More</a>
        </div>
      </div>
    </div>
  </div>
</section>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(News);