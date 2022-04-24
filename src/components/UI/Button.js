import styles from './Button.module.css'
const Button = (props) => {
    let cls = props.className;
    return (
        <button className={`${styles[`button`]}  ${cls}`} type={props.type} onClick={props.onClick}>
            {props.children}
        </button >
    );
}
export default Button