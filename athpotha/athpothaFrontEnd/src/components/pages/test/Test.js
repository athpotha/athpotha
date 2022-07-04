import React from "react";
import classes from "./Test.module.css";

const Test = () => {
  const btnClickHandler = () => {
    document.querySelector(`.${classes["inner-box"]}`).style.backgroundColor = "black";
  };
  return (
    <div className={classes["outer-box"]}>
      <div className={classes["inner-box"]}></div>
      <button className={classes.submitBtn} onClick={btnClickHandler}>
        Click on me
      </button>
    </div>
  );
};

export default Test;
