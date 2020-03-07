import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
  } from 'reactstrap';
import HolderImage from "../../../images/owl-white-background.png"
import { userInfo } from "../../../redux/account/userInfo"
import { connect } from "react-redux";
import {domain} from "../../../redux/helpers"
import Button from 'react-bootstrap/Button'
import SmallIcon from "../../../images/owl-black-square-single.png"
import {editPhoto} from "../../../redux/account/editPhoto"
import EditPhotoModal from "./EditPhotoModal"

  class AccountSide extends Component {
    state = { photoModal: false};

  toggle=()=>{
    const newState=!this.state.photoModal
    this.setState({photoModal:newState})
  }


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
            <Button variant="secondary" 
              type="submit"  
              onClick={this.toggleDeleteUser}
              style={{ "fontSize": "28", "backgroundColor": "aliceBlue", "color": "black" }}>
              <img src={SmallIcon} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
            Add/Edit Photo
            </Button>
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

            <Button variant="secondary"  
                  onClick={(e)=>{
                    this.toggle()
                  }}
                  style={{ "fontSize": "28", "backgroundColor": "aliceBlue", "color": "black" }}>
                <img src={SmallIcon} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
                Add/Edit Photo
            </Button>

            <EditPhotoModal 
            modal={this.state.photoModal}
            toggle={this.toggle}>
            </EditPhotoModal>
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
    { userInfo, editPhoto }
  )(AccountSide);