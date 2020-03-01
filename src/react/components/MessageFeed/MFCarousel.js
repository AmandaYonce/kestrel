import React, { Component } from 'react';
//import {Carousel} from 'react-bootstrap/Carousel'
import HolderImage from "../../../images/messagebackground.png"
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import { getMessages } from "../../../redux/messages/getMessages";
import thumbsUp from "../../../images/thumb.png"
//import {likeUnlike}  from "../../../redux/messages/likeUnlike"
import {
  Card, CardBody,
  CardSubtitle, CardText
} from 'reactstrap';


class MFCarousel extends Component{

  componentDidMount(){
    this.props.getMessages()
  };

  /*
  handleLike = (e, messageID) =>{
    this.props.likeUnlike(messageID)
  }
  */
  

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
          <React.Fragment>
            <CardBody key={message.id} style={{"border": "2px solid black"}}>
          
          <CardSubtitle className="text-secondary mb-3 font-weight-normal text-uppercase" style={{ fontSize: '0.8rem' }}></CardSubtitle>
          
          <CardText>
              <React.Fragment>
              <h2 style={{"fontSize": "2em"}}>{message.text}</h2>
              <h4 style={{"fontSize": "1em"}}>{message.username}</h4>
              <br/>
              <Button type="submit" 
              //onClick={this.handleLike(message.id)} 
              style={{ "backgroundColor": "#d6e7e5", "border": "2px solid black", "padding": '0 3px', "color": "black", "fontSize": "20px", "margin":"0"}}>
                <img src={thumbsUp} style={{"width": "25px", "paddingRight": "3px"}} alt="like"></img>
                {message.likes.length}
                </Button>
              </React.Fragment>
          </CardText>
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
    error: state.messages.getMessages.error
  }
}

  const mapDispatchToProps={
    getMessages,
    //likeUnlike
  }
  
 export default connect(mapStateToProps, mapDispatchToProps)(MFCarousel);


          