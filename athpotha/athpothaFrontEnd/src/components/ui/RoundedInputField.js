import React from "react";
import classes from "./RoundedInputField.module.css";

function RoundedInputField(props) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      style={{ width: `${props.width}`, height: `${props.height}` }}
      className={classes["rounded-inputField"]}
    />
  );
}

export default RoundedInputField;
