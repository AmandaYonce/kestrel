import React, { Component, Fragment } from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'reactstrap';


  class MFSide extends Component {
    render() {
      return (
        <Fragment>
        <Card>
        <CardBody>
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