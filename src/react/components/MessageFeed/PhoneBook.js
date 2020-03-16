import React, {Component} from 'react'
import {Card, CardSubtitle} from 'reactstrap'
import {connect} from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import friend from "../../../images/friend.png"
import "../../main.css"
import {getFriends} from "../../../redux/messages/getMessages"

class PhoneBook extends Component{
state={
    list: "test",
    activeTab: 0
}
componentDidMount(){
    this.toggle(0)
    
}

toggle = tab => {
if(this.state.activeTab !== tab) this.setState({activeTab: tab});

}

render(){

    if(this.props.messages===null) {
        return (
            <CardSubtitle key={Math.random()}></CardSubtitle>
        )
    }

    const usersarray=[]
    const userslist=[]
    let uniqueUsers
    const likes = this.props.messages.map((each)=>{
        if(each.likes.length>0){
          each.likes.filter((like)=>{
            if(like.username===this.props.username && each.username !== this.props.username){
              usersarray.push(each)
              userslist.push(each.username)
              return true
            } return false
          })
        }  
        uniqueUsers = [...new Set(userslist)]
       
        return usersarray
    })  
    console.log(likes)
  
    return (

    <Container className="owlBackground"> 
    <Nav tabs>
        { uniqueUsers.map((each)=>(
      
        <NavItem key={Math.random()}>
          <NavLink
            className={classnames({ active: this.state.activeTab === uniqueUsers.indexOf(each) })}
            onClick={() => { this.toggle(uniqueUsers.indexOf(each)) }}
            style={{fontSize: "1.5rem", fontFamily: "Odibee Sans", whiteSpace: "nowrap"}}
          >
            {each}
          </NavLink>
        </NavItem>
        ))}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
        { uniqueUsers.map((each)=>(
        <TabPane key={uniqueUsers.indexOf(each)} tabId={uniqueUsers.indexOf(each)} >
          <Row >
          <Col md="8">
            <Card body style={{flexDirection: "row"}}>
            <div >
            <img src={friend} alt="placeholder" style={{width: "15rem", padding: "2rem"}}/>
            </div>
            <div >
            <CardSubtitle >Name </CardSubtitle>
            <CardSubtitle>About </CardSubtitle>
            <CardSubtitle>Something Else </CardSubtitle>
            </div>
              </Card>
            </Col>
           <div style={{backgroundColor: "red", height: "100px"}}></div>
          </Row>
        </TabPane>
        ))}
        </TabContent>
        </Container>
    )
}

}

export default connect(
    state=>({
      messages: state.messages.getMessages.result,
      username: state.auth.login.result.username
    }), {getFriends})(PhoneBook);

