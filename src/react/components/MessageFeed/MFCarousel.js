import React, { Component } from 'react';
import HolderImage from "../../../images/messagebackground.png"
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import { getMessages } from "../../../redux/messages/getMessages";
import thumbsUp from "../../../images/thumb.png"
import {Card, CardBody, CardSubtitle, CardText} from 'reactstrap';
import {
  handleJsonResponse,
  jsonHeaders,
  domain
} from "../../../redux/helpers";
import {store} from "../../../redux/index"


const url=domain 

class MFCarousel extends Component{

  componentDidMount(){
    this.props.getMessages()
  };

  handleLike = (e, messageID) => {
        const state=store.getState()
        const token=state.auth.login.result.token

      fetch(url +"/likes", {
          method: "POST",
          headers: { Authorization: "Bearer "+ token, ...jsonHeaders},
          body: JSON.stringify({messageId: messageID})
      })
        .then(handleJsonResponse)
        .then(result => {
          if(result.statusCode===200){
            this.props.getMessages()
          } else if (result.statusCode===400){
            this.handleUnlike(messageID)
          }
        })
        .catch(err=> {
          if (err.statusCode===400){
          this.handleUnlike(messageID)
        }
      })
  }

  handleUnlike=(messageID)=>{
        const state=store.getState()
        const username=state.auth.login.result.username
        const token=state.auth.login.result.token

      fetch(url+"/messages/"+messageID, {
          method: "GET",
         
      })
        .then(handleJsonResponse)
        .then(result=> {
          result.message.likes.map(each=>{
            if(each.username===username){
                const likeID=each.id
                console.log(likeID)
              fetch(url+"/likes/"+likeID, {
                method: "DELETE",
                headers: { Authorization: "Bearer "+ token, ...jsonHeaders}
              })
              .then(handleJsonResponse)
              .then(result=>this.props.getMessages())
            }
            return each.id
          })
        })
          
        }
  
    render(){
      //const messages=Object.keys(this.props.messages).map(key=>this.props.messages[key])
    if(this.props.messages===null){
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
          
          <Card style={{"backgroundColor": "#faf9f5"}}>
        {this.props.messages.map(message=>(
          <React.Fragment key={message.id}>
            <CardBody key={message.id} style={{"border": "2px solid black"}}>
          
          <CardSubtitle className="text-secondary mb-3 font-weight-normal text-uppercase" style={{ fontSize: '0.8rem' }}></CardSubtitle>
          
            <CardText style={{"fontSize": "2em"}}>{message.text}</CardText>
            <CardText style={{"fontSize": "1em"}}>{message.username}</CardText>
              <br/>
              <Button type="submit" 
              onClick={e=>this.handleLike(e, message.id)} 
              style={{ "backgroundColor": "#d6e7e5", "border": "2px solid black", "padding": '0 3px', "color": "black", "fontSize": "20px", "margin":"0"}}>
                <img src={thumbsUp} style={{"width": "25px", "paddingRight": "3px"}} alt="like"></img>
                {message.likes.length}
                </Button>
              </CardBody>
            <br/>
            </React.Fragment>
        ))}
    </Card>
        )
    }
  }

const mapStateToProps=state=>{
  return{
    messages: state.messages.getMessages.result,
    loading: state.messages.getMessages.loading,
    error: state.messages.getMessages.error,
  }
}

  const mapDispatchToProps={
    getMessages,
  }
  
 export default connect(mapStateToProps, mapDispatchToProps)(MFCarousel);


          