import { useRef, useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./MealItem.module.css";
const MealItem = (props) => {
  const inputRef = useRef();
  const cartCtx = useContext(CartContext);
  const addItemHandler = (event) => {
    event.preventDefault();
    let enteredAmount = inputRef.current.value;
    if (enteredAmount.trim().length === 0) {
      return;
    }
    const newItem = {
      id: new Date().getTime(),
      name: props.mealName,
      description: props.mealDescription,
      price: props.mealPrice.toFixed(2),
      amount: +enteredAmount,
    };
    cartCtx.addItem(newItem);
  };
  return (
    <div className={styles[`meal-item`]}>
      <div className={styles[`meal-item__description`]}>
        <span>{props.mealName}</span>
        <span>{props.mealDescription}</span>
        <span>${props.mealPrice.toFixed(2)}</span>
      </div>
      <form onSubmit={addItemHandler}>
        <Input
          ref={inputRef}
          label="Amount"
          input={{
            id: props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <div className={styles["meal-item__action-area"]}>
          <Button type="submit" className={styles[`item-button`]}>
            + Add
          </Button>
        </div>
      </form>
    </div>
  );
};
export default MealItem;
