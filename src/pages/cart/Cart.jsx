import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import './Cart.css'

const Cart = () => {
  const { items, isLoading, cartItems } = useContext(ShopContext);

  console.log(items);

  if (isLoading) {
    return <p>Loading cart items...</p>; // Placeholder for loading state
  }

  return (
    <div className="cart-container">
      <div className="name">
        <h1>Your cart items</h1>
      </div>
      <div className="cart-items">
        {items.map((item) => {
          if (cartItems[item.id] !== 0) {
            console.log(cartItems[item.id]);
            console.log(item);
            return <CartItem item={item} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;
