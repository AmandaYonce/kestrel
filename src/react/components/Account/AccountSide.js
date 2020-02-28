import React, { Component, Fragment } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'reactstrap';

import HolderImage from "../../../images/owl-black-square.png"

  class AccountSide extends Component {
    render() {
      return (
        <Fragment>
        <Card>
        <CardBody>
            <CardImg top width="100%" src={HolderImage} alt="Kwitter Icon" className="img-fluid" style={{ width: 140 }} />
            
                <CardTitle>AccountSide Title</CardTitle>
                <CardSubtitle>Subtitle</CardSubtitle>
                <CardText>do we need more text here?  can we use this image placeholder if the user image is "null"</CardText>
            </CardBody>
        </Card>
        
        </Fragment>
      );
    }
    
  }
  
  export default AccountSide;