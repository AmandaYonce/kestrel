import React, { Component, Fragment } from 'react';
import {  Card, Row, Col, Container, CardBody, CardSubtitle, CardText } from 'reactstrap';
import { userIsAuthenticated } from "../../HOCs";
import friend from "../../../images/friend.png"
import bookmark from "../../../images/bookmark.png"
import thumb from "../../../images/thumb.png"
import trash from "../../../images/trash.png"
import icon from "../../../images/owl-icon.png"
import photoPlaceholder from "../../../images/photoPlaceholder.png"
import message from "../../../images/message.png"
import password from "../../../images/password.png"
import Menu from "../Menu/Menu"

import "../../main.css"

class Faq extends Component {
   

    render() {

        return(
            <Fragment>
            <Menu isAuthenticated={this.props.isAuthenticated}/>
            <Card style={{marginTop: "100px"}} className="text-center">     
                <CardSubtitle style={{fontSize: "5rem"}}>Work In Progress Here</CardSubtitle>
            </Card>
            </Fragment>
        )
    }
}
export default (userIsAuthenticated(Faq))