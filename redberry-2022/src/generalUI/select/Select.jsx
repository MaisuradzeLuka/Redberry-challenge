import { Field, useField } from "formik";
import React from "react";
import selectStyles from "./selectStyles.module.css";

const Select = ({ options, name, value }) => {
  const newOptions = options.filter((option) => {
    return option.id === value;
  });

  const [field, meta] = useField(name);

  return (
    <Field
      component="select"
      name={name}
      className={`${selectStyles.select} ${
        meta.error && meta.touched && selectStyles.error
      }`}
    >
      {newOptions.map((option, index) => {
        return (
          <option
            key={option.key}
            value={option.value}
            hidden={option.value === "team"}
          >
            {option.key}
          </option>
        );
      })}
    </Field>
  );
};

export default Select;
