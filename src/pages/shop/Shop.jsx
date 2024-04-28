import React, { useEffect, useState } from "react";
import './Shop.css'
import Product from "./Product";

const Shop = () => {
  const [items, setitems] = useState([]);

  useEffect(() => {
    const fetchdata = () => {
      fetch("https://fakestoreapi.com/products?limit=20")
        .then((res) => res.json())
        .then((json) => setitems(json));
    };
    fetchdata();
  }, []);

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
