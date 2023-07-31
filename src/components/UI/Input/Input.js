import React, { useRef, useImperativeHandle } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef(
  ({ type, states, changeHandler, validHandler, children }, ref) => {
    const inputRef = useRef();
    const focus = () => {
      inputRef.current.focus();
    };
    useImperativeHandle(ref, () => {
      return {
        focus: focus,
      };
    });
    return (
      <div
        className={`${styles.control} ${
          states.isValid === false ? styles.invalid : ""
        }`}
      >
        <label htmlFor={type}>{children}</label>
        <input
          ref={inputRef}
          type={type}
          id={type}
          value={states.value}
          onChange={changeHandler}
          onBlur={validHandler}
        />
      </div>
    );
  }
);
export default Input;
