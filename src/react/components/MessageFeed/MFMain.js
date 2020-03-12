import React, { Component, Fragment } from "react";
import { CardBody, Card } from "reactstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addNewMessage } from "../../../redux/messages/newMessages";
import { connect } from "react-redux";
import phone from "../../../telephoneImages/phone3.png"
import "../../main.css"


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
        <Card style={{ border: "3px solid #324164"}} className="scratchBackground">
          <CardBody className="rounded">
            <Form.Group>
              <Form.Label className="h2 mb-2 pt-2 font-weight-bold text-center" style={{color: "black", fontSize: "3rem"}}>
                Post New Message
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
            style={{ fontSize: "28", backgroundColor: "#6E6F72", color: "white" }}
            onClick={this.handleAddNewMessage}
          >
            <img
              src={phone}
              alt="avatar"
              className="img-fluid rounded-circle"
              style={{ width: "40px" }}
            />
            New Message
          </Button>
        </Card>
        
      </Fragment>
    );
  }
}
export default connect(null, { addNewMessage })(MFMain);
