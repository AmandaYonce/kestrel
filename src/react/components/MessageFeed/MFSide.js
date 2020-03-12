import React, { Component, Fragment } from 'react';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  import { getMessages } from "../../../redux/messages/getMessages";
  import { connect } from "react-redux";
  import "../../../react/main.css"
  import empty from "../../../telephoneImages/empty.png"
  import blurb from "../../../telephoneImages/textBlurb.png"
  import "../../main.css"



  class MFSide extends Component {
    state={
      activeIndex: 0,
      animating: false,
      likesCount: 0 
    }

  next = () => {
    if (this.state.animating) 
    return
    const nextIndex = this.state.activeIndex === this.props.messages.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
   
  }

  check=()=>{
    if(this.state.activeIndex>this.state.likesCount)
      this.setState({activeIndex: 0})
  }

  previous = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.messages.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
    console.log(this.state)
  }

  goToIndex = (newIndex) => {
    if (this.state.animating) return;
    this.setState({activeIndex: newIndex});
    console.log(this.state)
  }

  handleLikesCount = (total)=>{
    this.setState({likesCount: total})
  }

    render() {

      if(this.props.messages === null){
        return (
          <Card style={{backgroundColor: "#C5C7CB"}}>
          <CardBody>
            <img
            className="d-block w-100"
            src={blurb}
            alt="First slide"
          />
          </CardBody>
          </Card>
          )} else {
          const likesarray=[]
          const likes = this.props.messages.map((each)=>{
              if(each.likes.length>0){
                each.likes.map((like)=>{
                  if(like.username===this.props.username){
                    likesarray.push(each)
                  }
                })
              }  
              return likesarray
          })
         
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
                className="blurbBackground"
              >
                <CarouselCaption captionHeader={message.text}
                captionText={message.username} />
                <img src={empty} style={{height: "220px"}}/>
            
              
              </CarouselItem>
              
              )
              })
              
      return (
        <Fragment>
        <Card style={{ border: "5px solid #324164", maxWidth: "320px", margin: "0 auto"}} className="scratchBackground" >
       
        <CardBody >
                <CardTitle className="h1 mb-2 pt-2 font-weight-bold " style={{color: "black"}}>Bookmarks</CardTitle>
                <CardSubtitle className="h3 mb-2 pt-2 font-weight-bold " style={{color: "black"}}>Like a message to bookmark it here</CardSubtitle>
        </CardBody>
        <CardBody>
                <Carousel  
                activeIndex={this.state.activeIndex}
                next={this.next}
                previous={this.previous}
                >
                  
                  <CarouselIndicators items={slides} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                  {slides}
                
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
               
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


  