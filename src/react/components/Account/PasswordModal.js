import React, { Component } from 'react';
  import Button from 'react-bootstrap/Button'
  import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
  import Form from 'react-bootstrap/Form'
  import { Col} from 'reactstrap';
  import { connect } from "react-redux";
  import {editPassword} from "../../../redux/account/editPassword"
  import { Redirect } from 'react-router-dom'
 

class PasswordModal extends Component {
    state={
        currentPassword: "", 
        newPassword: "",
        passwordSubmitted: false
    }

    handleCurrentPasswordChange=(event)=>{
        const newState=event.target.value
        this.setState({currentPassword:newState})
    }
    handleNewPasswordChange=(event)=>{
        const newState=event.target.value
        this.setState({newPassword:newState})
    }

    handlePasswordSubmitted=(event)=>{
        const newState=!this.state.passwordSubmitted
        this.setState({passwordSubmitted: newState})
        this.handleRedirect()
    }

    handleRedirect=()=>{
      if(this.state.passwordSubmitted){
        return <Redirect to='/' />
      }
    }


  render() {
      return (
       
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={this.props.modal}
      >

        <ModalHeader >
          Edit User Information
        </ModalHeader>
        <ModalBody>
        
        <Form.Row>
            <Form.Group as={Col} md="6" id="login-form" >
          <Form.Label style={{"fontSize": "25px", "fontFamily": 'Poppins'}} htmlFor="password">Current Password</Form.Label>
          <Form.Control style={{"width": "600px"}} type="text" onChange={this.handleCurrentPasswordChange} placeholder="Current Password" name="username" autoFocus required />
          </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} md="6" id="login-form" >
            <Form.Label style={{"fontSize": "25px", "fontFamily": 'Poppins'}} htmlFor="displayname">New Password</Form.Label>
            <Form.Control style={{"width": "250px"}} onChange={this.handleNewPasswordChange} type="text" placeholder="New Password" name="username" autoFocus required />
            </Form.Group>
            </Form.Row>
        </ModalBody>
        <ModalFooter>
          
          <Button 
          onClick={(e)=>{
            this.props.editPassword(e, this.state.newPassword)
            this.handlePasswordSubmitted()
        }}>Submit</Button>
         
          <Button 
          onClick={this.props.toggle}
          >Cancel</Button>
        </ModalFooter>
      </Modal>
      )

    }
}


export default connect(null, { editPassword })(PasswordModal);