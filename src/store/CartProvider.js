import CartContext from "./cart-context";
import { useReducer } from "react";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let isHere = false;
    let updatedItem;
    state.items.forEach((item, idx) => {
      if (item.name === action.newItem.name) {
        isHere = true;
        updatedItem = idx;
        return;
      }
    });
    let updatedItems, updatedTotalAmout;
    updatedTotalAmout =
      state.totalAmount + action.newItem.amount * action.newItem.price;
    if (!isHere) {
      updatedItems = state.items.concat(action.newItem);
    } else {
      let newUpdatedItem = {
        ...state.items[updatedItem],
        amount: state.items[updatedItem].amount + action.newItem.amount,
      };
      state.items[updatedItem] = newUpdatedItem;
      updatedItems = state.items;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmout };
  }
  if (action.type === "REMOVE_ITEM") {
    let updatedItems, updatedTotalAmout;
    let isRemove = false;
    state.items.forEach((item) => {
      if (item.id === action.id) {
        if (+item.amount === 1) {
          isRemove = true;
        } else {
          item.amount--;
        }
        updatedTotalAmout = state.totalAmount - item.price;
        return;
      }
    });
    if (isRemove) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      updatedItems = state.items;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmout };
  }
  if (action.type === "EMPTY_CART") {
    return defaultCartState;
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispachCart] = useReducer(cartReducer, defaultCartState);
  const addItem = (newItem) => {
    dispachCart({
      type: "ADD_ITEM",
      newItem: newItem,
    });
  };
  const removeItem = (id) => {
    dispachCart({
      type: "REMOVE_ITEM",
      id: id,
    });
  };
  const emptyCart = () => {
    dispachCart({
      type: "EMPTY_CART",
    });
  };
  let cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount.toFixed(2),
    addItem: addItem,
    removeItem: removeItem,
    emptyCart: emptyCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
