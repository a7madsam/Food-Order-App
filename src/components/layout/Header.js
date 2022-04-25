import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import styles from "./Header.module.css";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const cartProvider = useContext(CartContext);
  const [isPump, setIsPump] = useState(false);
  useEffect(() => {
    if (cartProvider.items.length === 0) {
      return;
    }
    setIsPump(true);
    let timer = setTimeout(() => {
      setIsPump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartProvider.items.length, cartProvider.totalAmount]);
  let numberOfItems = cartProvider.items.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);
  return (
    <header className={styles[`header`]}>
      <h1>ReactMeals</h1>
      <Button
        className={`${styles[`header__cart-button`]} ${
          isPump && styles[`bump`]
        }`}
        onClick={props.showDialog}
      >
        <FontAwesomeIcon icon={faCartShopping} />
        Your Cart
        <div className={styles[`header__number-of-items`]}>{numberOfItems}</div>
      </Button>
    </header>
  );
};
export default Header;
