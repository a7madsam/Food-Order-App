import Button from "../UI/Button";
import Input from "../UI/Input";
import styles from "./MealItem.module.css";
const MealItem = (props) => {
  return (
    <div className={styles[`meal-item`]}>
      <div className={styles[`meal-item__description`]}>
        <span>{props.mealName}</span>
        <span>{props.mealDescription}</span>
        <span>${props.mealPrice.toFixed(2)}</span>
      </div>
      <form>
        <Input
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
