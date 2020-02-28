import React, { Component, Fragment } from 'react';
import {
    CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'reactstrap';


class AccountMain extends Component {
  render() {
    return (
      <Fragment>
        <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">AccountMain Title - maybe user name</CardTitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-normal text-uppercase" style={{ fontSize: '0.8rem' }}>Subtitle- maybe user about section</CardSubtitle>
        <CardText className="text-secondary mb-4 font-weight-normal" style={{ fontSize: '0.95rem' }}>do we want a button for delete user? What about edit or update user?</CardText>
      </CardBody>
      </Fragment>
    );
  }
  
}

export default AccountMain;