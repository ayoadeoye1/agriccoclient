import React, { useState } from 'react';

const AccountPage = () => {
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here
    console.log('Sign-in:', signInData);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here
    console.log('Sign-up:', signUpData);
  };

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        {isSignIn ? (
          <form onSubmit={handleSignInSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={signInData.email}
                onChange={handleSignInChange}
                className="border border-gray-400 rounded-md py-2 px-4 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={signInData.password}
                onChange={handleSignInChange}
                className="border border-gray-400 rounded-md py-2 px-4 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign In
            </button>
            <p className="text-gray-600 mt-4">
              Don't have an account?{' '}
              <button
                onClick={handleToggleForm}
                className="text-blue-500 underline focus:outline-none"
              >
                Sign Up
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignUpSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={signUpData.name}
                onChange={handleSignUpChange}
                className="border border-gray-400 rounded-md py-2 px-4 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={signUpData.email}
                onChange={handleSignUpChange}
                className="border border-gray-400 rounded-md py-2 px-4 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
                className="border border-gray-400 rounded-md py-2 px-4 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
            <p className="text-gray-600 mt-4">
              Already have an account?{' '}
              <button
                onClick={handleToggleForm}
                className="text-blue-500 underline focus:outline-none"
              >
                Sign In
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
