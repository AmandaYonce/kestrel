import React from "react";
//import Spinner from "react-spinkit";
//import { connect } from "react-redux";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { CardBody, CardTitle, Col} from 'reactstrap';
import SmallIcon from "../../../images/owl-black-square-single.png"


class RegistrationForm extends React.Component {
  

  render() {
    
    return (
      <React.Fragment>
        <CardBody>
          <CardTitle style={{"fontSize": "40px", "font-family": 'Poppins'}}>New User Registration</CardTitle>
        <Form >
           
           <Form.Row>
            <Form.Group as={Col} md="6" id="login-form" >
            <Form.Label  style={{ "fontSize": "25px", "font-family": 'Poppins'}} htmlFor="username">Username</Form.Label>
            <Form.Control style={{"width": "250px"}} type="text" placeholder="Username" name="username" autoFocus required onChange={this.handleChange}/>
            </Form.Group>
         
            <Form.Group as={Col} md="6" id="login-form" >
            <Form.Label style={{"fontSize": "25px", "font-family": 'Poppins'}} htmlFor="displayname">Display Name</Form.Label>
            <Form.Control style={{"width": "250px"}} type="text" placeholder="Display Name" name="username" autoFocus required onChange={this.handleChange}/>
            </Form.Group>
            </Form.Row>

            <Form.Row>
          <Form.Group as={Col} md="6" id="login-form" >
          <Form.Label style={{"fontSize": "25px", "font-family": 'Poppins'}} htmlFor="picturelocation">Picture Location</Form.Label>
          <Form.Control style={{"width": "250px"}} type="text" placeholder="Picture Location" name="username" autoFocus required onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group as={Col} md="6" id="login-form" >
          <Form.Label style={{"fontSize": "25px", "font-family": 'Poppins'}} htmlFor="about">About</Form.Label>
          <Form.Control style={{"width": "250px"}} type="text" placeholder="About" name="username" autoFocus required onChange={this.handleChange}/>
          </Form.Group>
            </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="6" id="login-form" onSubmit="">
            <Form.Label style={{"fontSize": "25px", "font-family": 'Poppins'}} htmlFor="password">Password</Form.Label>
            <Form.Control style={{"width": "250px"}} type="password" placeholder="Password" name="password" required onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group as={Col} md="6" id="login-form" onSubmit="">
            <Form.Label style={{"fontSize": "25px", "font-family": 'Poppins'}} htmlFor="password">Repeat Password</Form.Label>
            <Form.Control style={{"width": "250px"}} type="password" placeholder="Repeat Password" name="password" required onChange={this.handleChange}/>
          </Form.Group>
          </Form.Row>

          <Button variant="secondary" type="submit" style={{ "fontSize": "28", "backgroundColor": "#333333"}} >
          <img src={SmallIcon} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px"}} />Register
          </Button>
        </Form>
        </CardBody>
      </React.Fragment>
    );
  }
}

export default RegistrationForm