import React, { Component, Fragment } from "react";
import { CardBody, Card } from "reactstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addNewMessage } from "../../../redux/messages/newMessages";
import { connect } from "react-redux";
import "../../main.css"
import message from "../../../images/message.png"


class NewMessage extends Component {
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
        <Card style={{backgroundColor: "transparent"}}>
          <CardBody className="text-center">
          <CardBody className="rounded" style={{padding: "0"}}>
            <Form.Group>
              <Form.Label className="text-center" style={{color: "#576490", fontSize: "3.2rem", fontFamily: 'Odibee Sans', margin: "0", whiteSpace: "nowrap" }}>
                New Message
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
            className="btn-xl"
           
            type="submit"
            style={{backgroundColor: "#7796CB", color:"Black", border: "2px solid #A3BCF9" }}
            onClick={this.handleAddNewMessage}
          >
            <img
              src={message}
              alt="message"
              style={{ width: "30px", paddingRight: "5px"}}
            />
            New Message
          </Button>
          </CardBody>
        </Card>
        
      </Fragment>
    );
  }
}
export default connect(null, { addNewMessage }) (NewMessage);
