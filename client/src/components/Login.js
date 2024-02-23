import React, { useState } from 'react';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { Link } from 'react-router-dom';
const Registration = () => {
  const Navigate = useNavigate()
// visiblity of the password
  const [showPassword,setShowPassword]=useState(false)
  const togglePassword=()=>setShowPassword(!showPassword)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', formData);
      
      // Assuming the response contains a 'Token'
      const token = response.data.token;
      console.log(response.data, token);
      
      // Check if the response contains a token
      if (token) {
        // Save the token to localStorage or a state management solution
        // For example, 
        localStorage.setItem('token', token);
  
        // Redirect to the home page
        Navigate('/');
        console.log(localStorage)
      } else {
        // Handle the case where the token is not present in the response
        console.error('Token not found in the response');
      }
    } catch (error) {
      console.log(error);
      // Handle errors, such as network issues or server errors
    }
  };
  
  return (
    <div className="bg-gray-100 w-full h-screen flex items-center justify-center">
      <div className=" p-8 bg-white rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <div className='relative' >
          <input
            type={showPassword ? "text"  : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border p-3 rounded-lg  w-full"
          />
          <span onClick={togglePassword} className="absolute top-1/2 right-3  -translate-y-1/2 text-gray-500">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          </div>
          
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
