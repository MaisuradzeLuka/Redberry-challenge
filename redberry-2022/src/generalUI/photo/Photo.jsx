import React from "react";
import photoStyles from "./photoStyles.module.css";
import { Field } from "formik";

const Photo = ({ name, setFieldValue }) => {
  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFieldValue(name, reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={photoStyles.inputWrapper}>
      <Field name={name}>
        {(props) => {
          console.log(props);
          return (
            <label htmlFor="photo" className={photoStyles.inputLabel}>
              <img src={props.field.value} alt="uploaded photo" />
              {!props.field.value && <span>ფოტოს ატვირთვა</span>}
              <input
                type="file"
                onChange={imageChangeHandler}
                accept="image/*"
                id="photo"
              />
            </label>
          );
        }}
      </Field>
    </div>
  );
};

export default Photo;
