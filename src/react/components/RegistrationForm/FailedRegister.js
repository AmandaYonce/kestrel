import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Modal, ModalHeader, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import {failedRegisterModal} from "../../../redux/stateReducers/registrationForm/failedRegisterModal"

class FailedRegister extends Component {


  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={this.props.modal}
      >
        <ModalHeader>
          Registration Failed. Please try again with a unique user name. 
        </ModalHeader>
        <ModalFooter>
          <Button onClick={event=>this.props.failedRegisterModal(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default connect(
  null,
  {failedRegisterModal}
)(FailedRegister);