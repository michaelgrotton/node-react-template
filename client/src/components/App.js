//rendering layer of the react app
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";

import { connect } from "react-redux";
import * as actions from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
