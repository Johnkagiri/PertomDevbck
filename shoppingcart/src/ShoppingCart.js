import React, { useState } from 'react';

const ShoppingCart = ({products}) => {

  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className='p-4' >
      <h2><b>Products</b></h2>
      <ul className=' grid grid-cols-3 gap-4 mb-10 mt-2 ' >
        {products.map((product, index) => (
          <li className=' flex flex-col border border-slate-400  ' key={index}>
            <h4>{product.name} </h4> ${product.price}
            <button className=' bg-blue-700 w-6/12 m-auto rounded-lg hover:bg-blue-950 ' onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2><b>Shopping Cart</b></h2>
      <ul className=' grid grid-cols-3 gap-4 mb-10 mt-2 ' >
        {cartItems.map((item, index) => (
          <li className=' flex flex-col border border-slate-400  ' key={index}>
           <h4> {item.name} </h4> ${item.price}
            <button className=' bg-red-700 w-6/12 m-auto rounded-lg hover:bg-red-950 ' onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default ShoppingCart;