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

        <div className={styles['auth']}>

          <div className={styles['auth__logo']}>
          
            <span>Школьный Автобус</span>
            <i>Родитель</i>
          
          </div>
          
          <div className={styles['auth__form']}>
          
            <div className={styles['auth__form__item']}>
              <div className={'ui-input'}>
                <input type="text" className={'ui-input__field'} value="+7 (950) 45–88–910" placeholder="Номер телефона" id="auth-phone"/>
                <span className={'ui-input__line'}></span>
              </div>
            </div>
          
            <div className={[styles['auth__form__item'],styles['-no-paddings']].join(' ')}>
              <button className={['ui-button','-all-width'].join(' ')} id="auth-submit">Войти</button>
            </div>
          
          </div>
          
        </div>

      </>
    );
  }
}

export default connect(
  state => ({ error: getAuthError(state), isLoading: getIsLoading(state) }),
  { authRequest }
)(Login);
