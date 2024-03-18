/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import constant from "../../utils/contants";
import Signup from "../../pages/SignUp/Signup";

const SignUpContainer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const switchToLogin = () => {
    navigate(constant.Routes.Login);
  };

  const validateSchema = () =>
    yup.object({
      fullname: yup.string().required("Fullname is required"),
      email: yup.string().required("Enter a valid email"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!:;,.+-~*@#\$%\^&\*])(?=.{8,})/gm,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    });

  const onSubmit = async (values) => {
    setLoading(true);
    const names = values.fullname.split(" ");

    const payload = {
      email: values.email,
      firstName: names[0],
      lastName: names[1],
      password: values.password,
    };

    // const { status, errorMessage } = await UserController.signUp(payload);

    // if (status === "Success") {
    //   setLoading(false);
    //   return navigate(constant.Routes.Login);
    // }
    // setLoading(false);
    // return { message: errorMessage };
  };

  return (
    <div>
      <Signup
        onSubmit={onSubmit}
        validateSchema={validateSchema}
        loading={loading}
        switchTologin={switchToLogin}
      />
    </div>
  );
};

export default SignUpContainer;
