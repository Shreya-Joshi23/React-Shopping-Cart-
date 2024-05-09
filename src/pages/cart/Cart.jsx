import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { gettotalamount, items, isLoading, cartItems } = useContext(ShopContext);

  console.log(items);
  const nav=useNavigate();

  const totalamount=gettotalamount();

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

     { (totalamount>0)?(
     <div className="checkout">
        <p>Subtotal:${totalamount}</p>
        <button onClick={()=>nav('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
     ):(
        <h1 className="noitem">No items added to cart</h1>
      )}
      
    </div>
  );
};

export default Cart;
