import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  return (
    <div className="bg-gray-100 w-full h-screen flex items-center justify-center">
      <div className="mx-auto p-8 bg-white rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="flex flex-col space-y-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border p-3 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-3 rounded-lg"
          />

          <button className="bg-blue-500 h-10 rounded-xl text-lg text-white font-bold">
            Sign Up
          </button>
          <button className="bg-blue-500 h-10 rounded-xl text-lg text-white font-bold bg-red-700">
            SignUp with Google
          </button>
        </form>
        <div className='flex  space-x-2 py-4'>
          <p>Have an account?</p>
          <Link to={'/signin'} className='text-blue-700 underline '>sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
