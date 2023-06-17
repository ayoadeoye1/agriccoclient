import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import HomePage from './pages/homepage';
import ProductPage from './pages/productpage';
import CartPage from './pages/cartpage';
import AccountPage from './pages/account';
import NotFoundPage from './pages/notFoundpage';
import './App.css'
import SingleProduct from './components/singleProduct';

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Navigate to='home' />} />

        <Route path="/*" element={<HomePage />}>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<CartPage />} />
        </Route>

        <Route path="account" element={<AccountPage />} /> 
        {/* histories and otherthings specific to user goes user this page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
};

export default App;
