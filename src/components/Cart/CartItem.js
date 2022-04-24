import styles from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <div className={styles[`cart-item`]}>
      <div className={styles[`cart-item__content-area`]}>
        <h3>{props.mealName}</h3>
        <div className={styles[`cart-item__price`]}>
          <span>${props.mealPrice}</span>
          <span>X{props.countOfMeal}</span>
        </div>
      </div>
      <div className={styles[`cart-item__control-area`]}>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};
export default CartItem;
