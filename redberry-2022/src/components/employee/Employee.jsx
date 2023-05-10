import React from "react";
import Header from "../../generalUI/header/Header";
import { useNavigate } from "react-router-dom";
import employeeStyles from "./employeeStyles.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "../../generalUI/inputsField/Input";
import * as Yup from "yup";
import Button from "../../generalUI/button/Button";
import Select from "../../generalUI/select/Select";
import { data } from "../../data/data";

const Employee = () => {
  const navigate = useNavigate();

  const patterns = {
    letters: /^[ა-ჰ]{2,}$/,
    mail: /^[a-zA-Z\d\.-]+@redberry\.ge$/,
    telNum: /^(\+995|0)?5\d{8}$/,
  };

  const clickHandler = () => {
    navigate("/", { replace: true });
  };

  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    telNum: "",
    teams: "",
    pos: "",
  };

  const onSubmit = () => {
    navigate("/laptopSpecs", { replace: true });
  };

  const validateSchema = Yup.object({
    name: Yup.string().matches(patterns.letters).required(),
    lastname: Yup.string().matches(patterns.letters).required(),
    email: Yup.string().email().matches(patterns.mail).required(),
    telNum: Yup.string().matches(patterns.telNum).required(),
    teams: Yup.string().required(),
    pos: Yup.string().required(),
  });

  return (
    <>
      <Header
        clickHandler={clickHandler}
        className={employeeStyles.header}
      ></Header>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        {(props) => {
          return (
            <Form className={employeeStyles.form}>
              <div className={employeeStyles["name-lastname"]}>
                <Input
                  label="სახელი"
                  name="name"
                  type="text"
                  placeholder="თქვენი სახელი"
                  span="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                />
                <Input
                  label="გვარი"
                  name="lastname"
                  type="text"
                  placeholder="თქვენი გვარი"
                  span="მინიმუმ 2 სიმბოლო, ქართული ასოები"
                />
              </div>
              <Select name="teams" options={data.teamOptions} />
              <Select
                name="pos"
                options={data.posOptions}
                value={props.values.teams}
              />
              <Input
                label="მეილი"
                name="email"
                type="email"
                placeholder="თქვენი მეილი"
                span="უნდა მთავრდებოდეს @redberry.ge-ით"
              />
              <Input
                label="ტელეფონის ნომერი"
                name="telNum"
                type="text"
                placeholder="თქვენი ტელეფონი"
                span="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
              />
              <Button type="submit" className={employeeStyles.btn}>
                შემდეგი
              </Button>
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
