import React, { Component, Fragment } from 'react';
import {
    Card, CardBody,
  } from 'reactstrap';
  import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  import { getMessages } from "../../../redux/messages/getMessages";
  //import {getFriends} from "../../../redux/messages/getMessages"
  import { connect } from "react-redux";
  import "../../../react/main.css"
  import empty from "../../../telephoneImages/empty.png"
  import "../../main.css"



  class MFSide extends Component {
    state={
      activeIndex: 0,
      animating: false,
      likesCount: 0
    }

  infinite=()=>{
    if(this.state.activeIndex>this.state.likesCount){
      this.setState({activeIndex: 0})
    }
  }

  next = () => {
    if (this.state.animating) 
    return
    const nextIndex = this.state.activeIndex === this.props.messages.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
    this.infinite()
    console.log(this.state)
  }

  previous = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.messages.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
    this.infinite()
    console.log(this.state)
  }

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({activeIndex: newIndex});
    this.infinite()
    console.log(this.state)
  }

  handleLikesCount = (total)=>{
    this.setState({likesCount: total})
  }

    render() {

      if(this.props.messages === null){
        return (
          <Card style={{backgroundColor: "transparent"}}>
          <CardBody className = "owlCard">
          
          </CardBody>
          </Card>
          )} else {
          const likesarray=[]
          const likes = this.props.messages.map((each)=>{
              if(each.likes.length>0 && each.username!==this.props.username){
                each.likes.filter((like)=>{
                  if(like.username===this.props.username){
                    likesarray.push(each)
                    return true
                  } return false
                })
              }  
              return likesarray
          })
          console.log(likes)
         
          const slides=likesarray.map((message)=>{
              return(
                <CarouselItem
                onExiting={() => {
                  this.setState({animating: true})
                  this.setState({likesCount: likesarray.length})
                }
                }
                onExited={() => this.setState({animating: false})}
                key={message.id}
                
              >
                <CarouselCaption captionHeader={message.text}
                captionText={message.username}
                 />
                <img src={empty} alt="" style={{height: "12rem"}}/>
              </CarouselItem>
              
              )
              })
              
      return (
        <Fragment>
        <Card  style={{backgroundColor: "transparent", minHeight: "10rem", minWidth: "12rem"}} className = "owlCard">
        <CardBody>
        <CardBody style={{padding: "0", minHeight: "100px" }}>
               
        </CardBody>
        <CardBody style={{padding: "0",}}>
                <Carousel  
                activeIndex={this.state.activeIndex}
                next={this.next}
                previous={this.previous}
                data-interval="500"
                pauseOnHover="false"
                onSlideEnd={this.infinite}
                >
                  
                  <CarouselIndicators items={slides} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
               
            </CardBody>
            </CardBody>
        </Card>
        
        </Fragment>
          
      );
      }
    }
    
  }
  
  export default connect(
    state=>({
      messages: state.messages.getMessages.result,
      username: state.auth.login.result.username
    }), {getMessages})(MFSide);


  