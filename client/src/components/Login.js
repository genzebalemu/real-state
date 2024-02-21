import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="bg-gray-100 w-full h-screen flex items-center justify-center">
      <div className=" p-8 bg-white rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form className="flex flex-col space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <button className="bg-blue-500 h-10 rounded-xl text-lg text-white font-bold">
            Sign In
          </button>
          <button className="bg-blue-500 h-10 rounded-xl text-lg text-white font-bold bg-red-700">
            Signin with Google
          </button>
        </form>
        <div className='flex  space-x-2 py-4'>
          <p>Haven,t an account?</p>
          <Link to={'/signup'} className='text-blue-700 underline '>sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
