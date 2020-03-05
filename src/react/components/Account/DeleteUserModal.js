import React, { Component } from 'react';
  import Button from 'react-bootstrap/Button'
  import { Modal, ModalHeader, ModalFooter } from 'reactstrap';
  //import { connect } from "react-redux";
 

class DeleteUserModal extends Component {

  render() {
    
      return (

        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={this.props.modal}
      >
        <ModalHeader >
          Are You Sure You Want to Delete Your Account.  This Cannot be Undone
        </ModalHeader>
        <ModalFooter>
          <Button 
          onClick={this.props.toggle}
          >Delete User</Button>
          <Button 
          onClick={this.props.toggle}
          >Cancel</Button>
        </ModalFooter>
      </Modal>
      )
    }
}

export default DeleteUserModal