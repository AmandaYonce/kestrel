//this is the landing page immediately after successful login
import React from "react";
import { Menu} from "./components";
import { userIsAuthenticated } from "./HOCs";
import { Container, Row, Col } from 'reactstrap';
import {MFMain} from "./components"
import {MFSide} from "./components"
import { userInfo } from "../redux/account/userInfo"
import { connect } from "react-redux";
import "./main.css"
import MFCarousel from "./components/MessageFeed/MFCarousel"
import booth from "../telephoneImages/bwphonebooth.png"

class Profile extends React.Component {
  state={
    newMessage: false
  }

  toggleNewMessage=e=>{
    this.setState({ newMessage: !this.state.newMessage })
  }

  componentDidMount(){
    this.props.userInfo()
  };


  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <main className="my-5 py-5 brick" >
        <Container className="px-0" >
        <Row noGutters className=" pt-md-5 w-100  px-xl-0 position-relative" style={{padding: "10"}}>

            <Col xs={{ order: 1 }} md={{ size: 4}} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
            <Row>
            <MFMain 
            newMessage={this.state.newMessage}
            toggleMessage={this.toggleNewMessage}
            />
            </Row>
            <Row style={{marginTop: "50px"}}>
            <MFSide />
            </Row >
            </Col>
            
            <Col xs={{ order: 2 }} md={{ size: 5}} tag="section" className="py-5 mb-5 py-md-0 mb-md-0" style={{marginLeft: "50px"}}>
            <MFCarousel />
            </Col>

        </Row>
        </Container>
  </main>
      </>
    );
  }
}

export default connect(null,{userInfo}) (userIsAuthenticated(Profile));
