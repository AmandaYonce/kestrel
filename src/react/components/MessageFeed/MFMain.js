import React, { Component, Fragment } from "react";
import { CardBody, Card } from "reactstrap";
import Form from "react-bootstrap/Form";
import MFCarousel from "./MFCarousel";
import SmallIcon from "../../../images/owl-black-square-single.png";
import Button from "react-bootstrap/Button";
import newMessages from "src/redux/messages/newMessages.js";

class MFMain extends Component {
  state = {
    message: ""
  };

  handleAddNewMessage = e => {
    e.preventDefault();
    this.props.addNewMessage(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <Card>
          <CardBody>
            <Form.Group>
              <Form.Label className="h3 mb-2 pt-2 font-weight-bold text-secondary">
                HOME
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="What's Happening?"
                name="message"
                onChange={this.handleChange}
              />
            </Form.Group>
          </CardBody>

          <Button
            variant="secondary"
            type="submit"
            style={{ fontSize: "28", backgroundColor: "#333333" }}
            onClick={this.handleAddNewMessage}
          >
            <img
              src={SmallIcon}
              alt="avatar"
              className="img-fluid rounded-circle"
              style={{ width: "40px" }}
            />
            New Message
          </Button>
        </Card>
        <br />
        <MFCarousel />
      </Fragment>
    );
  }
}

export default MFMain;
