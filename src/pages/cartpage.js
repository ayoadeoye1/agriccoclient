import React from 'react';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: '$19.99', quantity: 2 },
    { id: 2, name: 'Product 2', price: '$24.99', quantity: 1 },
    { id: 3, name: 'Product 3', price: '$29.99', quantity: 3 },
  ];

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price.slice(1)) * item.quantity), 0);
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Items in Cart</h3>
            <p className="text-gray-600">Total: {getTotalPrice().toFixed(2)}</p>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white shadow rounded-lg mb-4">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">Price: {item.price}</p>
                <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
