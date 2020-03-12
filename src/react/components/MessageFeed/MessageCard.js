import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import { getMessages } from "../../../redux/messages/getMessages";
import thumbsUp from "../../../images/thumb.png"
import {CardBody, CardSubtitle, CardText, Row, Col} from 'reactstrap';
import {handleLike, handleUnlike} from "../../../redux/messages/likeUnlike"
import {deleteMessage} from "../../../redux/messages/deleteMessage"
import {login} from "../../../redux/auth"
import "../../main.css"


class MessageCard extends Component{
    state={

    }

    handleDeleteMessage=(event, messageID)=>{
        this.props.deleteMessage(event, messageID)
      }

    render(){
        return(

            <React.Fragment key={this.props.message.id}>
            <CardBody key={this.props.message.id} style={{"border": "6px solid #626666", padding: "5px"}} className="rounded scratchBackground">
          
          <CardSubtitle className="mb-3 font-weight-normal text-center" style={{ fontSize: '3rem', margin: "5px", color: "black", fontFamily: 'Boogaloo, cursive' }}>{this.props.message.text}</CardSubtitle>
          
            <CardText style={{"fontSize": "1em", "marginBottom": "1px"}}>{this.props.message.username}</CardText>
            <CardText style={{"fontSize": "1em", "marginBottom": "1px"}}>{Date(this.props.message.createdAt)}</CardText>
              <br/>
              <Row>
                <Col>
              <Button type="submit" 
              onClick={e=>this.props.handleLike(e, this.props.message.id)} 
              style={{ "backgroundColor": "#faf9f5", "border": "2px solid black", "padding": '0 3px', "color": "black", "fontSize": "20px", "margin":"0"}}>
                <img src={thumbsUp} style={{"width": "50px", "paddingRight": "3px"}} alt="like"></img>
                {this.props.message.likes.length}
                </Button>
                </Col >
              {this.props.message.username===this.props.user &&
                <Col className= "float-right">
                <Button type="submit" onClick={(event)=>this.handleDeleteMessage(event, this.props.message.id)}
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
            </React.Fragment>

        )
    }

}

export default connect(
    state=>({
        user: state.auth.login.result.username
    })
    , {getMessages, handleLike, handleUnlike, deleteMessage, login})(MessageCard);

