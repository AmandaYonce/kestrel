//this is the landing page for Account
import React from "react";
import { Menu} from "./components";
import { userIsAuthenticated } from "./HOCs";
import { Container, Row, Col } from 'reactstrap';
import {AccountMain} from "./components"
import {AccountSide} from "./components"
import "./main.css"


class Account extends React.Component {
 
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <main className="my-5 py-5 bricklightnophone" style={{backgroundColor: "#F0CF65"}}>
        <Container className="px-0">
        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
            <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
            <AccountSide />
            </Col>
            
            <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            <AccountMain />
            </Col>
        </Row>
        </Container>
  </main>
      </>
    );
  }
}



export default userIsAuthenticated(Account);