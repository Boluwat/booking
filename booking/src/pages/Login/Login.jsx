/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
// import LeftSide from "../pageComponents/LeftSide";
import styles from "../../assets/styles/Login/Login.module.css";
import LoginForm from "./LoginForm";

const Login = ({ validateSchema, onSubmit, loading, switchTologin }) => {
  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <p>
        Already have an account? <span onClick={switchTologin}>Log in</span>
      </p>
      <hr />
      <div>
        <LoginForm
          validateSchema={validateSchema}
          onSubmit={onSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Login;
