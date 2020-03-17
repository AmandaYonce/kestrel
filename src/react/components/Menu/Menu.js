import React from "react";
import { connect } from "react-redux";
import { logout } from "../../../redux";
import {Navbar, Nav, NavItem, Collapse, NavbarToggler, NavbarBrand} from 'reactstrap';
import logo from "../../../images/owl-icon.png"
import { NavLink } from "react-router-dom"
import {login} from "../../../redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import GoogleLogin from 'react-google-login'
//import {welcomeModal} from "../../../redux/welcomeModal/welcomeModal"

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
    //this.props.welcomeModal(true)
  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
    //this.props.welcomeModal(false)
  };

  responseGoogle=(response)=>{
    console.log(response)
    //this.setState({redirect: true})
    const googleLogInData={
      username: response.profileObj.givenName+response.profileObj.googleId.slice(-2),
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
        <Navbar fixed="top" light expand="md" style={{backgroundColor: "#576490"}} >
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen}  navbar>
            <Nav className="mr-auto" navbar>
              <NavItem style={{position: "relative"}}>
                  <img src={logo} alt="avatar" style={{ width: "60px", position: "absolute", top: "24px" }} />
                  <NavbarBrand  style={{'fontSize': "80px", "fontFamily": 'Dosis', "padding": "0", "color": "#d6e7e5", marginLeft: "72px" }}href="/">Kestrel</NavbarBrand>
                  
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
          <NavLink style={{"paddingRight": "20px", "fontSize":"45px", "color": "#faf9f5", "fontFamily": 'Odibee Sans'}} to="/" 
          onClick={this.handleLogout}>
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
        <Navbar fixed="top" light expand="md" style={{backgroundColor: "#576490"}} >
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem style={{position: "relative"}}>
                  <img src={logo} alt="avatar" style={{ width: "60px", position: "absolute", top: "24px" }}/>
                  <NavbarBrand  style={{'fontSize': "80px", "fontFamily": 'Dosis', "padding": "0", "color": "#d6e7e5", marginLeft: "72px" }}href="/">Kestrel</NavbarBrand>
                  
              </NavItem>
              </Nav>

            <Nav >
                <Form onSubmit={this.handleLogin} style={{display: "flex"}}>
                <NavItem>
                  <Form.Control style={{"width": "170px", "marginRight":"5px", border: "none", boxShadow: "1.5px 1.5px 0px 1.5px #d6e7e5"}} type="text" placeholder="Username" name="username" autoFocus required onChange={this.handleChange}/>
                  </NavItem>
                  <NavItem>
                    <Form.Control style={{"width": "170px", border: "none", boxShadow: "1.5px 1.5px 0px 1.5px #d6e7e5", "marginRight":"5px"}} type="password" placeholder="Password" name="password" required onChange={this.handleChange}/>
                    </NavItem>
                    <NavItem style={{display: "flex"}}>
                      <Button type="submit" disabled={loading} style={{ backgroundColor: "white", marginRight: "10px", color: "black", border: "none", boxShadow: "1.5px 1.5px 0px 1.5px #d6e7e5"}}>
                        <img src={logo} alt="avatar" className="img-fluid" style={{ "width": "28px", "paddingRight": "5px" }} />
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



 
                      
                        