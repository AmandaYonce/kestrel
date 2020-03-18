import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMessages } from "../../../redux/messages/getMessages";
import {CardBody, CardSubtitle, CardText} from 'reactstrap';
import {handleLike, handleUnlike} from "../../../redux/messages/likeUnlike"
import {userMessages} from "../../../redux/messages/userMessages"
import "../../main.css"
import thumb from "../../../images/likethumbround.png"
import ReactTimeAgo from 'react-time-ago'
import User from "../../../images/user.png"
import Bookmark from "../../../images/bookmark.png"
import line from "../../../images/line.png"


class UserMessageCard extends Component{
  
   

    render(){
     
        return(
            
            <React.Fragment >
                {this.props.messages !==null &&
                
            <CardBody key={this.props.messages.id} className="rounded scratchBackground" style={{padding: "15px", border: "1px solid silver"}}>
          
          <CardSubtitle style={{ fontSize: '2rem', color: "black", fontFamily: 'Dosis', }}>{this.props.messages.text}</CardSubtitle>
          
            <CardText style={{"fontSize": "1.2em", "marginBottom": "1px"}}>
            <img src={User} alt="avatar" style={{width: "30px", paddingRight: "5px"}} className="rounded-circle"/>
              {this.props.messages.username}
             
              </CardText>
            <CardText style={{"fontSize": "1em", "marginBottom": "1px"}}><ReactTimeAgo date={this.props.messages.createdAt} /></CardText>
              
                <img src={thumb} alt="thumbsup" onClick={e=>{
                  this.props.handleLike(e, this.props.messages.id)
                  this.props.userMessages(this.props.messages.username)}} 
                style={{width: "30px", paddingRight: "8px"}} />
                <span style={{fontSize: "1.5em"}}>{this.props.messages.likes.length}</span>
                {this.props.messages.likes.filter((like)=>{ if (like.username.includes(this.props.user)===true) {return true} else {return false}}).length===1 &&
                  <img src={Bookmark} alt="bookmark" style={{width: "30px", paddingLeft: "5px"}}/>
                }
             
             
                  <br/>
              <img src={line} alt="line" style={{width: "10rem"}} />
              </CardBody>
                }
            </React.Fragment>

        )
    }

}

export default connect(
    state=>({
        user: state.auth.login.result.username,
       
    })
    , {getMessages, handleLike, handleUnlike, userMessages})(UserMessageCard);
