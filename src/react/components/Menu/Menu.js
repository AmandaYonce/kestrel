import React from "react";
import { connect } from "react-redux";
import { logout } from "../../../redux";
import {Navbar, Nav, NavItem, Collapse, NavbarToggler} from 'reactstrap';

import { NavLink } from "react-router-dom"
import {login} from "../../../redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SmallIcon from "../../../images/owl-black-square-single.png"
import GoogleLogin from 'react-google-login'
import phone from '../../../telephoneImages/phone3.png'
import sign from '../../../telephoneImages/phoneSign.png'



//google client id 209391469626-1fdk4io2u5lcadmri9p6behjisl24a7r.apps.googleusercontent.com
//google client secret n7qcHKqBThUh_zC7UzFJyQXH


class Menu extends React.Component {
  constructor(props){
    super(props)
    this.toggle=this.toggle.bind(this)
    this.state={
      isOpen: false,
      username: "",
      password: "",
      redirect: false,
    }
  }
  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleChange=e=>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleLogin=e=>{
    e.preventDefault()
    this.props.login({username: this.state.username, password: this.state.password})
  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  responseGoogle=(response)=>{
    console.log(response)
    //this.setState({redirect: true})
    const googleLogInData={
      username: response.profileObj.googleId.slice(12),
      password: response.profileObj.googleId.slice(12)
    }
    console.log(googleLogInData)
    this.props.login(googleLogInData)
  }

  render() {
    const { loading } = this.props;
      if(this.props.isAuthenticated) {
        return (
        <div id="menu">
        <Navbar fixed="top" light expand="md" style={{backgroundColor: "#296379"}} >
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen}  navbar>
            <Nav className="mr-auto" navbar>
              <NavItem >
                  <img src={phone} alt="avatar" className="img-fluid" style={{ width: 100, paddingRight: 10 }} />
                  <img src={sign} alt="avatar" className="img-fluid" style={{ width: 300 }} />
                  
              </NavItem>
              </Nav>

        <Nav id="menu-links" className="justify-content-end">
        <NavItem>
          <NavLink  style={{"paddingRight": "30px", "fontSize":"45px", "color": "#faf9f5", "fontFamily": 'Odibee Sans'}} to="/messagefeed/:username">Message Feed</NavLink>
          </NavItem>
          <NavItem>
          <NavLink style={{"paddingRight": "30px", "fontSize":"45px", "color": "#faf9f5","fontFamily": 'Odibee Sans'}} to="/account/:username">
            Account
          </NavLink>
          </NavItem>
          <NavItem>
          <NavLink style={{"paddingRight": "20px", "fontSize":"45px", "color": "#faf9f5", "fontFamily": 'Odibee Sans'}} to="/" onClick={this.handleLogout}>
            Logout
          </NavLink>
          </NavItem>
        </Nav>
        </Collapse>
        </Navbar>
      </div>
        )
      } else {
    
    return (
      <div id="menu" >
        <Navbar fixed="top" light expand="md" style={{backgroundColor: "#296379"}} >
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem >
                  <img src={phone} alt="avatar" className="img-fluid" style={{ width: 100, paddingRight: 10 }} />
                  <img src={sign} alt="avatar" className="img-fluid" style={{ width: 300, paddingRight: "12px" }} />
                  
              </NavItem>
              </Nav>

            <Nav >
                <Form onSubmit={this.handleLogin} style={{display: "flex"}}>
                <NavItem>
                  <Form.Control style={{"width": "170px", "marginRight":"5px", border: "2px solid #007bff"}} type="text" placeholder="Username" name="username" autoFocus required onChange={this.handleChange}/>
                  <br/>
                    <Form.Control style={{"width": "170px", border: "2px solid #007bff"}} type="password" placeholder="Password" name="password" required onChange={this.handleChange}/>
                    </NavItem>
                    <NavItem style={{display: "flex"}}>
                      <Button type="submit" disabled={loading} style={{ "fontSize": "28", "backgroundColor": "white", marginRight: "10px", color: "black"}}>
                        <img src={phone} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
                          Login
                      </Button>
                      <GoogleLogin 
                        clientId="209391469626-4urq7enr97m6dhe001jr4921d0dvbvog.apps.googleusercontent.com"
                        buttonText="Log In"
                        onSuccess={response=>this.responseGoogle(response)}
                        onFailure={response=>this.responseGoogle(response)}
                        cookiePolicy={'single_host_origin' }
                        />

                  </NavItem>
                  </Form>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
             )
            }
  }
}

export default connect(
  state => ({
    logoutResult: state.auth.logout.result,
    logoutLoading: state.auth.logout.loading,
    logoutError: state.auth.logout.error,
    loginResult: state.auth.login.result,
    loginLoading: state.auth.login.loading,
    loginError: state.auth.login.error
  }),
  { logout, login, GoogleLogin }
)(Menu);



 
                      
                        