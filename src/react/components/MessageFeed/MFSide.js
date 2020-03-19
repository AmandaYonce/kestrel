import React, { Component, Fragment } from 'react';
import {Card, CardBody, CardText, CardSubtitle, Row, Col, CardTitle} from 'reactstrap';
  import { getMessages } from "../../../redux/messages/getMessages";
  import { connect } from "react-redux";
  import "../../../react/main.css"
  import "../../main.css"
  import User from "../../../images/user.png"
  import ReactTimeAgo from 'react-time-ago'



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
         
      return (
        <Fragment>
        <Card  style={{backgroundColor: "transparent", minHeight: "10rem", minWidth: "12rem"}} className="text-center bowtie">
          <CardTitle style={{color: "#576490", fontSize: "2.7rem", fontFamily: 'Odibee Sans', margin: "0"}}>Bookmarks</CardTitle>
          <Row className="scroll text-center" style={{height: "500px", overflow: "auto"}}>
            <Col md-2></Col>
        <Col md-7>
        {likesarray.map(each=>(
          <CardBody className = "scratchBackground rounded" style={{border: "2px solid silver", padding: "15px", width: "30rem"}}>
                <CardSubtitle style={{"fontSize": "1.5em", "marginBottom": "1px"}}>{each.text}</CardSubtitle>
                <CardText style={{"fontSize": "1em", "marginBottom": "1px"}}> <ReactTimeAgo date={each.createdAt} /></CardText>
                <CardText style={{"fontSize": "1.2em", "marginBottom": "1px"}}>
            <img src={User} alt="avatar" style={{width: "30px", paddingRight: "5px"}} className="rounded-circle"/>{each.username}</CardText>
          </CardBody>
        ))}
        </Col>
        <Col md-3></Col>
        </Row>
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


  