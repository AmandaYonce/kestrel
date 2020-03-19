import React, { Component } from 'react';
import { connect } from "react-redux";
import { getMessages } from "../../../redux/messages/getMessages";
import {CardBody, CardSubtitle, CardText} from 'reactstrap';
import {handleLike, handleUnlike} from "../../../redux/messages/likeUnlike"
import {deleteMessage} from "../../../redux/messages/deleteMessage"
import {login} from "../../../redux/auth"
import "../../main.css"
import thumb from "../../../images/likethumbround.png"
import ReactTimeAgo from 'react-time-ago'
import Trash from "../../../images/trash.png"
import User from "../../../images/user.png"
import line from "../../../images/line.png"
import bluethumb from "../../../images/bluelikethumbround.png"

class MessageCard extends Component {
  state = {};

    handleDeleteMessage=(event, messageID)=>{
        this.props.deleteMessage(event, messageID)
      }

    render(){
      
        return(

            <React.Fragment key={this.props.message.id}>
            <CardBody key={this.props.message.id} className="rounded" style={{padding: "15px"}}>
          
          <CardSubtitle style={{ fontSize: '2rem', color: "black", fontFamily: 'Dosis', }}>{this.props.message.text}</CardSubtitle>
          
            <CardText style={{"fontSize": "1.2em", "marginBottom": "1px"}}>
            <img src={User} alt="avatar" style={{width: "30px", paddingRight: "5px"}} className="rounded-circle"/>
              {this.props.message.username}
             
              </CardText>
            <CardText style={{"fontSize": "1em", "marginBottom": "1px"}}><ReactTimeAgo date={this.props.message.createdAt} /></CardText>
              
                
                {this.props.message.likes.filter((each)=>{ if (each.username.includes(this.props.user)===true) { return true} else {return false}}).length===0 &&
                <img src={thumb} alt="thumbsup" onClick={e=>this.props.handleLike(e, this.props.message.id)} style={{width: "30px", paddingRight: "8px"
                }} />
                }

                {this.props.message.likes.filter((each)=>{ if (each.username.includes(this.props.user)===true) { return true} else {return false}}).length===1 &&
                <img src={bluethumb} alt="thumbsup" onClick={e=>this.props.handleLike(e, this.props.message.id)} style={{width: "30px", paddingRight: "8px"}} />
                }
                <span style={{fontSize: "1.5em"}}>{this.props.message.likes.length}</span>

               

                {/*this.props.message.likes.filter((each)=>{ if (each.username.includes(this.props.user)===true) {return true} else {return false}}).length===1 &&
                  <img src={Bookmark} alt="bookmark" style={{width: "30px", paddingLeft: "5px"}}/>
              */}
             
              {this.props.message.username===this.props.user &&
               <img src={Trash} 
               alt="trashcan"
               onClick={(event)=>this.handleDeleteMessage(event, this.props.message.id)}
               style={{width: "30px", paddingLeft: "5px"}}/>
                  }
                  <br/>
              <img src={line} alt="line" style={{width: "40rem"}} />
              </CardBody>
            
            </React.Fragment>

        )
    }

}

export default connect(
    state=>({
        user: state.auth.login.result.username,
        messages: state.messages.getMessages.result,
        
    })
    , {getMessages, handleLike, handleUnlike, deleteMessage, login})(MessageCard);


