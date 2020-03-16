import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux'
import { userInfo } from "../../../redux/account/userInfo"
import {welcomeModal} from "../../../redux/welcomeModal/welcomeModal"

class WelcomeModal extends Component {
 /* state={
    modal: true
  }
  
  toggle=()=>{
    if(this.state.modal===true){
      this.setState({modal: false})
      this.props.welcomeModal()
      
  }
}*/

    render(){
    return (

        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={this.props.modal}
      >
        <ModalHeader >
          Welcome back {this.props.username}
        </ModalHeader>
        <ModalBody>
        <h3> random fact or quote api generator here </h3>

        </ModalBody>
        <ModalFooter>
          <Button 
          onClick={this.props.toggle}
          >Close</Button>
        </ModalFooter>
      </Modal>
      )
    }
}


export default connect (
state=>({
    username: state.auth.login.result.username,
    //modal: state.welcomeModal.welcomeModal.result
  }),
{userInfo, welcomeModal})(WelcomeModal)