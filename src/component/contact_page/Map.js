import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Map extends Component {
    render() {
        return (
            <div>
                <section id="contact-add">
                    <div id="map">
                        <div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2771.338414135779!2d106.69286821317124!3d10.791052518295025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cc9ee44733%3A0x863342a33fd220e!2zMzMgTMO9IFbEg24gUGjhu6ljLCBUw6JuIMSQ4buLbmgsIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1531725223611" width="100%" height={400} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                        </div></div></section>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Map);