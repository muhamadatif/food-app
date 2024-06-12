import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandlelr = () => {
    setCartIsShown(true);
  };
  const closeCartHandlelr = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={closeCartHandlelr} />}
      <Header onShowCart={showCartHandlelr} />
      <Meals />
    </CartProvider>
  );
}

export default App;
