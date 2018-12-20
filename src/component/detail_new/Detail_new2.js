import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../news_page/Header';
import Footer from '../footer/Footer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function mapStateToProps(state) {
    return {

    };
}

class Detail_new2 extends Component {
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
            <img src="img/news/10ai.jpg" alt className="img-fluid" />
          </div>
          <div className="single-news-desc">
            <h3>10 Artificial Intelligence Technologies That Will Dominate in 2018</h3>
            <hr />
            <div className="bg-light-gray">
              <p>
                In 2017, we published a popular post on artificial intelligence (AI) technologies that would dominate that year, based on
                Forrester’s TechRadar report. Here’s the updated version, which includes 9 more technologies to watch out
                for this year. We hope they inspire you to join the 62% of companies boosting their enterprises in 2018.
              </p>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose
              </p>
              <p>
              </p><h5>1. Natural Language Generation</h5>
              <p>
                Natural language generation is an AI sub-discipline that converts data into text, enabling computers to communicate ideas
                with perfect accuracy. It is used in customer service to generate reports and market summaries and is
                offered by companies like Attivio, Automated Insights, Cambridge Semantics, Digital Reasoning, Lucidworks,
                Narrative Science, SAS, and Yseop.
              </p>
              <h5>2. Speech recognition </h5>
              <p>
                Siri is just one of the systems that can understand you. Every day, more and more systems are created that can transcribe
                human language, reaching hundreds of thousands through voice-response interactive systems and mobile
                apps. OpenText and Verint Systems.
              </p><p>
                <img src="img/news/2.jpg" alt height="350px" width="600px" /> </p>
              <p />
              <h5>3. Virtual Agents</h5>
              <p>A virtual agent is nothing more than a computer agent or program capable of interacting with humans. The
                most common example of this kind of technology are chatbots. Virtual agents are currently being used
                for customer service and support and as smart home managers. Some of the companies that provide virtual
                agents include Amazon, Apple, Artificial Solutions, Assist AI, Creative Virtual, Google, IBM, IPsoft,
                Microsoft and Satisfi.
              </p><p>
                <img src="img/news/cb.jpg" alt height="350px" width="600px" />
              </p>
              <p />
              <h5> 4. Machine Learning Platforms</h5>
              <p>These days, computers can also easily learn, and they can be incredibly intelligent! Machine learning (ML)
                is a subdiscipline of computer science and a branch of AI. Its goal is to develop techniques that allow
                computers to learn. By providing algorithms, APIs (application programming interface), development and
                training tools, big data, applications and other machines, ML platforms are gaining more and more traction
                every day. They are currently mainly being used for prediction and classification. Some of the companies
                selling ML platforms include Amazon, Fractal Analytics, Google, H2O.ai, Microsoft, SAS, Skytree and Adext.
                This last one is particularly interesting for one simple reason: Adext is the first and only AMaaS (Audience
                Management as a Service) in the world that applies real AI and machine learning to digital advertising
                to find the most profitable audience or demographic group for any ad.
              </p><p>
                <img src="img/news/4.jpg" alt height="350px" width="600px" />
              </p>
              <p />
              <h5>5. AI-Optimized Hardware</h5>
              <p>AI technologymakes hardware much friendlier. How? Through new graphic and central processing units and
                processing devices specifically designed and structured to execute AI-oriented tasks. And if you haven’t
                seen them already, expect the imminent appearance and wide acceptance of AI-optimized silicon chips that
                can be inserted right into your portable devices and elsewhere. You can get access to this technology
                through Alluviate, Cray, Google, IBM, Intel, and Nvidia.
              </p>
              <h5>6. Decision Management Intelligent machines are capable of introducing</h5>
              <p> rules and logic to AI systems so you can use them for initial setup/training, ongoing maintenance, and
                tuning. Decision management has already been incorporated into a variety of corporate applications to
                assist and execute automated decision, making your business as profitable as possible. Check out Advanced
                Systems Concepts, Informatica, Maana, Pegasystems, and UiPath for additional options.
              </p><p>
                <img src="img/news/6.jpg" alt height="350px" width="600px" />
              </p>
              <p />
              <h5>7. Deep Learning Platforms</h5>
              <p>
                Deep learning platforms use a unique form of ML that involves artificial neural circuits with various abstraction layers
                that can mimic the human brain, processing data and creating patterns for decision making. It is currently
                mainly being used to recognize patterns and classify applications that are only compatible with large-scale
                data sets. Deep Instinct, Ersatz Labs, Fluid AI, MathWorks, Peltarion, Saffron Technology and Sentient
                Technologies all have deep learning options worthy of exploring.
              </p><p>
                <img src="img/news/7.jpg" alt height="350px" width="600px" />
              </p>
              <p />
              <h5>8. Biometrics </h5>
              <p>This technology can identify, measure and analyze human behavior and physical aspects of the body’s structure
                and form. It allows for more natural interactions between humans and machines, including interactions
                related to touch, image, speech and body language recognition, and is big within the market research
                field. 3VR, Affectiva, Agnitio, FaceFirst, Sensory, Synqera and Tahzoo are all biometrics companies working
                hard to develop this area.
              </p><p>
                <img src="img/news/8.jpg" alt height="350px" width="600px" />
              </p>
              <p />
              <h5>9. Robotic Processes Automation</h5>
              <p>Robotic processes automation uses scripts and methods that mimic and automate human tasks to support corporate
                processes. It is particularly useful for situations when hiring humans for a specific job or task is
                too expensive or inefficient. The good example is Adext, a platform that automates digital advertising
                processes using AI, saving businesses from devoting hours to mechanical and repetitive tasks. It’s a
                solution that lets you make the most of your human talent and move employees into more strategic and
                creative positions, so their actions can really make an impact on the company's growth. Advanced Systems
                Concepts, Automation Anywhere, Blue Prism, UiPath, and WorkFusion are other examples of robotic processes
                automation companies.
              </p><p>
                <img src="img/news/9.jpg" alt height="350px" width="600px" />
              </p>
              <p />
              <h5>10. Cyber Defense</h5>
              <p>Cyber defense is a computer network defense mechanism that focuses on preventing, detecting and providing
                timely responses to attacks or threats to infrastructure and information. AI and ML are now being used
                to move cyberdefense into a new evolutionary phase in response to an increasingly hostile environment:
                Breach Level Index detected a total of over 2 billion breached records during 2017. Seventy-six percent
                of the records in the survey were lost accidentally, and 69% were an identity theft type of breach. Recurrent
                neural networks, which are capable of processing sequences of inputs, can be used in combination with
                ML techniques to create supervised learning technologies, which uncover suspicious user activity and
                detect up to 85% of all cyber attacks. Startups such as Darktrace, which pairs behavioral analytics with
                advanced mathematics to automatically detect abnormal behavior within organizations and Cylance, which
                applies AI algorithms to stop malware and mitigate damage from zero-day attacks, are both working in
                the area of AI-powered cyber defense. DeepInstinct, another cyber defense company, is a deep learning
                project named “Most Disruptive Startup” by Nvidia’s Silicon Valley ceremony, protects enterprises' endpoints,
                servers, and mobile devices.
              </p><p>
                <img src="img/news/10.jpg" alt height="350px" width="600px" />
              </p>
              <p />
              <p />
             
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
          <Link to="/n2">
            <div className="right-side-sn-cont">
              <img src="img/news/n2.jpg" alt className="img-fluid" />
              <p>Best free Android apps of 2018: 100 you must download</p>
              <small>
                <fa className="fa-watch"> 19 hours ago</fa>
              </small>
            </div>
          </Link>
          <a href="n3.html">
            <div className="right-side-sn-cont">
              <img src="img/news/n3.jpg" alt className="img-fluid" />
              <p>Google's new API improves biometric authentication in Android P</p>
              <small>
                <fa className="fa-watch">22 June 2018, 17:05 p.m</fa>
              </small>
            </div>
          </a>
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
)(Detail_new2);