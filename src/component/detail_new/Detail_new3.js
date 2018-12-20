import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../news_page/Header';
import Footer from '../footer/Footer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function mapStateToProps(state) {
    return {

    };
}

class Detail_new3 extends Component {
    render() {
        return (
            window.scroll(0, 0),
            <div>
                <Header/>
                <section id="single-news-p1" className="single-news-p1">
  <div className="container">
    <div className="row">
      {/* left news details */}
      <div className="col-md-8">
        <div className="single-news-p1-cont">
          <div className="single-news-img">
            <img src="img/news/top.jpg" alt className="img-fluid" />
          </div>
          <div className="single-news-desc">
            <h3>Social Networking Sites You Need to Know About in 2018</h3>
            <hr />
            <div className="bg-light-gray wow fadeInUp">
              <p>
                Human nature by default has been programmed to be socially active to a certain extent. Some people are more active, while
                others are less so! However, people have always been looking for ways to connect and network with each
                other. And, in this age of digitisation, people have found ways to be socially active on the internet,
                which is possible with the advent of the numerous social networking platforms and apps. Now, even relationships
                begin, grow and end on social media. People no longer need a personal handshake or face-to-face meeting.
                Social media sites have also grown in numbers by leaps and bounds. As per the statistics revealed on Statista,
                approximately 2 billion users used social networking sites and apps in 2015. And, with the increased use
                of mobile devices, this number is likely to cross the 2.6 billion mark by 2018. So, in this article, we
                discuss some of the most popular social media sites that are being explored by the world today. You can
                find out if your favourite social media platform is a part of this list and even learn about some really
                good online social platforms that you can start using today.
              </p><p>
              </p><hr />
              <h3>Facebook </h3> 
              <hr />
              {/* <p> <img src="img/news/fb.png" alt="" height="200px" width="200px"> </p> */}
              <img src="img/news/fb.png" alt="logo" width="100px" height="100px" className="img-left wow fadeInUp" />
              <p className="wow fadeInUp">
                This is easily the largest social networking site in the world and one of the most widely used. And, Facebook was perhaps
                the first that surpassed the landmark of 1 billion user accounts. Apart from the ability to network
                with friends and relatives, you can also access different Facebook apps to sell online and you can
                even market or promote your business, brand and products by using paid Facebook ads. Recently Facebook
                has lost the trust of millions of its users by allowing 3rd parties to access over 87 million users’
                personal data. This is a massive breech of trust and has created a feeling of unrest amongst the social
                media platform’s audience. So much so that there is now a #deletefacebook campaign where people are
                completely removing themselves from Facebook and using other networks instead. If you’re concerned
                about what Facebook is doing with your data, then why not check out my guide on alternatives to Facebook,
                and see if there’s a better place for you to interact with family and friends.
              </p><blockquote className="wow fadeInUp bq" style={{color: 'rgb(87, 87, 236)'}}>Number of active users per month: 1.59 billion approximately</blockquote>
              <p />
              <hr />
              <h3>WhatsApp</h3>
              <hr />
              {/* <p> <img src="img/news/fb.png" alt="" height="200px" width="200px"> </p> */}
              <p>
                <img src="img/news/wa.jpg" alt="logo" width="100px" height="100px" className="img-left wow fadeInUp" />
              </p><p className="wow fadeInUp">
                Despite having been acquired by Facebook in 2014, this instant messaging platform exists as an independent entity. It arrived
                on the scene much later than Facebook, but has been able to capture the imagination of millions of
                people across the world by giving them the ability to communicate and share instantly with individuals
                and groups. 
              </p>
              <blockquote className="wow fadeInUp bq" style={{color: 'rgb(29, 202, 38)'}}>Number of active users per month: 1 billion approximately</blockquote>
              <p />
              <hr />
              <h3>Tumblr</h3>
              <hr />
              {/* <p> <img src="img/news/fb.png" alt="" height="200px" width="200px"> </p> */}
              <p>
                <img src="img/news/tm.png" alt="logo" width="100px" height="100px" className="img-left wow fadeInUp" />
              </p><p className="wow fadeInUp">
                Having been owned by Yahoo since 2013, Tumblr serves as a social media cum micro blogging platform that can be used to find and follow things that you like. You can also use it to post anything, including multimedia, to a short-form blog. Moreover, it gives you the flexibility to customize almost everything.
              </p>
              <blockquote className="wow fadeInUp bq" style={{color: 'rgb(20, 63, 156)'}}>Number of active users per month: 555 million approximately</blockquote>
              <p />
              <hr />
              <h3>Instagram</h3>
              <hr />
              {/* <p> <img src="img/news/fb.png" alt="" height="200px" width="200px"> </p> */}
              <p>
                <img src="img/news/ins.png" alt="logo" width="100px" height="100px" className="img-left wow fadeInUp" />
              </p><p className="wow fadeInUp">
                Instagram was launched as a unique social networking platform that was completely based on sharing photos and videos. This photo sharing social networking app thus enables you to capture the best moments of your life, with your phone’s camera or any other camera, and convert them into works of art.
                This is possible because Instagram allows you to apply multiple filters to your photos and you can easily post them to other popular social networking sites, such as Facebook and Twitter. It is now part of the Facebook empire. Learn how to grow your Instagram audience.
              </p>
              <blockquote className="wow fadeInUp bq" style={{color: 'rgb(209, 23, 54)'}}>Number of active users per month: 400 million approximately</blockquote>
              <p />
              <hr />
              <h3>Twitter</h3>
              <hr />
              {/* <p> <img src="img/news/fb.png" alt="" height="200px" width="200px"> </p> */}
              <p>
                <img src="img/news/tt.png" alt="logo" width="100px" height="100px" className="img-left wow fadeInUp" />
              </p><p className="wow fadeInUp">
                This social networking site enables you to post short text messages (called tweets), containing a limited number of characters (up to 140), to convey your message to the world. With the growing craze for online shopping, Twitter also makes it possible to promote your businesses and even shop directly through tweets</p>
              <blockquote className="wow fadeInUp bq" style={{color: 'rgb(38, 200, 221)'}}>Number of active users per month: 320 million approximately                    </blockquote>
              <p />
              <p />
              <hr />
              <h3> Viber</h3>
              <hr />
              {/* <p> <img src="img/news/fb.png" alt="" height="200px" width="200px"> </p> */}
              <p>
                <img src="img/news/vb.png" alt="logo" width="100px" height="100px" className="img-left wow fadeInUp" />
              </p><p className="wow fadeInUp">
                This multi-lingual social platform, which is available in more than 30 languages, is known for its instant text messaging and voice messaging capabilities. You can also share photos and videos and audio messages, using Viber. It offers you the ability to call non-Viber users through a feature named Viber Out. </p>
              <blockquote className="wow fadeInUp bq" style={{color: 'rgb(158, 31, 184)'}}>Number of active users per month: 249 million approximately </blockquote>
              <p />
              <hr />
              <h3> Skype</h3>
              <hr />
              {/* <p> <img src="img/news/fb.png" alt="" height="200px" width="200px"> </p> */}
              <p>
                <img src="img/news/sky.jpg" alt="logo" width="100px" height="100px" className="img-left wow fadeInUp" />
              </p><p className="wow fadeInUp">
                Skype, owned by Microsoft, is one of the most popular communication-based social networking platforms. It allows you to connect with people through voice calls, video calls and text messaging. You can even conduct group conference calls. And, the best part is that Skype-to-Skype calls are free and can be used to communicate with anyone, located in any part of the world, over the internet. </p>
              <blockquote className="wow fadeInUp bq" style={{color: 'rgb(33, 177, 221)'}}>Number of active users per month: 300 million approximately </blockquote>
              <p />
              <hr />
              <h3> Line</h3>
              <hr />
              {/* <p> <img src="img/news/fb.png" alt="" height="200px" width="200px"> </p> */}
              <p>
                <img src="img/news/line.png" alt="logo" width="100px" height="100px" className="img-left wow fadeInUp" />
              </p><p className="wow fadeInUp">
                LINE is a globally available messaging social network that enables you to share photos, videos, text messages and even audio messages or files. In addition, it allows you to make voice and video calls at any time of the day. </p>
              <blockquote className="wow fadeInUp bq" style={{color: 'rgb(37, 194, 45)'}}> Number of active users per month: 215 million approximately </blockquote>
              <p />
              <hr />
              <h3> Snapchat</h3>
              <hr />
              {/* <p> <img src="img/news/fb.png" alt="" height="200px" width="200px"> </p> */}
              <p>
                <img src="img/news/snap.jpg" alt="logo" width="100px" height="100px" className="img-left wow fadeInUp" />
              </p><p className="wow fadeInUp">
                This is an image messaging social platform that enables you to chat with friends by using pictures. It allows you to explore news and even check out live stories that are happening around the world.</p>
              <blockquote className="wow fadeInUp bq" style={{color: 'rgb(204, 207, 26)'}}> Number of active users per month: 200 million approximately</blockquote>
              <p />
              <p />
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
                    {/* <div class="comment-avatar">
                  <img src="img/client/avatar-2.jpg" alt="">
                </div>
                
                <div class="comment-box">
                  <div class="comment-head">
                    <h6 class="comment-name by-author">
                      <a href="#">John Boss</a>
                    </h6>
                    <span>before 20 minutes</span>
                    <i class="fa fa-reply"></i>
                    <i class="fa fa-heart"></i>
                  </div>
                  <div class="comment-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio,
                    sapiente distinctio illo?
                  </div>
                </div> */}
                  </div>
                  <ul className="comments-list reply-list">
                    {/* <li> 
                  <div class="comment-avatar">
                    <img src="img/client/avatar-6.jpg" alt="">
                  </div>
                  
                  <div class="comment-box sub-comment-box">
                    <div class="comment-head">
                      <h6 class="comment-name">
                        <a href="#">Tresa Ben</a>
                      </h6>
                      <span>hace 10 minutos</span>
                      <i class="fa fa-reply"></i>
                      <i class="fa fa-heart"></i>
                    </div>
                    <div class="comment-content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio,
                      sapiente distinctio illo?
                    </div>
                  </div>
                </li>

                <li>
                  
                  <div class="comment-avatar">
                    <img src="img/client/avatar-2.jpg" alt="">
                  </div>
                
                  <div class="comment-box sub-comment-box">
                    <div class="comment-head">
                      <h6 class="comment-name by-author">
                        <a href="#">John Boss</a>
                      </h6>
                      <span>before 10 minutes</span>
                      <i class="fa fa-reply"></i>
                      <i class="fa fa-heart"></i>
                    </div>
                    <div class="comment-content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio,
                      sapiente distinctio illo?
                    </div>
                  </div>
                </li> */}
                  </ul>
                </li>
                {/* <li>
              <div class="comment-main-level">
               
                <div class="comment-avatar">
                  <img src="img/client/avatar-1.jpg" alt="">
                </div>
       
                <div class="comment-box">
                  <div class="comment-head">
                    <h6 class="comment-name">
                      <a href="#">Blensan Trul</a>
                    </h6>
                    <span>before 10 minutes</span>
                    <i class="fa fa-reply"></i>
                    <i class="fa fa-heart"></i>
                  </div>
                  <div class="comment-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio,
                    sapiente distinctio illo?
                  </div>
                </div>
              </div>
            </li> */}
              </ul>
            </div>
            {/* <div class="comment-box-sn">
          <h5>Leave a Reply</h5>
          <textarea name="" id="" placeholder="Comment"></textarea>
          <input type="text" name="email" placeholder="Email Id" class="form-control">
          <br>
          <input type="text" name="text" placeholder="Name" class="form-control">
          <br>
          <button class="btn btn-general btn-green" style="width: 100%;" role="button">Send</button>
        </div> */}
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
)(Detail_new3);