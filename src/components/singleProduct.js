import React from 'react';

const SingleProduct = ({ match }) => {
  const productId = match.params.id;

  // Fetch product data based on the productId

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {productId}</p>
      {/* Render product details */}
    </div>
  );
};

export default SingleProduct;
