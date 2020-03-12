import React, { Component } from 'react';
import HolderImage from "../../../images/messagebackground.png"
import { connect } from "react-redux";
import { getMessages } from "../../../redux/messages/getMessages";
import {Card, CardBody, Button, Row, CardTitle} from 'reactstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {handleLike, handleUnlike} from "../../../redux/messages/likeUnlike"
import {deleteMessage} from "../../../redux/messages/deleteMessage"
import {login} from "../../../redux/auth"
import Form from 'react-bootstrap/Form'
import MessageCard from "./MessageCard"

class MFCarousel extends Component{
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  state={
    render: true,
    allMessages: true,
    myMessages: false,
    searchMessages: false,
    userSearch: "",
    
  }

  componentDidMount(){
    this.props.getMessages()
    this.setState({render: !this.state.render})
  };   

  handleDeleteMessage=(event, messageID)=>{
    this.props.deleteMessage(event, messageID)
  }

  handleChange=event=>{
    this.setState({userSearch: event.target.value})
  }

  handleAllMessageSwitch=event=>{
    if(this.state.allMessages===false){
      this.setState({allMessages: true})
    } else {
    this.setState({allMessages: true})
    if(this.state.searchMessages===true){
      this.setState({searchMessages: false})
    }
    if(this.state.myMessages===true){
      this.setState({myMessages: false})
    }
  }
  
}

  handleSearchMessageSwitch=event=>{
    if(this.state.searchMessages===true){
      this.setState({searchMessages: false})
      this.setState({allMessages: true})
    } else {
    this.setState({searchMessages: true})
    if(this.state.allMessages===true){
      this.setState({allMessages: false})
    }
    if(this.state.myMessages===true){
      this.setState({myMessages: false})
    }
  }

  this.input.current._valueTracker.setValue(this.input.current.value="User Name Search")
}

  handleMyMessageSwitch=event=>{
   
    if(this.state.myMessages===true){
      this.setState({myMessages: false})
      this.setState({allMessages: true})
    } else {
    this.setState({myMessages: true})
    if(this.state.searchMessages===true){
      this.setState({searchMessages: false})
    }
    if(this.state.allMessages===true){
      this.setState({allMessages: false})
    }
  }
 
}
    render(){
    if(this.props.messages === null){
      return (
        <Card >
        <CardBody >
          <img
          className="d-block w-100"
          src={HolderImage}
          alt="First slide"
        />
        </CardBody>
        </Card>
        )}
        return (
          <Card style={{backgroundColor: "transparent"}} >
            <CardTitle style={{fontSize: "4rem", fontFamily: "'Odibee Sans'", margin: "0"}} className="text-center">Message Feed</CardTitle>
            <Row>
          <CardBody style={{display: "flex", paddingTop: "0", paddingBottom: "0"}} className="rounded">
            
            <ButtonGroup>
            <Button
            type="submit"
            style={{ fontSize: "28", backgroundColor: "#333333"}}
            onClick={this.handleAllMessageSwitch}>
              All Messages
            </Button>
            <Button
            type="submit"
            style={{ fontSize: "28", backgroundColor: "#333333"}}
            onClick={this.handleMyMessageSwitch}>
              My Messages
            </Button>
                <Form.Control ref={this.input} className="form-control" style={{"width": "170px"}} type="search" placeholder="User Name Search" name="user"  onChange={this.handleChange}/>
            <Button
            type="submit"
            style={{ fontSize: "28", backgroundColor: "#333333" }}
            onClick={this.handleSearchMessageSwitch}>
              Search
            </Button>
            </ButtonGroup>
          </CardBody>
          </Row>
          <Row className="scroll" style={{maxHeight: "700px", overflow: "auto"}}>
          <CardBody>
        { this.state.allMessages===true && this.props.messages.map(message=>(
            <MessageCard
              message={message}
              key={message.id}></MessageCard>
        ))}

        { this.state.myMessages===true && this.props.messages.map(message=>{
            if(message.username===this.props.user){
              return <MessageCard 
              key={message.id}
              message={message}>
              </MessageCard>
            }return "" 
            })}

        {this.state.searchMessages===true && this.props.messages.map(message=>{
          if(message.username===this.state.userSearch){
            return <MessageCard 
            key={message.id}
            message={message}>
            </MessageCard>
          }return "" 
        })}
            </CardBody>
            </Row>
    </Card>
        )
    }
  }

const mapStateToProps=state=>{
  return{
    messages: state.messages.getMessages.result,
    loading: state.messages.getMessages.loading,
    error: state.messages.getMessages.error,
    user: state.auth.login.result.username
  }
}

  const mapDispatchToProps={
    getMessages, handleLike, handleUnlike, deleteMessage, login
  }
  
 export default connect(mapStateToProps, mapDispatchToProps)(MFCarousel);


       