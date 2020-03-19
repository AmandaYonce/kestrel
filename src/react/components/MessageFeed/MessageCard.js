import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getMessages } from "../../../redux/messages/getMessages";
import thumbsUp from "../../../images/thumb.png";
import { CardBody, CardSubtitle, CardText, Row, Col } from "reactstrap";
import { handleLike, handleUnlike } from "../../../redux/messages/likeUnlike";
import { deleteMessage } from "../../../redux/messages/deleteMessage";
import { login } from "../../../redux/auth";

class MessageCard extends Component {
  state = {};

  handleDeleteMessage = (event, messageID) => {
    this.props.deleteMessage(event, messageID);
  };

  render() {
    return (
      <React.Fragment key={this.props.message.id}>
        <CardBody
          key={this.props.message.id}
          style={{
            border: "2px solid black",
            backgroundColor: "#d6e7e5",
            padding: "5px"
          }}
        >
          <CardSubtitle
            className="text-secondary mb-3 font-weight-normal text-uppercase"
            style={{ fontSize: "0.8rem" }}
          ></CardSubtitle>

          <CardText style={{ fontSize: "2em", marginBottom: "5px" }}>
            {this.props.message.text}
          </CardText>
          <CardText style={{ fontSize: "1em", marginBottom: "5px" }}>
            {this.props.message.username}
          </CardText>
          <CardText style={{ fontSize: "1em", marginBottom: "5px" }}>
            {Date(this.props.message.createdAt)}
          </CardText>
          <br />
          <Row>
            <Col>
              <Button
                type="submit"
                onClick={e => this.props.handleLike(e, this.props.message.id)}
                style={{
                  backgroundColor: "#faf9f5",
                  border: "2px solid black",
                  padding: "0 3px",
                  color: "black",
                  fontSize: "20px",
                  margin: "0"
                }}
              >
                <img
                  src={thumbsUp}
                  style={{ width: "25px", paddingRight: "3px" }}
                  alt="like"
                ></img>
                {this.props.message.likes.length}
              </Button>
            </Col>
            {this.props.message.username === this.props.user && (
              <Col className="float-right">
                <Button
                  type="submit"
                  onClick={event =>
                    this.handleDeleteMessage(event, this.props.message.id)
                  }
                  variant="secondary"
                  style={{
                    fontSize: "28",
                    backgroundColor: "salmon",
                    padding: "0 3px 0 0 "
                  }}
                  className="float-right"
                >
                  Delete Message
                </Button>
              </Col>
            )}
          </Row>
        </CardBody>
        <br />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    user: state.auth.login.result.username
  }),
  { getMessages, handleLike, handleUnlike, deleteMessage, login }
)(MessageCard);
