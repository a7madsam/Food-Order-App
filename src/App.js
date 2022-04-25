import React, { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/layout/Header";
import LandingPage from "./components/layout/LandingPage";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [isClickedToGoDown, setIsClickedToGoDown] = useState(false);
  const [isDialogShown, setIsDialogShown] = useState(false);
  const clickedToGoDownHandler = () => {
    setIsClickedToGoDown(true);
  };
  const showDialog = () => {
    setIsDialogShown(true);
  };
  const hideDialog = () => {
    setIsDialogShown(false);
  };
  return (
    <CartProvider>
      <Header showDialog={showDialog} />
      <LandingPage onClickToGoDown={clickedToGoDownHandler} />
      <Meals addAnimation={isClickedToGoDown} />
      {isDialogShown && <Cart hideDialog={hideDialog} />}
    </CartProvider>
  );
}

export default App;
