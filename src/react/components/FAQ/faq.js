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
import displayName from "../../../images/displayName.png"

class Faq extends Component {
   

    render() {

        return(
            <Fragment>
            <Menu isAuthenticated={this.props.isAuthenticated}/>
            <Card style={{marginTop: "100px"}} >   
                 
                <CardSubtitle style={{fontSize: "5rem", fontFamily: 'Odibee Sans', fontWeight: "bold"}} className="text-center"> Frequently Asked Questions</CardSubtitle>
                <Row className="text-center">
                    <Col>
                <CardBody >
                    <img src={friend} alt="friend" style={{width: "6rem", padding: "0.5rem"}}/>
                    <CardSubtitle style={{fontFamily: 'Odibee Sans', fontSize: "3rem"}}>Friends</CardSubtitle>
                    <CardText >Make friends by liking their messages. <br/>View your friends on the friends tab.</CardText>
                </CardBody>
                    </Col>
                    <Col>
                <CardBody >
                    <img src={bookmark} alt="bookmark" style={{width: "6rem", padding: "0.5rem"}}/>
                    <CardSubtitle style={{fontFamily: 'Odibee Sans', fontSize: "3rem"}}>Bookmarks</CardSubtitle>
                    <CardText >Save bookmarks by liking messages. <br/>A bookmarked message will display the bookmark icon. <br/>View your bookmarks on the Bookmars tab.</CardText>
                </CardBody>
                    </Col>
                    <Col>
                <CardBody>
                    <img src={thumb} alt="thumb" style={{width: "6rem"}}/>
                    <CardSubtitle style={{fontFamily: 'Odibee Sans', fontSize: "3rem", padding: "0.5rem"}}>Likes</CardSubtitle>
                    <CardText >Click the "thumbs up" icon <br/>on a message to like it</CardText>
                </CardBody>
                    </Col>
                </Row>
                <Row className="text-center" style={{paddingTop: "2rem"}}>
                <CardBody>
                    <img src={trash} alt="trash" style={{width: "6rem", padding: "0.5rem"}}/>
                    <CardSubtitle style={{fontFamily: 'Odibee Sans', fontSize: "3rem", padding: "0.5rem"}}>Delete</CardSubtitle>
                    <CardText >Delete a message by clicking the <br/>trash can icon on the message. <br/> To delete your user account <br/> please visit the Account page. <br/></CardText>
                </CardBody>

                <CardBody>
                    <img src={photoPlaceholder} alt="Placeholder" style={{width: "6rem", padding: "0.5rem"}}/>
                    <CardSubtitle style={{fontFamily: 'Odibee Sans', fontSize: "3rem", padding: "0.5rem"}}>Photo</CardSubtitle>
                    <CardText >To add or edit your user photo <br/>please visit the Account page.  <br/>Photos must be less <br/>than 200kb and jpeg or png.</CardText>
                </CardBody>

                <CardBody>
                    <img src={displayName} alt="Display Name" style={{width: "6rem", padding: "0.5rem"}}/>
                    <CardSubtitle style={{fontFamily: 'Odibee Sans', fontSize: "3rem", padding: "0.5rem"}}>Display Name</CardSubtitle>
                    <CardText >To edit your Display Name <br/>please visit the Account page.  <br/>You must enter your current <br/>password.</CardText>
                </CardBody>
                </Row>
                <Row className="text-center" style={{paddingTop: "2rem"}}>
                <CardBody>
                    <img src={message} alt="message" style={{width: "6rem", padding: "0.5rem"}}/>
                    <CardSubtitle style={{fontFamily: 'Odibee Sans', fontSize: "3rem", padding: "0.5rem"}}>Messages</CardSubtitle>
                    <CardText >To view messages or <br/>post a new message  <br/>please click on the <br/>"Message Feed" tab.</CardText>
                </CardBody>

                <CardBody>
                    <img src={password} alt="password" style={{width: "6rem", padding: "0.5rem"}}/>
                    <CardSubtitle style={{fontFamily: 'Odibee Sans', fontSize: "3rem", padding: "0.5rem"}}>Password</CardSubtitle>
                    <CardText >To change your password <br/>please visit the <br/>Account page.</CardText>
                </CardBody>
                </Row>
            </Card>
            </Fragment>
        )
    }
}
export default (userIsAuthenticated(Faq))