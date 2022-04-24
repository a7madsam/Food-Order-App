import styles from "./Meals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
const MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const Meals = (props) => {
  return (
    <Card
      id="meals-area"
      className={`${styles[`meals`]} ${
        props.addAnimation ? styles["apply-animation"] : ""
      }`}
    >
      <ul>
        {MEALS.map((item, idx) => {
          return (
            <li key={idx}>
              {
                <MealItem
                  mealName={item.name}
                  mealDescription={item.description}
                  mealPrice={item.price}
                />
              }
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default Meals;
