import React, { useContext} from "react";
import './Shop.css'
import Product from "./Product";
import { ShopContext } from "../../context/shop-context";

const Shop = () => {
  
  const {items,isLoading}=useContext(ShopContext);

  if (isLoading) {
    return <p>Loading cart items...</p>; 
  }
  
  return (
    <div className="shop">
      <div className="shopname">
        <h1>Coolest Collections</h1>
      </div>
      <div className="products">
        {items.map((item) => (
          <Product item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Shop;
