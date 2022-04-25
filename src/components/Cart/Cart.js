import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  return (
    <React.Fragment>
      <div className={styles[`overlay`]} onClick={props.hideDialog}></div>
      <Card className={styles[`cart`]}>
        <ul>
          {cartCtx.items.map((item, idx) => {
            return (
              <li key={idx}>
                <CartItem
                  id={item.id}
                  mealName={item.name}
                  mealPrice={item.price}
                  countOfMeal={item.amount}
                  addItem={addItemHandler.bind(null, item)}
                  removeItem={removeItemHandler.bind(null, item.id)}
                />
              </li>
            );
          })}
        </ul>
        <div className={styles[`cart__total-amount`]}>
          <span>Total Amount</span>
          <span>${cartCtx.totalAmount}</span>
        </div>
        <div className={styles[`cart__action-area`]}>
          <Button className={styles[`close-btn`]} onClick={props.hideDialog}>
            Close
          </Button>
          {cartCtx.items.length > 0 && (
            <Button className={styles[`order-btn`]}>Order</Button>
          )}
        </div>
      </Card>
    </React.Fragment>
  );
};
export default Cart;
