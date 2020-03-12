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
  import HolderImage from "../../../images/messagebackground.png"
  import { connect } from "react-redux";



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
    console.log(this.state)
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
          <Card>
          <CardBody>
            <img
            className="d-block w-100"
            src={HolderImage}
            alt="First slide"
          />
          </CardBody>
          </Card>
          )} else {
          const likesarray=[]
          const likes = this.props.messages.map((each)=>{
              if(each.likes.length>0){
                each.likes.filter((like)=>{
                  if(like.username===this.props.username){
                    likesarray.push(each)
                    return true
                  } else {
                    return false
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
                dumb={likes}
                
              >
                 <img
                className="d-block w-100"
                src={HolderImage}
                alt="First slide"
              />
              <CarouselCaption captionHeader={message.text}
              captionText={message.username}/>
              </CarouselItem>
              )
              })
              
      return (
        <Fragment>
        <Card>
        <CardBody>
                <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Bookmarks</CardTitle>
                <CardSubtitle className="h5 mb-2 pt-2 font-weight-bold text-secondary">Like a message to bookmark it here</CardSubtitle>
                
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


  