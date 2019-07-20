import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { connect } from "react-redux";
import { addTask } from "../actions/taskActions";

class TaskModal extends Component {
  state = {
    modal: false,
    username: "",
    description: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newTask = {
      username: this.state.username,
      description: this.state.description
    };

    // add item via add task
    this.props.addTask(newTask);

    // close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Task
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Task List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="task">Task</Label>
                <Input
                  type="text"
                  name="username"
                  id="task"
                  placeholder="Add Task Request"
                  onChange={this.onChange}
                />
                <Label for="task">Task Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Add Task description"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Task
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  description: state.description
});

export default connect(
  mapStateToProps,
  { addTask }
)(TaskModal);
