import React, { createContext, useContext, useState, useEffect } from 'react';  

const CartContext = createContext();  

export const useCart = () => {  
  return useContext(CartContext);  
};  

export const CartProvider = ({ children }) => {  
  const [cartItems, setCartItems] = useState([]);  

  const addToCart = (item) => {  
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name && cartItem.color === item.color);  
    if (existingItem) {  
      setCartItems(cartItems.map(cartItem =>  
        cartItem.name === item.name && cartItem.color === item.color  
          ? { ...cartItem, quantity: cartItem.quantity + 1 }  
          : cartItem  
      ));  
    } else {  
      setCartItems([...cartItems, { ...item, quantity: 1 }]);  
    }  
  };  

  const removeItemFromCart = (item) => {
    const newCartItems = cartItems.filter(cartItem => cartItem.name !== item.name || cartItem.color !== item.color);
    setCartItems(newCartItems);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);  

  useEffect(() => {
    const handleCartUpdate = () => {

    };

    document.addEventListener('removeItem', handleCartUpdate);

    return () => {
      document.removeEventListener('removeItem', handleCartUpdate);
    };
  }, [cartItems]);

  return (  
    <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart, totalItems }}>  
      {children}  
    </CartContext.Provider>  
  );  
};  