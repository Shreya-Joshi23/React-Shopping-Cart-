import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

// {
// id:count
//     1:0,
//     2:0,
//     3:0
//     .
//     .
//     .
// }

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 21; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=20");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);

  console.log(cartItems);

  const gettotalamount=()=>{
    let total=0;
    items.map((item)=>{
      if(cartItems[item.id]>0){
        total+=cartItems[item.id]*item.price;
      }
      return null;
    })
    return total;
  }

  const addtocart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
  };

  const removefromcart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };

  const updatecartitemcount=(newcount,Itemid)=>{
    setCartItems((prev)=>({...prev,[Itemid]:newcount}))
  }

  const contextValue = { items,isLoading,cartItems,gettotalamount,updatecartitemcount, addtocart, removefromcart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
