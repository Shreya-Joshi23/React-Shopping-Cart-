import React, { createContext, useState } from 'react'

export const ShopContext=createContext(null);

// {
   // id:count
//     1:0,
//     2:0,
//     3:0
//     .
//     .
//     .
// }

const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<21;i++){
        cart[i]=0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart);
    
   console.log(cartItems);

    const addtocart=(ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
    }

    const removefromcart=(ItemId)=>{
        setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
    }

    const contextValue={cartItems,addtocart,removefromcart}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

export default ShopContextProvider
