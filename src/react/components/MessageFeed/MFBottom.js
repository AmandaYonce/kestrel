import React, { Component, Fragment } from 'react';
import {
    CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'reactstrap';


class MFBottom extends Component {
  render() {
    return (
      <Fragment>
        <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">MFBottom Title</CardTitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-normal text-uppercase" style={{ fontSize: '0.8rem' }}>Subtitle</CardSubtitle>
        <CardText className="text-secondary mb-4 font-weight-normal" style={{ fontSize: '0.95rem' }}>What can we put down here?  </CardText>
      </CardBody>
      </Fragment>
    );
  }
  
}

export default MFBottom;