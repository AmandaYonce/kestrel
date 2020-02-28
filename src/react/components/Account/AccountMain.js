import React, { Component, Fragment } from 'react';
import {
    CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'reactstrap';
  import SmallIcon from "../../../images/owl-black-square-single.png"
  import Button from 'react-bootstrap/Button'


class AccountMain extends Component {
  render() {
    return (
      <Fragment>
        <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">AccountMain Title - maybe user name</CardTitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-normal text-uppercase" style={{ fontSize: '0.8rem' }}>Subtitle- maybe user about section</CardSubtitle>
        <CardText className="text-secondary mb-4 font-weight-normal" style={{ fontSize: '0.95rem' }}>do we want a button for delete user? What about edit or update user?</CardText>
      </CardBody>
      <Button variant="secondary" type="submit"  style={{ "fontSize": "28", "backgroundColor": "red" }}>
          <img src={SmallIcon} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
            Delete User
          </Button>
      </Fragment>
    );
  }
  
}

export default AccountMain;