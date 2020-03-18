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

    <Container className="owlBackground"> 
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
          <Col md="8">
            <Card body style={{flexDirection: "row"}}>
           
            <div >
            <img src={friend} alt="placeholder" style={{width: "15rem", padding: "2rem"}}/>
            </div>
            
            <div >
              <br/>
              <br/>
            <CardSubtitle className="text-center" style={{fontSize: "2rem", color: "#576490", fontFamily: 'Poppins'}}>Check out what your friends have been up to </CardSubtitle>
            </div>
            
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
          <Col md="8">
            <Card body style={{flexDirection: "row"}}>
            
            {this.props.friend === null &&
            <div >
            <img src={friend} alt="placeholder" style={{width: "15rem", padding: "2rem"}}/>
            </div>
            }

            {this.props.friend !== null && this.props.friend.pictureLocation===null &&
            <div >
            <img src={friend} alt="placeholder" style={{width: "15rem", padding: "2rem"}}/>
            </div>
            }

            {this.props.friend !== null && this.props.friend.pictureLocation!==null &&
            <div >
            <img src={domain+this.props.friend.pictureLocation} alt="placeholder" style={{width: "15rem", padding: "2rem"}}/>
            </div>
            }

            {this.props.friend !== null &&
            <div >
            <CardSubtitle><span style={{fontSize: "1.2rem", fontWeight: "bold"}}>Username: <br/></span>{uniqueUsers[this.state.activeTab]} </CardSubtitle>
            <br/>
            <CardSubtitle><span style={{fontSize: "1.2rem", fontWeight: "bold"}}>Prefers to <br/>be called: <br/></span>{this.props.friend.displayName}</CardSubtitle>
            <br/>
            <CardSubtitle><span style={{fontSize: "1.2rem", fontWeight: "bold"}}>About:<br/> </span>{this.props.friend.about} </CardSubtitle>
            </div>
              }
              <Row className="scroll" style={{maxHeight: "500px", overflow: "auto", marginLeft: "4rem"}}>
              {this.props.friend !== null && this.props.userMessageList !==null &&
              this.props.userMessageList.map((message)=>{
                if(this.props.userMessageList !==null){
                  return <UserMessageCard messages={message} key={message.id}></UserMessageCard>
                } return ""
                })}
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


    
     
