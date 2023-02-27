import React from "react";
import {Form, Field} from 'react-final-form'
import styles from "./register.module.css"
import {connect} from "react-redux";
import {NavLink, Navigate} from "react-router-dom";

class Register extends React.Component {
    onSubmit = async values => {
        this.props.registration(values.email, values.password)
    }

    render() {
        return (
            <div className={'container'}>
                <div className={styles.register}>
                    <div>Регистрация</div>
                    <Form onSubmit={this.onSubmit}
                          render={({handleSubmit}) => (
                              <form onSubmit={handleSubmit}>
                                  <div>
                                      <Field name="email">
                                          {({input, meta}) => (
                                              <div className={styles.login__fields}>
                                                  <input className={styles.login__input} {...input} type="text"
                                                         placeholder="Email"/>
                                                  {meta.error && meta.touched &&
                                                      <span style={{color: "red"}}>{meta.error}</span>}
                                              </div>
                                          )}
                                      </Field>
                                  </div>
                                  <div>
                                      <Field name="password">
                                          {({input, meta}) => (
                                              <div className={styles.login__fields}>
                                                  <input  {...input} type="password" placeholder="Password"/>
                                                  {meta.error && meta.touched &&
                                                      <span style={{color: "red"}}>{meta.error}</span>}
                                              </div>
                                          )}
                                      </Field>
                                  </div>
                                  <button type={"submit"}>Login</button>
                                  <div>
                                      <span>Если вы уже зарегистрированы то </span>
                                      <NavLink to={'/login'}>войдите в аккаунт</NavLink>
                                  </div>
                              </form>
                          )}/>
                </div>
            </div>
        )
    }
}

export default Register