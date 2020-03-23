import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Modal, ModalHeader, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import {failedLoginModal} from "../../../redux/stateReducers/registrationForm/failedLoginModal"

class FailedLogin extends Component {


  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={this.props.modal}

      >
        <ModalHeader>
          Login Failed. Please try again. 
        </ModalHeader>
        <ModalFooter>
          <Button onClick={event=>this.props.failedLoginModal(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default connect(
  null,
  {failedLoginModal}
)
(FailedLogin);