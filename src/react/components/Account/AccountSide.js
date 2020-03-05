import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
  } from 'reactstrap';
import HolderImage from "../../../images/owl-white-background.png"
import { userInfo } from "../../../redux/account/userInfo"
import { connect } from "react-redux";
import {domain} from "../../../redux/helpers"




  class AccountSide extends Component {

    render() {

      if(this.props.details===null || this.props===null){
        this.props.userInfo()
      return (
        <Card style={{ marginTop: 100 }}>
        <CardBody  >
            <CardImg top width="100%" 
            src={HolderImage} alt="Kwitter Icon" 
            className="img-fluid rounded-circle" 
            style={{ width: 335 }} />
            </CardBody>
        </Card>
      )}
      
      return (
        <Card style={{ marginTop: 100 }}>
        <CardBody >
            <CardImg top width="100%" 
            src={domain+this.props.details.pictureLocation} alt="Kwitter Icon" 
            className="img-fluid rounded-circle" 
            style={{ width: 335}} />
            </CardBody>
        </Card>
      )
    }
    
  }
  
  export default connect(
    state => ({
      details: state.userInfo.userInfo.result,
      loading: state.userInfo.userInfo.loading,
      error: state.userInfo.userInfo.error,
    }),
    { userInfo }
  )(AccountSide);