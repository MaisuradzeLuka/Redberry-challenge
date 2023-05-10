import React from "react";
import Header from "../../generalUI/header/Header";
import { useNavigate } from "react-router-dom";
import laptopSpecsStyles from "./laptopSpecsStyles.module.css";
import { Formik, Form } from "formik";
import Input from "../../generalUI/inputsField/Input";
import * as Yup from "yup";
import Button from "../../generalUI/button/Button";
import Photo from "../../generalUI/photo/Photo";
import { data } from "../../data/data";
import Select from "../../generalUI/select/Select";

const laptopSpecs = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/employee", { replace: true });
  };

  const initialValues = {
    photo: "",
    laptopName: "",
    maker: "",
  };

  const onSubmit = () => {
    navigate("/thankYou", { replace: true });
  };

  const validateSchema = Yup.object({
    photo: Yup.string().required(),
    laptopName: Yup.string().required(),
    maker: Yup.string().required(),
  });

  return (
    <>
      <Header
        clickHandler={clickHandler}
        className={laptopSpecsStyles.header}
      ></Header>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        {(props) => {
          return (
            <Form className={laptopSpecsStyles.form}>
              <Photo name="photo" setFieldValue={props.setFieldValue} />
              <div className={laptopSpecsStyles.laptopMaker}>
                <Input
                  label="ლეპტოპის სახელი"
                  type="text"
                  name="laptopName"
                  placeholder="HP"
                  span="ლათინური ასოები, ციფრები, !@#$%^&*()_+= "
                />
                <Select options={data.makers} name="maker" />
              </div>
              <div className={laptopSpecsStyles.btnWrapper}>
                <Button
                  className={laptopSpecsStyles.btnBack}
                  onClick={clickHandler}
                >
                  უკან
                </Button>
                <Button type="submit" className={laptopSpecsStyles.btn}>
                  შემდეგი
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <img
        src="../../../public/images/LOGO-10 2 (1).png"
        alt="redberry logo"
        className={laptopSpecsStyles.icon}
      />
    </>
  );
};

export default laptopSpecs;
