import React, { Component } from 'react';
  import Button from 'react-bootstrap/Button'
  //import { connect } from "react-redux";
  import { Modal } from 'reactstrap';
  


class EditUserModal extends Component {

  render() {
    
      return (

        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button 
          //onClick={this.props.toggle}
          >Submit</Button>
          <Button 
          //onClick={this.props.toggle}
          >Cancel</Button>
        </Modal.Footer>
      </Modal>
      )

    }
}

export default EditUserModal