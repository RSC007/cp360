import React from "react";

import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values: { email, password },
    errors: { email: errUsername, password: errPassword },
  } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Email is required"),
      password: Yup.number().required("Password is required").test("Sum 10", "Addition must be 10", val => String(val).split("").reduce((total, num) => total + Number(num), 0) === 10)
    }),
    onSubmit: (values) => {
      localStorage.setItem("username", values.email)
      navigate("/")
    }
  });
  return (
    <div className="wrapper">
      <div className="body signin">
        <p className="title">Login Account</p>
        <form>
          <input
            className={`form-control ${errUsername ? "is-invalid" : ""}`}
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errUsername && <small className="text-danger">{errUsername}</small>}
          <input
            className={`form-control ${errPassword ? "is-invalid" : ""}`}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errPassword && <small className="text-danger">{errPassword}</small>}
          <button
            type="Submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
