import styles from "./Card.module.css";
const Card = (props) => {
  let cls = props.className;
  return (
    <div id={props.id} className={`${styles[`card`]} ${cls}`}>
      {props.children}
    </div>
  );
};
export default Card;
