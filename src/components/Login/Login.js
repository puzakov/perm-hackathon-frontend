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
    isValidPhone: false,
    phone: "+7 (950) 45–88–910", 
    code: "",
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

  handleChange = (e) => { 
    const { name, value } =  e.target
    this.setState({[name]: value})
  }

  render() {
    const { isValidPhone, phone, code } = this.state;
    return (
      <div className={styles["auth"]}>
        <div className={styles["auth__logo"]}>
          <span>РЕБЁНОК В ПУТИ</span>
          <i>Автобус онлайн</i>
        </div>

        <div className={styles["auth__form"]}>
          {!isValidPhone && (
            <div className={styles["auth__form__item"]}>
              <div className={"ui-input"}>
                <input
                  type="text"
                  className={"ui-input__field"}
                  value={phone}
                  placeholder="Номер телефона"
                  name="phone"
                  id="auth-phone"
                  onChange={this.handleChange}
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
                  value={code}
                  placeholder="Введите код из СМС"
                  name="code"
                  id="auth-sms"
                  onChange={this.handleChange}
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
