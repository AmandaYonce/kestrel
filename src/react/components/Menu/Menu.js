import React from "react";
import { connect } from "react-redux";
import { logout } from "../../../redux";
import {
  Navbar, Nav, NavbarBrand, NavItem, Collapse, NavbarToggler} from 'reactstrap';
import img from "../../../images/owl-icon.png"
import { NavLink } from "react-router-dom"
import {login} from "../../../redux"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SmallIcon from "../../../images/owl-black-square-single.png"


class Menu extends React.Component {
  constructor(props){
    super(props)
    this.toggle=this.toggle.bind(this)
    this.state={
      isOpen: false,
      username: "",
      password: ""
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
  render() {
    const { loading } = this.props;
    
      if(this.props.isAuthenticated) {
        return (
<div id="menu" >
        <Navbar fixed="top" light expand="md" className="navbar-dark bg-dark " >
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem >
                <NavLink className="font-weight-bold" exact to="/">
                  <img src={img} alt="avatar" className="img-fluid rounded-circle" style={{ width: 74 }} />
                </NavLink>
                <NavbarBrand  style={{'fontSize': "80px", "fontFamily": 'Dosis', "padding": "0", "color": "#d6e7e5"}}href="/">Kwitter</NavbarBrand>
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
        <Navbar fixed="top" light expand="md" className="navbar-dark bg-dark " >
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem >
                <NavLink className="font-weight-bold" exact to="/">
                  <img src={img} alt="avatar" className="img-fluid rounded-circle" style={{ width: 74 }} />
                </NavLink>
                <NavbarBrand  style={{'fontSize': "80px", "fontFamily": 'Dosis', "padding": "0", "color": "#d6e7e5"}}href="/">Kwitter</NavbarBrand>
              </NavItem>
              </Nav>
            <Nav>
            <NavItem className="justify-content-end">
                <Form onSubmit={this.handleLogin} >
                  <Form.Row >
                <Form.Group id="login-form" >
                  <Form.Label style={{"fontSize": "30px", "fontFamily": 'Poppins', "color": "white", "margin": "0"}} htmlFor="username">Username</Form.Label>
                  <Form.Control style={{"width": "170px", "marginRight":"5px"}} type="text" placeholder="Username" name="username" autoFocus required onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={{"fontSize": "30px", "fontFamily": 'Poppins', "color": "white", "margin": "0"}} htmlFor="password">Password</Form.Label>
                    <Form.Control style={{"width": "170px"}} type="password" placeholder="Password" name="password" required onChange={this.handleChange}/>
                  </Form.Group>

                  <Button variant="secondary" type="submit" className="btn" disabled={loading} style={{ "fontSize": "28", "backgroundColor": "#333333" }}>
                  <img src={SmallIcon} alt="avatar" className="img-fluid rounded-circle" style={{ "width": "40px", "paddingRight": "5px" }} />
                    Login
                  </Button>
                  </Form.Row>
                  </Form>
              </NavItem>
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
  { logout, login }
)(Menu);
