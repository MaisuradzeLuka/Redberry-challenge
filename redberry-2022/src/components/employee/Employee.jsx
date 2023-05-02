import React from "react";
import Header from "../../generalUI/header/Header";
import { useNavigate } from "react-router-dom";
import employeeStyles from "./employeeStyles.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Employee = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/", { replace: true });
  };

  const initialValues = {
    name: "",
    lastname: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = () => {};

  return (
    <>
      <Header clickHandler={clickHandler}></Header>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {(props) => {
          return (
            <Form className={employeeStyles.form}>
              <div className={employeeStyles["name-lastname"]}>
                <div className={employeeStyles.inputWrapper}>
                  <label htmlFor="name">სახელი</label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="თქვენი სახელი"
                  />
                  <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
                </div>
                <div className={employeeStyles.inputWrapper}>
                  <label htmlFor="lastname">გვარი</label>
                  <Field
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="თქვენი გვარი"
                  />
                  <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      <img
        src="../../../public/images/LOGO-10 2 (1).png"
        alt="redberry logo"
        className={employeeStyles.icon}
      />
    </>
  );
};

export default Employee;
