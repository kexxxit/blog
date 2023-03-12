import React from "react";
import {Form, Field} from 'react-final-form'
import styles from "./auth.module.css"
import { Navigate } from "react-router-dom";
import {FORM_ERROR} from "final-form";

class Login extends React.Component {
    onSubmit = async values => {
        let response = await this.props.login(values.email, values.password)
        if (!response.success) {
            return {[FORM_ERROR]: response.message}
        }
    }

    required = value => (value ? undefined : 'Не должно быть пустым')

    render() {
        if (this.props.isAuth) {
            return <Navigate to={`/`}/>
        }
        return (
            <div className={'container'}>
                <div className={styles.form}>
                    <div className={styles.auth}>
                        <h1>Войти</h1>
                        <Form onSubmit={this.onSubmit}
                              render={({handleSubmit, submitError}) => (
                                  <form onSubmit={handleSubmit}>
                                      <div className={styles.input_form}>
                                          <Field name="email" validate={this.required}>
                                              {({input, meta}) => (
                                                  <div>
                                                      <input className={styles.input} {...input} type="text"
                                                             placeholder="Email"/>
                                                      {meta.error && meta.touched &&
                                                          <span style={{color: "red"}}>{meta.error}</span>}
                                                  </div>
                                              )}
                                          </Field>
                                      </div>
                                      <div className={styles.input_form}>
                                          <Field name="password" validate={this.required}>
                                              {({input, meta}) => (
                                                  <div>
                                                      <input className={styles.input}  {...input} type="password" placeholder="Password"/>
                                                      {meta.error && meta.touched &&
                                                          <span style={{color: "red"}}>{meta.error}</span>}
                                                  </div>
                                              )}
                                          </Field>
                                      </div>
                                      {submitError && <div style={{color: "red"}} className="error">{submitError}</div>}
                                      <button className={styles.submit} type={"submit"}>Login</button>
                                  </form>
                              )}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login