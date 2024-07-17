import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import LoginSignup from "./pages/LoginSignup";
import Product from "./pages/Product";
import ShopCategor from "./pages/ShopCategor";
import Cart from "./pages/Cart";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategor category="men" />} />
        <Route path="/womens" element={<ShopCategor category="women" />} />
        <Route path="/kids" element={<ShopCategor category="kid" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </BrowserRouter>
    </div>
  );
};

export default App;
