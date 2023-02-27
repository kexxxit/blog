import React from "react";
import {Form, Field} from 'react-final-form'
import styles from "./login.module.css"

class Login extends React.Component {
    onSubmit = async values => {
        this.props.login(values.email, values.password)
    }

    render() {
        return (
            <div className={'container'}>
                <div className={styles.register}>
                    <div>Войти</div>
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
                              </form>
                          )}/>
                </div>
            </div>
        )
    }
}

export default Login