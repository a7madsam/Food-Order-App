import styles from "./Meals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import { useEffect, useState } from "react";
const Meals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://foodorderproject-528a6-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      setMeals(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <Card
      id="meals-area"
      className={`${styles[`meals`]} ${
        props.addAnimation ? styles["apply-animation"] : ""
      }`}
    >
      {isLoading && <p className={styles["loading"]}>Meals is Loading...</p>}
      {!isLoading && (
        <ul>
          {meals.map((item, idx) => {
            return (
              <li key={idx}>
                {
                  <MealItem
                    id={idx}
                    mealName={item.name}
                    mealDescription={item.description}
                    mealPrice={item.price}
                  />
                }
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
};
export default Meals;
