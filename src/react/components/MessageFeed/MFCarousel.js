import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import HolderImage from "../../../images/messagebackground.png"
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import { getMessages } from "../../../redux/messages.js/getMessages";


class MFCarousel extends Component{

  componentDidMount(){
    this.props.getMessages()
  }
  
    render(){
    if(this.props.messages===null){
      return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HolderImage}
          alt="First slide"
        />
        </Carousel.Item>
        </Carousel>)
    }
    return (
        <Carousel>
        {this.props.messages.map(message=>(
        <Carousel.Item key={message.id}>
          <img
            className="d-block w-100"
            src={HolderImage}
            alt="First slide"
          />
          <Carousel.Caption>
              <React.Fragment>
              <h2>{message.text}</h2>
              <h4>{message.username}</h4>
              <Button type="submit" style={{"backgroundColor": "#d6e7e5"}}>
                <p style={{"color": "black", "fontSize": "20px", "margin":"0"}}>Like</p>
                </Button>
              </React.Fragment>
          </Carousel.Caption>
        </Carousel.Item>
          ))}
       </Carousel>
       
    );
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
    getMessages
  }
  
 export default connect(mapStateToProps, mapDispatchToProps)(MFCarousel);


  /*{this.props.messages.map(message=>(
        <Carousel.Item key={message.id}>
          <img
            className="d-block w-100"
            src={HolderImage}
            alt="First slide"
          />
          <Carousel.Caption>
              <React.Fragment>
              <h2>{message.text}</h2>
              <h4>{message.username}</h4>
              <Button type="submit" style={{"backgroundColor": "#d6e7e5"}}>
                <p style={{"color": "black", "fontSize": "20px", "margin":"0"}}>Like</p>
                </Button>
              </React.Fragment>
          </Carousel.Caption>
        </Carousel.Item>
          ))}*/
          