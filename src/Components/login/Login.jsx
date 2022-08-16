import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import logo from '../../Assets/logo.png';
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { logInStart } from '../../Actions/authActions';
import { Form } from "react-bootstrap";
import * as Yup from "yup";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth)
  console.log(auth)
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().min(5).required("Password is required"),
    }),

    onSubmit: (values) => {
      dispatch(logInStart(values));
      toast.success("login success");
      navigate('/dashboard');
    },
  });

  return (
    <div className="login_container" data-testid='todo'>
      <ToastContainer autoClose={2000} />
      <Form onSubmit={formik.handleSubmit}>
        <img src={logo} alt='logo' className='logo-img' />
        <h2>Log In</h2>
        <Form.Group controlId="userName">
          <Form.Label>Login ID</Form.Label>
          <Form.Control
            name="userName"
            type="text"
            placeholder='example@example.com'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />

          {formik.touched.userName && formik.errors.userName ? (
            <div className="error_msg">{formik.errors.userName}</div>
          ) : null}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder='enter your password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error_msg">{formik.errors.password}</div>
          ) : null}
        </Form.Group>
        <button type="submit" className="submit-button">Login</button>
      </Form>
    </div>
  );
};

export default SignIn;