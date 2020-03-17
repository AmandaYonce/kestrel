import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux'
import { userInfo } from "../../../redux/account/userInfo"
import {welcomeModal} from "../../../redux/welcomeModal/welcomeModal"
import {randomQuote} from "../../../redux/randomQuote/randomQuote"

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

toggleModal=()=>{
  this.props.welcomeModal(false)
}

componentDidMount(){
  this.props.randomQuote()
}

    render(){
    return (

        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        isOpen={this.props.modal}
      >
        <ModalHeader >
         <h3 style={{fontFamily: 'Odibee Sans', color: "#576490", fontSize: "3rem"}}>Welcome back {this.props.username}</h3>
        </ModalHeader>
        <ModalBody>
          <h2>Did you know...</h2>
        <h5> {this.props.quote} </h5>

        </ModalBody>
        <ModalFooter>
          <Button 
          onClick={this.toggleModal}
          >Close</Button>
        </ModalFooter>
      </Modal>
      )
    }
}


export default connect (
state=>({
    username: state.auth.login.result.username,
    quote: state.randomQuote.randomQuote.result,
    modal: state.welcomeModal.welcomeModal.result
  }),
{userInfo, randomQuote, welcomeModal})(WelcomeModal)