import React, { Component } from 'react';
import {
    Card, CardImg, CardBody, Col
  } from 'reactstrap';
import { userInfo } from "../../../redux/account/userInfo"
import { connect } from "react-redux";
import {domain} from "../../../redux/helpers"
import Button from 'react-bootstrap/Button'
import {editPhoto} from "../../../redux/account/editPhoto"
import EditPhotoModal from "./EditPhotoModal"
import Photo from "../../../images/photo.png"
import Placeholder from "../../../images/photoPlaceholder.png"

  class AccountPhoto extends Component {
    state = { photoModal: false};

  toggle=()=>{
    const newState=!this.state.photoModal
    this.setState({photoModal:newState})
  }


    render() {

      if(this.props.details===null || this.props===null){
        this.props.userInfo()
      return (
        <Col>
        <Card style={{ marginTop: 100, backgroundColor: "transparent" }}>
        <CardBody  >
            <CardImg top width="100%" 
            src={Placeholder} alt="Kwitter Icon" 
            style={{ width: 335 }} />
            </CardBody>
            
        </Card>
         <Button variant="secondary" 
         type="submit"  
         onClick={this.toggleDeleteUser}
         style={{ "fontSize": "28", "backgroundColor": "aliceBlue", "color": "black", boxShadow: "1.5px 1.5px 1.5px 1.5px #324164" }}>
         <img src={Photo} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
       Add/Edit Photo
       </Button>
       </Col>
      )}
      
      return (
        <Col className="text-center">
        <Card style={{ marginTop: 100, backgroundColor: "transparent" }}>
        <CardBody >
          {this.props.details.pictureLocation===null &&  
           <CardImg top width="100%" 
           src={Placeholder} alt="Kwitter Icon" 
           />
          
          }
          {this.props.details.pictureLocation !== null &&
            <CardImg top width="100%" 
            src={domain+this.props.details.pictureLocation} alt="Kwitter Icon" 
            className="img-fluid" 
            />
          }
            </CardBody>
        </Card>
        <Button variant="secondary"  
                  onClick={(e)=>{
                    this.toggle()
                  }}
                  className="btn-lg"
                  style={{ "fontSize": "28", "backgroundColor": "#DFD8D2", "color": "black", fontFamily: 'Boogaloo, cursive', boxShadow: "1.5px 1.5px 1.5px 1.5px #324164" }}>
                <img src={Photo} alt="avatar"  style={{ "width": "40px", "paddingRight": "5px" }} />
                Add/Edit Photo
            </Button>

            <EditPhotoModal 
            modal={this.state.photoModal}
            toggle={this.toggle}>
            </EditPhotoModal>
        </Col>
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
  )(AccountPhoto);