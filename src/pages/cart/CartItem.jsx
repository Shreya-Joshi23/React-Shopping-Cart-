import React from "react";
import "./Cart.css";

const CartItem = ({ item }) => {
  console.log({ item });

  return (
    <div className="cart-item" key={item.id}>
      <div className="item-image">
        <img src={item.image} alt="image1"></img>
      </div>
      <p className="item-price">Price: ${item.price}</p>
    </div>
  );
};

export default CartItem;
