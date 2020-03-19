import React, { Component } from 'react';
  import Button from 'react-bootstrap/Button'
  import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
  import Form from 'react-bootstrap/Form'
  import { Col} from 'reactstrap';
  import { userInfo } from "../../../redux/account/userInfo"
  import { connect } from "react-redux";
  import {editUser} from "../../../redux/account/edituser"
  import {google} from "../../../redux/account/googleTracker"
 

class EditUserModal extends Component {
    state={
        password: "",
        about: "",
        displayName: "" 
    }

    componentDidMount(){
      if(this.props.googleStatus !== null){
        if(this.props.googleStatus.value===true){
        this.setState({password: this.props.googleStatus.password})
        }
        }
      }
    

    handleAboutChange=(event)=>{
        const newState=event.target.value
        this.setState({about:newState})
    }

    handleDisplayNameChange=(event)=>{
        const newState=event.target.value
        this.setState({displayName:newState})
    }

    handleGetPassword=(event)=>{
        const newState=event.target.value
        this.setState({password:newState})
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
        
        {this.props.googleStatus===null &&
        <Form.Row>
            <Form.Group as={Col} md="6" id="login-form" >
          <Form.Label style={{"fontSize": "25px", "fontFamily": 'Poppins'}} htmlFor="password">Current Password</Form.Label>
          <Form.Control style={{"width": "600px"}} type="text" placeholder="password" name="username" autoFocus required  onChange={this.handleGetPassword}/>
          </Form.Group>
            </Form.Row>
            }
            
            <Form.Group as={Col} md="6" id="login-form" >
            <Form.Label style={{"fontSize": "25px", "fontFamily": 'Poppins'}} htmlFor="displayname">Display Name</Form.Label>
            <Form.Control style={{"width": "250px"}} type="text" placeholder={this.props.details.displayName} name="username" autoFocus required onChange={this.handleDisplayNameChange}/>
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="6" id="login-form" >
          <Form.Label style={{"fontSize": "25px", "fontFamily": 'Poppins'}} htmlFor="about">About</Form.Label>
          <Form.Control style={{"width": "600px"}} type="text" placeholder={this.props.details.about} name="username" autoFocus required onChange={this.handleAboutChange}/>
          </Form.Group>
            </Form.Row>

        </ModalBody>
        <ModalFooter>
          <Button 
          onClick={(e)=>{
            this.props.editUser(e, this.state.password, this.state.about, this.state.displayName);
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

export default connect(
    state => ({
      details: state.userInfo.userInfo.result,
      loading: state.userInfo.userInfo.loading,
      error: state.userInfo.userInfo.error,
      googleStatus: state.google.google.result
    }),
    { userInfo, editUser, google }
  )(EditUserModal);