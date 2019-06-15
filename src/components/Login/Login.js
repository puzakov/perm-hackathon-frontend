import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAuthError,
  fetchRequest as authRequest,
  getIsLoading
} from "../../modules/Auth";
import { Field, reduxForm } from "redux-form";
import styles from "./Login.module.css";

class Login extends Component {
  handleSubmit = values => {
    const { authRequest } = this.props;
    authRequest(values);
  };

  render() {
    return (
      <>
        <h1>Login</h1>;
      </>
    );
  }
}

export default connect(
  state => ({ error: getAuthError(state), isLoading: getIsLoading(state) }),
  { authRequest }
)(Login);
