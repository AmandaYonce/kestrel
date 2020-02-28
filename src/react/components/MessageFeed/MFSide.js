import React, { Component, Fragment } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'reactstrap';

import HolderImage from "../../../images/owl-black-square.png"

  class MFSide extends Component {
    render() {
      return (
        <Fragment>
        <Card>
        <CardBody>
            <CardImg top width="100%" src={HolderImage} alt="Kwitter Icon" className="img-fluid" style={{ width: 140 }} />
            
                <CardTitle>MFSide Title</CardTitle>
                <CardSubtitle>Subtitle</CardSubtitle>
                <CardText>Use this card for advanced features like Top 10 tweets or whatever we come up with</CardText>
            </CardBody>
        </Card>
        
        </Fragment>
      );
    }
    
  }
  
  export default MFSide;