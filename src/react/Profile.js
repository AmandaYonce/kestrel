//this is the landing page immediately after successful login
import React from "react";
import { Menu} from "./components";
import { userIsAuthenticated } from "./HOCs";
import { Container, Row, Col } from 'reactstrap';
import {MFMain} from "./components"
import {MFSide} from "./components"
import { userInfo } from "../redux/account/userInfo"
import { connect } from "react-redux";

class Profile extends React.Component {
  componentDidMount(){
    this.props.userInfo()
  };
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <main className="my-5 py-5">
        <Container className="px-0">
        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
            <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
            <MFSide />
            </Col>
            
            <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            <MFMain />
            </Col>
        </Row>
        </Container>
  </main>
      </>
    );
  }
}

export default connect(null,{userInfo}) (userIsAuthenticated(Profile));
