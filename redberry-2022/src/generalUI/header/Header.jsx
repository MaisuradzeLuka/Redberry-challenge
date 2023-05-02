import React from "react";
import Button from "../../generalUI/button/Button";
import headerStyles from "./headerStyles.module.css";
import { AiOutlineLeft } from "react-icons/ai";

const Header = ({ className, clickHandler }) => {
  return (
    <header className={headerStyles.headerWrapper}>
      <Button className={headerStyles.btn} onClick={clickHandler}>
        <AiOutlineLeft />
      </Button>
      <div className={`${headerStyles.pages}`}>
        <h3>თანამშრომლის ინფო</h3>
        <h3>ლეპტოპის მახასიათებლები</h3>
      </div>
    </header>
  );
};

export default Header;
