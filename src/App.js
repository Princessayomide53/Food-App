import React, { useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(!openModal);
  };

  const hideModal = () => {
    setOpenModal(false);
  };
  return (
    <CartProvider>
      {openModal && <Cart onHideCart={hideModal} />}
      <Header onClick={showModal} />

      <main className="bg-[#383838] h-full -mb-10 pb-5">
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
