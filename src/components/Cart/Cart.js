import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  return (
    <React.Fragment>
      <div className={styles[`overlay`]}></div>
      <Card className={styles[`cart`]}>
        <ul>
          {props.meals.map((item, idx) => {
            return (
              <li>
                <CartItem
                  mealName={item.name}
                  mealPrice={item.price}
                  countOfMeal={item.count}
                />
              </li>
            );
          })}
        </ul>
        <div className={styles[`cart__total-amount`]}>
          <span>Total Amount</span>
          <span>$123.99</span>
        </div>
        <div className={styles[`cart__action-area`]}>
          <Button className={styles[`close-btn`]}>Close</Button>
          <Button className={styles[`order-btn`]}>Order</Button>
        </div>
      </Card>
    </React.Fragment>
  );
};
export default Cart;
