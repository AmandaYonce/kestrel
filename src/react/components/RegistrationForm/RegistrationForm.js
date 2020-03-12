import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CardBody, CardTitle, Col } from "reactstrap";
import SmallIcon from "../../../images/owl-black-square-single.png";
import { register } from "../../../redux/stateReducers/registrationForm/registrationForm";
import GoogleLogin from "react-google-login"

class RegistrationForm extends React.Component {
  state = { username: "", displayName: "", password: "" };
  handleRegistration = e => {
    e.preventDefault();
    this.props.register(this.state);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  responseGoogle=(response)=>{
    console.log(response)
    //this.setState({redirect: true})
    const googleRegisterData={
      username: response.profileObj.googleId.slice(12),
      displayName: response.profileObj.givenName,
      password: response.profileObj.googleId.slice(12),
      
    }
    console.log(googleRegisterData)
    this.props.register(googleRegisterData)
  }

  render() {
    return (
      <React.Fragment>
        <CardBody>
          <CardTitle style={{ fontSize: "40px", fontFamily: "Poppins" }}>
            New User Registration
          </CardTitle>
          <Form onSubmit={this.handleRegistration}>
            <Form.Row>
              <Form.Group as={Col} md="6" id="login-form">
                <Form.Label
                  style={{ fontSize: "25px", fontFamily: "Poppins" }}
                  htmlFor="username"
                >
                  Username
                </Form.Label>
                <Form.Control
                  style={{ width: "250px" }}
                  type="text"
                  placeholder="Username"
                  name="username"
                  autoFocus
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} md="6" id="login-form">
                <Form.Label
                  style={{ fontSize: "25px", fontFamily: "Poppins" }}
                  htmlFor="displayname"
                >
                  Display Name
                </Form.Label>
                <Form.Control
                  style={{ width: "250px" }}
                  type="text"
                  placeholder="Display Name"
                  name="displayName"
                  autoFocus
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6" id="login-form" onSubmit="">
                <Form.Label
                  style={{ fontSize: "25px", fontFamily: "Poppins" }}
                  htmlFor="password"
                >
                  Password
                </Form.Label>
                <Form.Control
                  style={{ width: "250px" }}
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Button
              variant="secondary"
              type="submit"
              style={{ fontSize: "28", backgroundColor: "#333333" }}
            >
              <img
                src={SmallIcon}
                alt="avatar"
                className="img-fluid rounded-circle"
                style={{ width: "40px", paddingRight: "5px" }}
              />
              Register
            </Button>

            <GoogleLogin 
                        clientId="209391469626-4urq7enr97m6dhe001jr4921d0dvbvog.apps.googleusercontent.com"
                        buttonText="Register"
                        onSuccess={response=>this.responseGoogle(response)}
                        onFailure={response=>this.responseGoogle(response)}
                        cookiePolicy={'single_host_origin' }
                        />
          </Form>
        </CardBody>
      </React.Fragment>
    );
  }
}

//export default RegistrationForm;
export default connect(
  state => ({
    result: state.register.register.result,
    loading: state.register.register.loading,
    error: state.register.register.error
  }),
  { register }
)(RegistrationForm);
