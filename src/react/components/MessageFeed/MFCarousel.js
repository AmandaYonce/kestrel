import React, { Component } from 'react';
import HolderImage from "../../../images/messagebackground.png"
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import { getMessages } from "../../../redux/messages/getMessages";
import thumbsUp from "../../../images/thumb.png"
import {Card, CardBody, CardSubtitle, CardText} from 'reactstrap';
import {handleLike, handleUnlike} from "../../../redux/messages/likeUnlike"


class MFCarousel extends Component{

  componentDidMount(){
    this.props.getMessages()

  };   
  
    render(){
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
              onClick={e=>this.props.handleLike(e, message.id)} 
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
    getMessages, handleLike, handleUnlike
  }
  
 export default connect(mapStateToProps, mapDispatchToProps)(MFCarousel);


          