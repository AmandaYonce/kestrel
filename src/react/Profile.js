//this is the landing page immediately after successful login
import React from "react";
import { Menu} from "./components";
import { userIsAuthenticated } from "./HOCs";
import { Row} from 'reactstrap';
import { userInfo } from "../redux/account/userInfo"
import { connect } from "react-redux";
import { getMessages } from "../redux/messages/getMessages";
import "./main.css"
import FeedTab from "../react/components/MessageFeed/FeedTab"
import WelcomeModal from "../react/components/MessageFeed/WelcomeModal"

import {welcomeModal} from "../redux/welcomeModal/welcomeModal"

class Profile extends React.Component {
  
  componentDidMount(){
    this.props.getMessages()
  }
  toggleModal(){
    this.props.welcomeModal(false)
  }


  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <main className="my-5 py-5 bricklightlonger ">
         
        <WelcomeModal
        />
          
        <Row style={{marginTop: "120px"}}>

        <FeedTab />

        </Row>
       
  </main>
      </>
    );
  }
}

export default connect(
  state=>({
    messages: state.messages.getMessages.result,
   
  })
  ,{userInfo, getMessages, welcomeModal}) (userIsAuthenticated(Profile));
