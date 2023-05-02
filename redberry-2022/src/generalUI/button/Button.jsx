import React from "react";
import buttonStyles from "./buttonStyles.module.css";

const Button = ({ type, onClick, className, children }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`${buttonStyles.btn} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
