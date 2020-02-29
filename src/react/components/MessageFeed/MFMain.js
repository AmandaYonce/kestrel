import React, { Component, Fragment } from 'react';
import {
    CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import MFCarousel from './MFCarousel';
import SmallIcon from "../../../images/owl-black-square-single.png"
import Button from 'react-bootstrap/Button'


class MFMain extends Component {
  render() {
    return (
      <Fragment>
        <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Message Feed</CardTitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-normal text-uppercase" style={{ fontSize: '0.8rem' }}>MFMain.js</CardSubtitle>
        
      </CardBody>
      <MFCarousel/>
      <br/>
      <Button variant="secondary" type="submit" style={{ "fontSize": "28", "backgroundColor": "#333333" }}>
          <img src={SmallIcon} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px",  }} />
            New Message
          </Button>
      </Fragment>
    );
  }
  
}

export default MFMain;