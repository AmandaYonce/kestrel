import React, {Component} from 'react'
import {Card, CardSubtitle} from 'reactstrap'
import {connect} from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import friend from "../../../images/friend.png"
import "../../main.css"
import UserMessageCard from "./userMessageCard"
import {userInfo} from "../../../redux/account/userInfo"
import {friendInfo} from "../../../redux/account/userInfo"
import empty from "../../../telephoneImages/empty.png"
import {domain} from "../../../redux/helpers"
import {userMessages} from "../../../redux/messages/userMessages"


class PhoneBook extends Component{
state={
    list: "test",
    activeTab: 0
}
componentDidMount(){
    this.toggle(-1)
    
}

toggle = (tab, friend) => {
  if(this.state.activeTab !== tab) this.setState({activeTab: tab});
  console.log(friend)
  this.props.friendInfo(friend)
  this.props.userMessages(friend)
  
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
    console.log(uniqueUsers)
  if(uniqueUsers.length===0){
    return (
      <Container  className="owlBackground">
        <Card style={{backgroundColor: "transparent"}}>
          
      <CardSubtitle key={Math.random()} className="text-center" style={{fontSize: "3rem", color: "#576490", fontFamily: 'Poppins', marginTop: "50px"}}>Make Friends <br/>to See <br/>Them Here</CardSubtitle>
      <img src={empty} alt="empty" style={{height: "200px"}}/>
      </Card>
      </Container>
    )
  }
    return (

    <Container className="noOwlBackground"> 
    <Nav tabs>

    <NavItem key={Math.random()}>
          <NavLink
            className={classnames({ active: -1 })}
            onClick={() => { this.toggle(-1)}}
            style={{fontSize: "1.5rem", fontFamily: "Odibee Sans", whiteSpace: "nowrap"}}
          >
            Friends
          </NavLink>
        </NavItem>
       
        { uniqueUsers.map((each)=>(
      
        <NavItem key={Math.random()}>
          <NavLink
            className={classnames({ active: this.state.activeTab === uniqueUsers.indexOf(each) })}
            onClick={() => { this.toggle(uniqueUsers.indexOf(each), each) }}
            style={{fontSize: "1.5rem", fontFamily: "Odibee Sans", whiteSpace: "nowrap"}}
          >
            {each}
          </NavLink>
        </NavItem>
        ))}
        </Nav>
        
        <TabContent activeTab={this.state.activeTab}>
          <>
        <TabPane key={-1} tabId={-1} >
          <Row >
          <Col md="12">
            <Card body style={{flexDirection: "row"}}>
           
            <div >
            <img src={friend} alt="placeholder" style={{width: "15rem", padding: "2rem"}}/>
            </div>
            
            <div >
              <br/>
              <br/>
            <CardSubtitle className="text-center scratchBackground" style={{fontSize: "2rem", color: "#576490", fontFamily: 'Poppins', padding: "4rem", border: "2px solid silver"}}>Check out what your friends<br/> have been doing. </CardSubtitle>
            </div>
            <div style={{backgroundColor: "transparent", minHeight:"30rem"}}></div>
              </Card>
            </Col>
           <div style={{backgroundColor: "red", height: "100px"}}></div>
          </Row>
        </TabPane>
          </>
        { uniqueUsers.map((each)=>(
          <>
        
        <TabPane key={(uniqueUsers.indexOf(each))} tabId={(uniqueUsers.indexOf(each))} >
          <Row >
          <Col md="12">
            <Card body style={{flexDirection: "row"}}>
              <Col md="5">
            <Row className="text-center" style={{justifyContent: "center"}}>
            {this.props.friend === null &&
            
            <img src={friend} alt="placeholder" style={{width: "15rem", padding: "2rem"}}/>
           
            }

            {this.props.friend !== null && this.props.friend.pictureLocation===null &&
            
            <img src={friend} alt="placeholder" style={{width: "15rem", padding: "2rem"}}/>
            
            }

            {this.props.friend !== null && this.props.friend.pictureLocation!==null &&
            
            <img src={domain+this.props.friend.pictureLocation} alt="placeholder" style={{width: "15rem", padding: "2rem"}}/>
            
            }
            </Row>
            <Row style={{justifyContent: "center"}}>
            {this.props.friend !== null &&
            <div style={{border: "2px solid silver", padding: "2.5rem"}}>
            <CardSubtitle style={{fontSize: "1.2rem", fontFamily: 'Poppins'}}><span style={{fontSize: "1.7rem", fontWeight: "bold"}}>Username: </span>{uniqueUsers[this.state.activeTab]} </CardSubtitle>
            <br/>
            <CardSubtitle style={{fontSize: "1.2rem", fontFamily: 'Poppins'}}><span style={{fontSize: "1.7rem", fontWeight: "bold"}}>Preferred Name: </span>{this.props.friend.displayName}</CardSubtitle>
            <br/>
            <CardSubtitle style={{fontSize: "1.2rem", fontFamily: 'Poppins'}}><span style={{fontSize: "1.7rem", fontWeight: "bold"}}>About: </span>{this.props.friend.about} </CardSubtitle>
            </div>
              }
              </Row>
              </Col>
              <Row className="scroll" style={{maxHeight: "500px", overflow: "auto", marginLeft: "4rem"}}>
                <Col md="7">
              {this.props.friend !== null && this.props.userMessageList !==null &&
              this.props.userMessageList.map((message)=>{
                if(this.props.userMessageList !==null){
                  return <UserMessageCard messages={message} key={message.id}></UserMessageCard>
                } return ""
                })}
                </Col>
                </Row>
              </Card>
            </Col>
           <div style={{backgroundColor: "red", height: "100px"}}></div>
          </Row>
        </TabPane>

       </>
      ))}
        </TabContent>
        
        </Container>
    )
}

}

export default connect(
    state=>({
      messages: state.messages.getMessages.result,
      username: state.auth.login.result.username,
      friend: state.friendInfo.friendInfo.result,
      userMessageList: state.userMessages.userMessages.result
      
    }), { userInfo, friendInfo, userMessages})(PhoneBook);


    
     
