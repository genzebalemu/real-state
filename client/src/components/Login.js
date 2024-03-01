import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RingLoader } from 'react-spinners';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../redux/Slice/UserSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.user.isLoading);

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const response = await axios.post('http://localhost:4000/login', formData);

      if (response.data.token) {
        dispatch(loginSuccess(response.data.user));
        navigate('/');
      } else {
        dispatch(loginFailure('Login failure'));
      }
    } catch (error) {
      dispatch(loginFailure('Internal server error'));
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

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="border p-3 rounded-lg  w-full"
            />
            <span
              onClick={togglePassword}
              className="absolute top-1/2 right-3  -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <button 
          disabled={isLoading}
          className="bg-blue-500 h-10 rounded-xl text-lg text-white font-bold hover:opacity-95 disabled:opacity-80">
            {isLoading ? 'Loading...' : 'Sign In '}
          </button>

          <button className="bg-blue-500 h-10 rounded-xl text-lg text-white font-bold bg-red-700">
            Sign in with Google
          </button>
        </form>
        <div className="flex  space-x-2 py-4">
          <p>Haven't an account?</p>
          <Link to={'/signup'} className="text-blue-700 underline ">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
