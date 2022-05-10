import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [goCheckout, setGoCheckout] = useState(false);
  const [isError, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmited, setIsSubmted] = useState(false);
  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const orderHandler = () => {
    setGoCheckout(true);
  };
  const sendDataToServer = async (userData) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://foodorderproject-528a6-default-rtdb.firebaseio.com/orderApplications.json",
        {
          method: "POST",
          body: JSON.stringify({
            userData,
            orderdItems: cartCtx.items,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("sorry there somthing worng :(, try again later");
      }
      setIsSubmitting(false);
      setIsSubmted(true);
      cartCtx.emptyCart();
    } catch (error) {
      setIsSubmitting(false);
      setIsSubmted(false);
      setError(true);
    }
  };

  const cartCode = (
    <React.Fragment>
      {!goCheckout && (
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
      )}
      <div className={styles[`cart__total-amount`]}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount}</span>
      </div>
      {goCheckout && (
        <Checkout
          onConfirm={sendDataToServer}
          onCancel={props.hideDialog}
          className={styles["show_content"]}
        />
      )}
      {!goCheckout && (
        <div className={styles[`cart__action-area`]}>
          <Button className={styles[`close-btn`]} onClick={props.hideDialog}>
            Close
          </Button>
          {cartCtx.items.length > 0 && (
            <Button className={styles[`order-btn`]} onClick={orderHandler}>
              Order
            </Button>
          )}
        </div>
      )}
    </React.Fragment>
  );
  const submittingCode = (
    <p className={styles.center}>The order is sending....</p>
  );
  const submitedCode = (
    <React.Fragment>
      <p className={styles.center}>Order is sent successfully 😉</p>
      <div className={styles[`cart__action-area`]}>
        <Button className={styles[`close-btn`]} onClick={props.hideDialog}>
          Close
        </Button>
      </div>
    </React.Fragment>
  );
  const errorMessage = (
    <React.Fragment>
      <p className={styles.center}>
        Sorry there is somthing worng 😞
        <br />
        Please try again later
      </p>
      <div className={styles[`cart__action-area`]}>
        <Button className={styles[`close-btn`]} onClick={props.hideDialog}>
          Close
        </Button>
      </div>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <div className={styles[`overlay`]} onClick={props.hideDialog}></div>
      <Card className={styles[`cart`]}>
        {!isError && !isSubmitting && !isSubmited && cartCode}
        {isSubmitting && submittingCode}
        {!isError && !isSubmitting && isSubmited && submitedCode}
        {isError && errorMessage}
      </Card>
    </React.Fragment>
  );
};
export default Cart;
