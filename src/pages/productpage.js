import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Product 1', image: 'product1.jpg', price: '$19.99' },
    { id: 2, name: 'Product 2', image: 'product2.jpg', price: '$24.99' },
    { id: 3, name: 'Product 3', image: 'product3.jpg', price: '$29.99' },
    { id: 4, name: 'Product 4', image: 'product4.jpg', price: '$34.99' },
    { id: 5, name: 'Product 5', image: 'product5.jpg', price: '$39.99' },
  ];

  const navigate = useNavigate();

  const notLoggedIn = () =>{
    alert('cannot add to cart, you must be authenticated. you will be redirected in 3 sec!');

    setTimeout(() =>{
        navigate('/account');
    }, 3000)
  }

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.price}</p>
              <button onClick={() => notLoggedIn() } className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
