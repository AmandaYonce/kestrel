import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../../redux";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
        
        <Form style={{'margin':"200px 100px"}} onSubmit={this.handleLogin}>
        <Form.Group id="login-form" >
          <Form.Label style={{"fontSize": "30px", "font-family": 'Poppins'}} htmlFor="username">Username</Form.Label>
          <Form.Control style={{"width": "300px"}} type="text" placeholder="Username" name="username" autoFocus required onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group id="login-form" onSubmit={this.handleLogin}>
            <Form.Label style={{"fontSize": "30px", "font-family": 'Poppins'}} htmlFor="password">Password</Form.Label>
            <Form.Control style={{"width": "300px"}} type="password" placeholder="Password" name="password" required onChange={this.handleChange}/>
          </Form.Group>

          <Button variant="secondary" type="submit" disabled={loading}>
            Login
          </Button>

        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Form>
        
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