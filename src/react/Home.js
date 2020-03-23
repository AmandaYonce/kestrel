
import React from "react";
import { Menu, RegistrationForm } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import { Container, Row, Col } from 'reactstrap';
import "./main.css"
import { getMessages } from "../redux/messages/getMessages";
import { connect } from "react-redux";
import FailedRegister from "./components/RegistrationForm/FailedRegister"
import {failedRegisterModal} from "../redux/stateReducers/registrationForm/failedRegisterModal"
import FailedLogin from "./components/RegistrationForm/failedLogin"
import {failedLoginModal} from "../redux/stateReducers/registrationForm/failedLoginModal"


class Home extends React.Component {   
  
  render() {
    return (
      <>
        <Menu />
        <main className="my-5 py-5 brickOwl" style={{height: "906px"}}>
        <Container className="px-0" >
        <Row className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative" >
            <Col xs={{ order: 1 }} sm={{ size: 6 }} tag="section" style={{minWidth: "310px"}} >
            <RegistrationForm />
            </Col>
            <Col xs={{ order: 2 }} sm={{ size: 4 }} tag="section" className=" center-block ">
            </Col>
        </Row>
        </Container>
        </main>
        <FailedRegister
        modal={this.props.registerModal}
        />
        <FailedLogin 
        modal= {this.props.loginModal}
        />
      </>
    );
  }
}

export default connect (
  state=>({
    registerModal: state.registerModal.failedRegisterModal.result,
    loginModal: state.loginModal.failedLoginModal.result
  })
  , 
  
  {getMessages, failedRegisterModal, failedLoginModal}) (userIsNotAuthenticated(Home));


