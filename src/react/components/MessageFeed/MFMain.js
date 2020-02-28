import React, { Component, Fragment } from 'react';
import {
    CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'reactstrap';
import MFCarousel from './MFCarousel';


class MFMain extends Component {
  render() {
    return (
      <Fragment>
        <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">MFMain Title</CardTitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-normal text-uppercase" style={{ fontSize: '0.8rem' }}>Subtitle</CardSubtitle>
        <CardText className="text-secondary mb-4 font-weight-normal" style={{ fontSize: '0.95rem' }}>can we use this area for the tweets/messages.  Can they scroll? Bootstrap has a component called carousel that has horizontal scrolling like a picture slideshow.  Can we have that as a way to display/scroll through our messages?</CardText>
        
      </CardBody>
      <MFCarousel/>
      </Fragment>
    );
  }
  
}

export default MFMain;