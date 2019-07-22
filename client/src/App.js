import React, { Component } from "react";
import TaskList from "./components/TaskList";
import Navbar from "./components/NavBar";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import store from "./store";
import TaskModal from "./components/taskModal";
import { loadUser } from "./actions/authActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Container>
            <TaskModal />
            <TaskList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
