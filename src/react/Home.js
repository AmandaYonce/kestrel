//this is the landing page of kwitter.com

import React from "react";
import { Menu, RegistrationForm } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import { Container, Row, Col } from 'reactstrap';
import "./main.css"

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <main className="my-5 py-5 bricklight" style={{height: "800px"}}>
        <Container className="px-0" >
        <Row className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative" >
            <Col xs={{ order: 1 }} xl={{ size: 6 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0" >
            <RegistrationForm />
            </Col>
            <Col xs={{ order: 2 }} xl={{ size: 4 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0 ">
           
            </Col>
        </Row>
        </Container>
        </main>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
