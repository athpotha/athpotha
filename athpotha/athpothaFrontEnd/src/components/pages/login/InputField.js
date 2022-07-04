import React from "react";

const InputField = (props) => {
  return (
    <div className={classes["input-wrap"]}>
      <input
        type="text"
        minLength="4"
        className={classes["input-field"]}
        autoComplete="off"
        required
        onClick={changeFocus}
      />
      <label>{props.name}</label>
    </div>
  );
};

export default InputField;
