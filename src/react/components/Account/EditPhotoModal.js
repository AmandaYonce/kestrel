import React, { Component } from 'react';
  import Button from 'react-bootstrap/Button'
  import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
  import Form from 'react-bootstrap/Form'
  import { Col} from 'reactstrap';
  import { connect } from "react-redux";
  //import {editUser} from "../../../redux/account/edituser"
  import {editPhoto} from "../../../redux/account/editPhoto"
 

class EditPhotoModal extends Component {
    state={
        photo: "",
        placeholder: ""
    }
    
    handlePhotoChange=(event)=>{
      console.log(event.target.files)
        const newState=event.target.files[0]
        this.setState({photo:newState, placeholder: event.target.value})
    }

    handlePhotoUpload=(event)=>{
      const data = new FormData()
      data.append("picture", this.state.photo)
      console.log(data)
      this.props.editPhoto(event, data);
    }
    

  render() {
    console.log(this.state)
      return (

        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={this.props.modal}
      >
        <ModalHeader >
          Add Photo
        </ModalHeader>
        <ModalBody>
        <Form.Row>
            <Form.Group as={Col} md="6" id="login-form" >
          <Form.Label style={{"fontSize": "25px", "fontFamily": 'Poppins', 'width': "500px"}} className="custom-file-label" placeholder="photo" htmlFor="customFile">Photo:{this.state.placeholder}</Form.Label>
          <Form.Control style={{"width": "600px"}} type="file" className="custom-file-input" name="photo"  required  onChange={this.handlePhotoChange}/>
          </Form.Group>
            </Form.Row>

        </ModalBody>
        <ModalFooter>
          <Button 
          onClick={(e)=>{
              this.handlePhotoUpload()
              this.props.toggle();
            }}
          >Submit</Button>
          <Button 
          onClick={this.props.toggle}
          >Cancel</Button>
        </ModalFooter>
      </Modal>
      )

    }
}

export default connect(null, { editPhoto })(EditPhotoModal);