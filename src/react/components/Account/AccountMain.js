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
  import phone from "../../../telephoneImages/phone3.png"
  import "../../main.css"


class AccountMain extends Component {
  state = { modal: false,
            passwordModal: false,
            deleteUserModal: false};
  
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
            <Spinner type="grow" color="warning" style={{ "width": '10rem', "height": '10rem', "marginTop": "100px"}} />
        </CardBody>
        </Fragment>
      )
      }
    return (
      
      <Fragment>
        <CardBody style={{"backgroundColor": "#D0D9D0", "marginTop": "100px", border: "8px solid #324164"}} className="rounded scratchBackground">
    <CardTitle className="h3 mb-2 pt-2 font-weight-bold" style={{color: "#6E6F72", fontSize: "4rem"}} >{this.props.details.displayName}</CardTitle>
        <CardSubtitle className=" mb-3 font-weight-normal text-uppercase" style={{ fontSize: '2rem', color: "#626666" }}>{this.props.details.about}</CardSubtitle>
    <CardText className=" mb-4 font-weight-normal" style={{ fontSize: '0.95rem', color: "#626666" }}>User Created: {Date(this.props.details.createdAt)}</CardText>
    <CardText className=" mb-4 font-weight-normal" style={{ fontSize: '0.95rem', color: "#626666" }}>User Updated: {Date(this.props.details.updatedAt)}</CardText>
      </CardBody>
      <br/>

      <Button variant="secondary"   
      onClick={this.toggle}
      className="btn-lg"
      style={{ "fontSize": "100", "backgroundColor": "#DFD8D2", "marginRight": "20px",  fontFamily: 'Boogaloo, cursive', color: "black" }}>
          <img src={phone} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
            Edit User
      </Button>

      <Button variant="secondary"   
      onClick={this.togglePassword}
      className="btn-lg"
      style={{ "fontSize": "100", "backgroundColor": "#DFD8D2", "marginRight": "20px", fontFamily: 'Boogaloo, cursive',color: "black" }}>
          <img src={phone} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
            Change Password
      </Button>
         
      <Button variant="secondary" 
      type="submit"  
      onClick={this.toggleDeleteUser}
      className="btn-lg"
      style={{ "fontSize": "100", "backgroundColor": " #DFD8D2",  fontFamily: 'Boogaloo, cursive', color: "black" }}>
          <img src={phone} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
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
          
      </Fragment>
    );
  }
  
}

export default connect(
  state => ({
    details: state.userInfo.userInfo.result,
    loading: state.userInfo.userInfo.loading,
    error: state.userInfo.userInfo.error,
  }),
  { userInfo }
)(AccountMain);

