import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { signUpStart,signUpSuccess,signUpFailure } from '../redux/Slice/UserSlice';
const Registration = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [showPassword,setShowPassword]=useState(false);
  const togglePassword=()=>setShowPassword(!showPassword);

  const isLoading = useSelector((state)=>state.user.isLoading)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange=(e)=>{
    setFormData({ ...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpStart());
    
    try {
      const response = await axios.post('http://localhost:4000/signup', formData);
      console.log('Server Response:', response); // Add this log statement
      if (response.data.newUser) {
        dispatch(signUpSuccess(response.data.newUser));
        navigate('/signin')
      } else {
        dispatch(signUpFailure("Registration failed"));
      }
    } catch (error) {
      // console.error("Signup Error:", error.response?.data || error.message);
      if (error.response?.status === 400 && error.response?.data === "Email is already in use") {
        dispatch(signUpFailure("Email is already in use"));
      } else {
        dispatch(signUpFailure("Internal server error"));
      }
    }
    
  };
  
  return (
    <div className="bg-gray-100 w-full h-screen flex items-center justify-center">
      <div className="mx-auto p-8 bg-white rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
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
            {showPassword ? <FaEye /> : <FaEyeSlash /> }
          </span>
          </div>

          <button 
          disabled={isLoading}
          className="bg-blue-500 h-10 rounded-xl text-lg text-white font-bold">
           { isLoading ? 'Loading...':"sign Up"}
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
  }

export default Registration;
