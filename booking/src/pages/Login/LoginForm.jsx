/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import styles from "../../assets/styles/Login/Login.module.css";
import { Form, Formik } from "formik";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validateSchema()}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
            <label htmlFor="fullname">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <label htmlFor="fullname">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              id="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <div className={styles.clearfix}>
              <button type="submit" onClick={handleSubmit} loading={loading} className={styles.signupbtn}>
                Sign Up
              </button>
            </div>
          
        </>
      )}
    </Formik>
  )
}

export default LoginForm