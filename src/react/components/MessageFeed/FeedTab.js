import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import Bookmarks from "./Bookmarks"
import NewMessage from "./NewMessage"
import {connect} from "react-redux"
import PhoneBook from "./PhoneBook"
import {userInfo} from "../../../redux/account/userInfo"
import MFCarousel from "./MessageFeed"
import "../../main.css"

class FeedTab extends Component {
    state={
            activeTab: 1,
            newMessage: false
           
    }

    toggleNewMessage=e=>{
        this.setState({ newMessage: !this.state.newMessage })
      }
    
    componentDidMount(){
        this.toggle('1')
        this.props.userInfo()
       
    }

  toggle = tab => {
    console.log(tab)
    if(this.state.activeTab !== tab){ this.setState({activeTab: tab})}
    /*if(tab==="2" || tab==="3"){this.props.getFriends()}*/
  }
  render(){
  return (
    <Container >
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
            style={{fontFamily: 'Poppins', fontSize: "2rem", fontWeight: "bold"}}
          >
            Message Feed
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}
            style={{fontFamily: 'Poppins', fontSize: "2rem", fontWeight: "bold"}}
          >
            Bookmarks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}
            style={{fontFamily: 'Poppins', fontSize: "2rem", fontWeight: "bold"}}
          >
              Friends
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1" style={{height: "636px"}}>
          <Row >

          <Col md="4">
              <Card body>
              <NewMessage 
                newMessage={this.state.newMessage}
                toggleMessage={this.toggleNewMessage}
                className="flex-fill"
                />
              </Card>
            </Col>
              <Col md="8">
           <MFCarousel/>
           </Col>
           
          </Row>
        </TabPane>
        <TabPane tabId="2" style={{height: "636px"}}>
          <Row>
           
              <Card body>
               <Bookmarks/>
               
              </Card>
           
          </Row>
        </TabPane>
        <TabPane tabId="3" style={{height: "636px"}}>
          <Row>
           <PhoneBook/>
          </Row>
        </TabPane>
      </TabContent>
    </Container>
  );
}
}

export default connect(null,{userInfo}) (FeedTab);