import React, { useState } from "react";
import './App.css'
import Header from "./components/layout/Header";
import LandingPage from "./components/layout/LandingPage";
import Meals from "./components/Meals/Meals";
function App() {
  const [isClickedToGoDown, setIsClickedToGoDown] = useState(false);
  const clickedToGoDownHandler = () => {
    setIsClickedToGoDown(true);
  }
  return (
    <React.Fragment >
      <Header />
      <LandingPage onClickToGoDown={clickedToGoDownHandler} />
      <Meals addAnimation={isClickedToGoDown} />
    </React.Fragment>
  );
}

export default App;
