import React from "react";
import { connect } from "react-redux";

class Landing extends React.Component {
  render() {
    return (
      <div>{this.props.auth ? JSON.stringify(this.props.auth) : null}</div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
