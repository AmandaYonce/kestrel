import React from "react";
import { Link } from "react-router-dom";
import icon from "../images/owl-icon.png"
import {CardBody, CardTitle, Row, Col} from 'reactstrap';
import "./main.css"

class NotFound extends React.Component {
  render() {
    return (
      <>

      <Row style={{backgroundColor: "white", marginTop: "6rem", border: "1px solid silver"}}>
        <Col style={{border: "1px solid silver"}}>
        <CardBody className="text-center">
        <CardTitle style={{color: "#576490", fontSize: "3.2rem", fontFamily: 'Dosis'}}>Sorry, the page "{this.props.location.pathname}" does not exist</CardTitle>
        <img className="p-5" alt="avatar" src={icon} style={{width: "15rem"}} to="/"/>
        <br/>
        <Link style={{color: "#576490", fontSize: "2.8rem", fontFamily: 'Dosis'}} to="/">Return to Kestrel</Link>
        </CardBody>
        </Col>
        </Row>
      </>
    );
  }
}

export default NotFound;
