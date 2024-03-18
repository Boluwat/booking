/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import constant from "../../utils/contants";
import Login from "../../pages/Login/Login";

const LoginContainer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const switchToSignup = () => {
    navigate(constant.Routes.SignUp);
  };

  const switchToForgotPassword = () => {
    navigate(constant.Routes.ForgetPassword);
  };

  const validateSchema = () =>
    yup.object({
      email: yup.string().required("Enter a valid email"),
      password: yup
        .string()
        .required("Password is required")
    });

  const onSubmit = async (values) => {
    setLoading(true);
   
    const payload = {
      email: values.email,
      password: values.password,
    };

    // const { status, errorMessage } = await UserController.login(payload);

    // if (status === "Success") {
    //   setLoading(false);
    //   return navigate(constant.Routes.Dashboard);
    // }
    // setLoading(false);
    // return { message: errorMessage };
  };

  return (
    <div>
      <Login
        onSubmit={onSubmit}
        validateSchema={validateSchema}
        loading={loading}
        switchTologin={switchToSignup}
        switchToForgotPassword={switchToForgotPassword}
      />
    </div>
  );
};

export default LoginContainer;
