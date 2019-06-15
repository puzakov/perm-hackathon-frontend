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
  state = {
    isValidPhone: false
  };

  handleSubmit = () => {
    const { isValidPhone } = this.state;
    if (isValidPhone) {
      const { authRequest } = this.props;
      authRequest({ email: "", password: "" });
      return;
    }
    this.setState({isValidPhone: true})
  };

  render() {
    const { isValidPhone } = this.state;
    return (
      <div className={styles["auth"]}>
        <div className={styles["auth__logo"]}>
          <span>Школьный Автобус</span>
          <i>Родитель</i>
        </div>

        <div className={styles["auth__form"]}>
          {!isValidPhone && (
            <div className={styles["auth__form__item"]}>
              <div className={"ui-input"}>
                <input
                  type="text"
                  className={"ui-input__field"}
                  value="+7 (950) 45–88–910"
                  placeholder="Номер телефона"
                  id="auth-phone"
                />
                <span className={"ui-input__line"} />
              </div>
            </div>
          )}
          {isValidPhone && (
            <div className={styles["auth__form__item"]}>
              <div className={"ui-input"}>
                <input
                  type="text"
                  className={"ui-input__field"}
                  value=""
                  placeholder="Введите код из СМС"
                  id="auth-sms"
                />
                <span className={"ui-input__line"} />
              </div>
            </div>
          )}

          <div
            className={[
              styles["auth__form__item"],
              styles["-no-paddings"]
            ].join(" ")}
          >
            <button
              className={["ui-button", "-all-width"].join(" ")}
              id="auth-submit"
              onClick={this.handleSubmit}
            >
              {!isValidPhone ? 'Получить СМС код' : 'Войти'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// const LoginForm = reduxForm({ form: "loginForm", validate: () => ({}) })(
//   () => {}
// );

export default connect(
  state => ({ error: getAuthError(state), isLoading: getIsLoading(state) }),
  { authRequest }
)(Login);
