import React from "react";
import { connect } from "react-redux";
import { logout } from "../../../redux";
import {
  Navbar, Nav, NavbarBrand, NavItem, Collapse, NavbarToggler} from 'reactstrap';
import img from "../../../images/owl-icon.png"
import { NavLink } from "react-router-dom"



class Menu extends React.Component {
  constructor(props){
    super(props)
    this.toggle=this.toggle.bind(this)
    this.state={
      isOpen: false
    }
  }
  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
 
    return (
      <div id="menu">
        <Navbar fixed="top" light expand="md" className="navbar-dark bg-dark " >
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="font-weight-bold" exact to="/">
                  <img src={img} alt="avatar" className="img-fluid rounded-circle" style={{ width: 74 }} />
                </NavLink>
                <NavbarBrand  style={{'fontSize': "80px", "fontFamily": 'Dosis', "padding": "0", "color": "#d6e7e5"}}href="/">Kwitter</NavbarBrand>
              </NavItem>
              </Nav>
             
        {this.props.isAuthenticated && (
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
          
        )}
       </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(
  state => ({
    result: state.auth.logout.result,
    loading: state.auth.logout.loading,
    error: state.auth.logout.error
  }),
  { logout }
)(Menu);
