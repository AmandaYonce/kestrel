import React, { Component, Fragment } from 'react';
import {
    CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'reactstrap';
  import SmallIcon from "../../../images/owl-black-square-single.png"
  import Button from 'react-bootstrap/Button'
  import { userInfo } from "../../../redux/account/userInfo"
  import { connect } from "react-redux";
  import { Spinner } from 'reactstrap'
  import { EditUserModal } from "./EditUserModal"


class AccountMain extends Component {
  state = { modal: false};
  
  toggle=()=>{
    const newState=!this.state.modal
    this.setState({modal:newState})
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
        <CardBody style={{"backgroundColor": "#d6e7e5", "marginTop": "100px"}}>
    <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary" >{this.props.details.displayName}</CardTitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-normal text-uppercase" style={{ fontSize: '0.8rem' }}>{this.props.details.about}</CardSubtitle>
    <CardText className="text-secondary mb-4 font-weight-normal" style={{ fontSize: '0.95rem' }}>User Created: {Date(this.props.details.createdAt)}</CardText>
    <CardText className="text-secondary mb-4 font-weight-normal" style={{ fontSize: '0.95rem' }}>User Updated: {Date(this.props.details.updatedAt)}</CardText>
      </CardBody>
      <br/>

      <Button variant="secondary"   
      onClick={this.toggle}
      style={{ "fontSize": "28", "backgroundColor": "d6e7e5", "marginRight": "20px" }}>
          <img src={SmallIcon} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
            Edit User
          </Button>
         
      
          
         

      <Button variant="secondary" type="submit"  style={{ "fontSize": "28", "backgroundColor": "red" }}>
          <img src={SmallIcon} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
            Delete User
          </Button>
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

