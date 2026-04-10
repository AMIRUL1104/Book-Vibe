import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";

import { useEffect, useState } from "react";
// import { WishListContext } from "../WishListContext";
import { WishListContext } from "./components/WishListContext";

// react tostify
import { ToastContainer } from "react-toastify";

function App() {
  const [wishBooks, setWishBooks] = useState(() => {
    const storedWishBooks = localStorage.getItem("wishBooks");
    return storedWishBooks ? JSON.parse(storedWishBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishBooks", JSON.stringify(wishBooks));
  }, [wishBooks]);

  return (
    <>
      <Header />
      <WishListContext.Provider value={{ wishBooks, setWishBooks }}>
        <Outlet />
      </WishListContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
