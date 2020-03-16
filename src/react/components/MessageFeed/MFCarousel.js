import React, { Component } from 'react';
import HolderImage from "../../../images/owl-icon.png"
import { connect } from "react-redux";
import { getMessages } from "../../../redux/messages/getMessages";
import {Card, CardBody, Button, CardTitle, Row} from 'reactstrap';
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
        <Card>
        <CardBody >
          <img
          className="d-block"
          src={HolderImage}
          alt="First slide"
          style={{width: "100px"}}
        />
        </CardBody>
        </Card>
        )}
        return (
          <Card style={{margin: "0 auto",}} className="scratchBackground">
            <CardBody className="pt-0">
          <CardTitle style={{color: "#576490", fontSize: "3.2rem", fontFamily: 'Odibee Sans', margin: "0"}} className="text-center">Message Feed</CardTitle>
            <Row>
          <CardBody style={{ paddingTop: "0", paddingBottom: "0", display: "inline-Block"}} className="rounded text-center">
          <ButtonGroup>
            <Button
            type="submit"
            style={{ color: "black", backgroundColor: "#c9CAD9"}}
            onClick={this.handleAllMessageSwitch}>
              All 
            </Button>
            <Button
            className="rounded"
            type="submit"
            style={{ color: "black", backgroundColor: "#c9CAD9"}}
            onClick={this.handleMyMessageSwitch}>
              Mine
            </Button>
                <Form.Control ref={this.input} className="form-control" style={{"width": "170px"}} type="search" placeholder="User Name Search" name="user"  onChange={this.handleChange}/>
            <Button
            className= "rounded"
            type="submit"
            style={{ color: "black", backgroundColor: "#c9CAD9" }}
            onClick={this.handleSearchMessageSwitch}>
              Search
            </Button>
            </ButtonGroup>
          </CardBody>
          </Row>
          <Row className="scroll" style={{maxHeight: "500px", overflow: "auto"}}>
          <CardBody style={{padding: "0 5px"}} className= "w-100 flex-fill">
        { this.state.allMessages===true && this.props.messages.map(message=>(
            <MessageCard
              message={message}
              key={message.id}>
              </MessageCard>
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
            </CardBody>
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


       