import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  Label,
  FormGroup,
  Button
} from "reactstrap";

class LoginModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>{this.renderBody()}</ModalBody>
      </Modal>
    );
  }

  login = () => {
    console.log(this.state);
  };

  state = {
    username: "",
    password: " "
  };

  renderBody() {
    return(
    <Form>
      <FormGroup>
        <Label>Username</Label>
        <Input
          onChange={(event) => this.setState({ username: event.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" />
      </FormGroup>
      <Button color="primary" onClick={this.login}>
        Login
      </Button>
    </Form>
    );
  }
}

export default LoginModal;
