import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Story extends Component {
    render() {
        return (

            <section id="story">
                <div className="container">
                    <div className="row title-bar">
                        <div className="col-md-12">
                            <h1 className="wow fadeInUp">The dope made by the effort</h1>
                            <div className="heading-border" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="story-himg">
                                <img src="img/image-4.jpg" className="img-fluid" alt />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="story-desc">
                                <h3>How to grow world with Us</h3>
                                <div className="heading-border-light" />
                                <p>You can find some thoughts on success from our students and alumni here – every story is unique, but this is
                                  what success is. Everybody sees it differently. Many desktop publishing packages and web page editors now use
                                  Lorem Ipsum. We work hard in the name of the success of our alumni – being among the best and holding the high
                                  employment rate. Many desktop publishing packages and web page editors now use Lorem Ipsum..
          </p>
                                <details>
                                    <summary className="fa fa-play"> Read More </summary>
                                    <nav>
                                        <p className="wow fadeInUp" data-wow-delay="0.4s">
                                            <img src="img/logoXbig.png" alt="logo" width="20%" height="10%" className="img-left" /> Everyone defines success differently – as much as there are people, there are different opinions. Number
                                            one in our priority list is the success of our students, alumni and their employers. We work hard in the
                                            name of the success of our alumni – being among the best and holding the high employment rate. Many desktop
                                            publishing packages and web page editors now use Lorem Ipsum..
              </p>
                                    </nav></details></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(
    mapStateToProps,
)(Story);