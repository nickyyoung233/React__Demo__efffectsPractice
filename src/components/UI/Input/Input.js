import styles from "./Input.module.css";

const Input = ({ type, states, changeHandler, validHandler, children }) => {
  return (
    <div
      className={`${styles.control} ${
        states.isValid === false ? styles.invalid : ""
      }`}
    >
      <label htmlFor={type}>{children}</label>
      <input
        type={type}
        id={type}
        value={states.value}
        onChange={changeHandler}
        onBlur={validHandler}
      />
    </div>
  );
};
export default Input;
