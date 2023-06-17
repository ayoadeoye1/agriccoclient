import React from 'react';
import 'fa-icons'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="h" className="text-gray-400 hover:text-white">Foods</a>
              </li>
              <li>
                <a href="h" className="text-gray-400 hover:text-white">Insecticides</a>
              </li>
              <li>
                <a href="h" className="text-gray-400 hover:text-white">Drinks</a>
              </li>
              <li>
                <a href="h" className="text-gray-400 hover:text-white">Soaps & Detergents</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400">1566A, Ido road, Ibadan</p>
            <p className="text-gray-400">agriccong@gmail.com</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="h" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f">facebook</i>
              </a>
              <a href="h" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter">twitter</i>
              </a>
              <a href="h" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram">instagram</i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} AgriccoNG. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
