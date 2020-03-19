import React, { Component, Fragment } from 'react';
import {
    CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'reactstrap';
  import Button from 'react-bootstrap/Button'
  import { userInfo } from "../../../redux/account/userInfo"
  import { connect } from "react-redux";
  import { Spinner } from 'reactstrap'
  import EditUserModal  from "./EditUserModal"
  import PasswordModal from "./PasswordModal"
  import DeleteUserModal from "./DeleteUserModal"
  import "../../main.css"
  import Trash from "../../../images/trash.png"
  import Password from '../../../images/password.png'
  import Edit from "../../../images/edit.png"
  import ReactTimeAgo from 'react-time-ago'
  import {google} from "../../../redux/account/googleTracker"
 


class AccountMain extends Component {
  state = { modal: false,
            passwordModal: false,
            deleteUserModal: false,
            value: false,
            month: [0, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
          };

          

  componentDidMount(){
    if(this.props.googleStatus !== null){
    if(this.props.googleStatus.value===true){
    this.setState({value: true})
    }
    }

  }

 
  

  toggle=()=>{
    const newState=!this.state.modal
    this.setState({modal:newState})
    console.log(this.state)
  }

  togglePassword=()=>{
    const newState=!this.state.passwordModal
    this.setState({passwordModal:newState})
    console.log(this.state)
  }

  toggleDeleteUser=()=>{
    const newState=!this.state.deleteUserModal
    this.setState({deleteUserModal:newState})
    console.log(this.state)
  }
  

  render() {
    
    if(this.props.details===null || this.props===null){
      return (
        <Fragment>
        <CardBody>
            <Spinner type="grow" color="#D1D2F9" style={{ "width": '10rem', "height": '10rem', "marginTop": "100px"}} />
        </CardBody>
        </Fragment>
      )
      }
   
    return (
      
      <Fragment>
        <CardBody style={{ "marginTop": "100px", border: "3px solid #324164"}} className="rounded scratchBackground">
    <CardTitle className="h3 mb-2 pt-2 font-weight-bold" style={{color: "#6E6F72", fontSize: "4rem"}} >{this.props.details.displayName}</CardTitle>
        <CardSubtitle className=" mb-3 font-weight-normal text-uppercase" style={{ fontSize: '2rem', color: "#626666" }}>{this.props.details.about}</CardSubtitle>
    {this.props.details!==null &&
    <CardText className=" mb-4 font-weight-normal" style={{ fontSize: '1.1rem', color: "#626666" }}>
      User Since: {this.state.month[Number(this.props.details.createdAt.slice(5, 7))]+"-"+ this.props.details.createdAt.slice(8, 10) + "-"+ this.props.details.createdAt.slice(0, 4)}
      </CardText>
      }
    <CardText className=" mb-4 font-weight-normal" style={{ fontSize: '1.1rem', color: "#626666" }}>
      User Updated: <ReactTimeAgo date={this.props.details.updatedAt} />
      </CardText>
      </CardBody>
      <br/>

      <Button variant="secondary"   
      onClick={this.toggle}
      className="btn-lg"
      style={{ "fontSize": "100", "backgroundColor": "#DFD8D2", "marginRight": "20px",  fontFamily: 'Boogaloo, cursive', color: "black", boxShadow: "1.5px 1.5px 1.5px 1.5px #324164"  }}>
          <img src={Edit} alt="avatar"  style={{ "width": "40px", "paddingRight": "5px"}} />
            Edit User Info
      </Button>

      <Button variant="secondary" 
      disabled={this.state.value}  
      onClick={this.togglePassword}
      className="btn-lg"
      style={{ "fontSize": "100", "backgroundColor": "#DFD8D2", "marginRight": "20px", fontFamily: 'Boogaloo, cursive',color: "black", boxShadow: "1.5px 1.5px 1.5px 1.5px #324164" }}>
          <img src={Password} alt="avatar"  style={{ "width": "40px", "paddingRight": "5px" }} />
            Change Password
      </Button>
         
      <Button variant="secondary" 
      type="submit"  
      onClick={this.toggleDeleteUser}
      className="btn-lg"
      style={{ "fontSize": "100", "backgroundColor": " #DFD8D2",  fontFamily: 'Boogaloo, cursive', color: "black", boxShadow: "1.5px 1.5px 1.5px 1.5px #324164" }}>
          <img src={Trash} alt="avatar"  style={{ "width": "40px", "paddingRight": "5px" }} />
            Delete User
      </Button>

      <EditUserModal 
      modal={this.state.modal}
      toggle={this.toggle}>
      </EditUserModal>

      <DeleteUserModal 
      modal={this.state.deleteUserModal}
      toggle={this.toggleDeleteUser}>
      </DeleteUserModal>

      <PasswordModal 
      modal={this.state.passwordModal}
      toggle={this.togglePassword}>
      </PasswordModal>

      <CardBody style={{minHeight: "345px"}}></CardBody>
          
      </Fragment>
    );
  }
  
}

export default connect(
  state => ({
    details: state.userInfo.userInfo.result,
    loading: state.userInfo.userInfo.loading,
    error: state.userInfo.userInfo.error,
    googleStatus: state.google.google.result
  }),
  { userInfo, google }
)(AccountMain);

