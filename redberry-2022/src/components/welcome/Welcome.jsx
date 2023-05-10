import React from "react";
import Button from "../../generalUI/button/Button";
import welcomeStyles from "./welcomeStyles.module.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/employee", { replace: true });
  };

  return (
    <section className={welcomeStyles.welcomeWrapper}>
      <img src="/public/images/LOGO-02 1 (1).png" alt="redberry logo" />
      <img
        src="./public/images/Frame (1).png"
        alt="background photo"
        className={welcomeStyles.backGround1}
      />
      <img
        src="../../public/images/Group (1).png"
        alt="background photo"
        className={welcomeStyles.backGround2}
      />
      <div className={welcomeStyles.btnWrapper}>
        <Button onClick={clickHandler}>ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</Button>
        <Button>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</Button>
      </div>
    </section>
  );
};

export default Welcome;
