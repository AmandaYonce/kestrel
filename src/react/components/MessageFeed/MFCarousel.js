import React, { Component } from 'react';
import HolderImage from "../../../images/messagebackground.png"
import { connect } from "react-redux";
import { getMessages } from "../../../redux/messages/getMessages";
import {Card, CardBody, Button} from 'reactstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {handleLike, handleUnlike} from "../../../redux/messages/likeUnlike"
import {deleteMessage} from "../../../redux/messages/deleteMessage"
import {login} from "../../../redux/auth"
import Form from 'react-bootstrap/Form'
import MessageCard from "./MessageCard"

class MFCarousel extends Component{
  state={
    render: true,
    allMessages: true,
    myMessages: false,
    searchMessages: false,
    userSearch: ""
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
        <CardBody>
          <img
          className="d-block w-100"
          src={HolderImage}
          alt="First slide"
        />
        </CardBody>
        </Card>
        )}
        return (
          <Card style={{"backgroundColor": "#faf9f5", "border" : "none"}}>
          <CardBody style={{display: "flex"}}>
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
                <Form.Control className="form-control" style={{"width": "170px"}} type="search" placeholder="User Name Search" name="user"  onChange={this.handleChange}/>
            <Button
            type="submit"
            style={{ fontSize: "28", backgroundColor: "#333333" }}
            onClick={this.handleSearchMessageSwitch}>
              Search
            </Button>
            </ButtonGroup>
          </CardBody>

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


          
 /*<React.Fragment key={message.id}>
            <CardBody key={message.id} style={{"border": "2px solid black", "backgroundColor": "#d6e7e5", padding: "5px"}}>
          
          <CardSubtitle className="text-secondary mb-3 font-weight-normal text-uppercase" style={{ fontSize: '0.8rem' }}></CardSubtitle>
          
            <CardText style={{"fontSize": "2em", "marginBottom": "5px"}}>{message.text}</CardText>
            <CardText style={{"fontSize": "1em", "marginBottom": "5px"}}>{message.username}</CardText>
            <CardText style={{"fontSize": "1em", "marginBottom": "5px"}}>{Date(message.createdAt)}</CardText>
              <br/>
              <Row>
                <Col>
              <Button type="submit" 
              onClick={e=>this.props.handleLike(e, message.id)} 
              style={{ "backgroundColor": "#faf9f5", "border": "2px solid black", "padding": '0 3px', "color": "black", "fontSize": "20px", "margin":"0"}}>
                <img src={thumbsUp} style={{"width": "25px", "paddingRight": "3px"}} alt="like"></img>
                {message.likes.length}
                </Button>
                </Col >
              {message.username===this.props.user &&
                <Col className= "float-right">
                <Button type="submit" onClick={(event)=>this.handleDeleteMessage(event, message.id)}
                variant="secondary"
                style={{ fontSize: "28", backgroundColor: "salmon", padding: "0 3px 0 0 " }}
                className= "float-right"
              >
                Delete Message
                </Button>
                </Col>
                  }
                  </Row>
              </CardBody>
            <br/>
            </React.Fragment>*/