import React, { Component, Fragment } from 'react';
import {
    CardBody, Card
  } from 'reactstrap';
  import Form from 'react-bootstrap/Form'
import MFCarousel from './MFCarousel';
import SmallIcon from "../../../images/owl-black-square-single.png"
import Button from 'react-bootstrap/Button'



class MFMain extends Component {
 
  render() {
    return (
      <Fragment>
        <Card>
        <CardBody>
          <Form.Group>
            <Form.Label className="h3 mb-2 pt-2 font-weight-bold text-secondary">New Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </CardBody>

      <Button variant="secondary" type="submit" style={{ "fontSize": "28", "backgroundColor": "#333333" }}>
          <img src={SmallIcon} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px",  }} />
            New Message
          </Button>
          </Card>
          <br/>
          <MFCarousel/>
      </Fragment>
    );
  }
  
}

export default MFMain;