import React, { Component, Fragment } from "react";
import { CardBody, Card } from "reactstrap";
import Form from "react-bootstrap/Form";
import MFCarousel from "./MFCarousel";
import SmallIcon from "../../../images/owl-black-square-single.png";
import Button from "react-bootstrap/Button";
import { addNewMessage } from "../../../redux/messages/newMessages";
import { connect } from "react-redux";


class MFMain extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  state = {
    message: "",
    toggle: false,
    target: "",
    input: this.input
  };

  handleAddNewMessage = e => {
    e.preventDefault();
    this.props.addNewMessage(this.state.message);
    this.setState({message: ""})
    this.input.current._valueTracker.setValue(this.input.current.value="...")
    this.props.toggleMessage()
  };

  handleChange = e => {
    this.setState({ message: e.target.value })
   
  }


  render() {

    return (
      <Fragment>
        <Card>
          <CardBody>
            <Form.Group>
              <Form.Label className="h3 mb-2 pt-2 font-weight-bold text-secondary">
                What's Happening
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                ref={this.input}
                placeholder="..."
                name="message"
                onChange={this.handleChange}
                className="form-control"
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
        <MFCarousel />
      </Fragment>
    );
  }
}
export default connect(null, { addNewMessage })(MFMain);
