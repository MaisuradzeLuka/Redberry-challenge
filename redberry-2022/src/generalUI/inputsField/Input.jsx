import React from "react";
import inputStyles from "./inputStyles.module.css";
import { ErrorMessage, Field, useField } from "formik";

const Input = ({ label, type, name, placeholder, span }) => {
  const [field, meta] = useField(name);

  return (
    <div
      className={`${inputStyles.inputWrapper} ${
        meta.error && meta.touched && inputStyles.error
      }`}
    >
      <label htmlFor={name}>{label}</label>
      <Field name={name} type={type} id={name} placeholder={placeholder} />
      <span>{span}</span>
    </div>
  );
};

export default Input;
