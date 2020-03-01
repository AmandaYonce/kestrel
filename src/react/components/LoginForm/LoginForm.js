import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../../redux";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { CardBody, CardTitle } from 'reactstrap';
import SmallIcon from "../../../images/owl-black-square-single.png"

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <CardBody>
          <CardTitle style={{"fontSize": "40px", "fontFamily": 'Poppins'}}>Existing User Login</CardTitle>
        <Form  onSubmit={this.handleLogin}>
        <Form.Group id="login-form" >
          <Form.Label style={{"fontSize": "30px", "fontFamily": 'Poppins'}} htmlFor="username">Username</Form.Label>
          <Form.Control style={{"width": "300px"}} type="text" placeholder="Username" name="username" autoFocus required onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group id="login-form" onSubmit={this.handleLogin}>
            <Form.Label style={{"fontSize": "30px", "fontFamily": 'Poppins'}} htmlFor="password">Password</Form.Label>
            <Form.Control style={{"width": "300px"}} type="password" placeholder="Password" name="password" required onChange={this.handleChange}/>
          </Form.Group>

          <Button variant="secondary" type="submit" disabled={loading} style={{ "fontSize": "28", "backgroundColor": "#333333" }}>
          <img src={SmallIcon} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
            Login
          </Button>

        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Form>
        </CardBody>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    result: state.auth.login.result,
    loading: state.auth.login.loading,
    error: state.auth.login.error
  }),
  { login }
)(LoginForm);