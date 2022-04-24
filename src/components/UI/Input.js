import styles from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={styles[`input-area`]}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};
export default Input;
