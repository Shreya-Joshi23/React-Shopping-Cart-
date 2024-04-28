import React, { useContext } from "react";
import "./Shop.css";
import { ShopContext } from "../../context/shop-context";

const Product = ({ item }) => {
   console.log(item);

   const {addtocart,cartItems}=useContext(ShopContext);


  return (
    <div className="itemcard" key={item.id}>
      <div className="itemimage">
        <img src={item.image} alt="image1"></img>
      </div>
      <p className="itemdes">{item.description}</p>
      <p>Price: ${item.price}</p>
      <button onClick={()=>addtocart(item.id)}>Add to Cart {cartItems[item.id]>0?<>({cartItems[item.id]})</>:null}</button>
    </div>
  );
};

export default Product;
