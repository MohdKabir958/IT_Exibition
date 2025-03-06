import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import  {Link}  from 'react-router-dom';
import {Button} from "../components/index"

const LoginForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <div data-aos="zoom-in" className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
        <p className="text-gray-400 text-center mb-6">Login to your account to continue</p>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full px-4 py-3 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <Button
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Login
          </Button>
        </form>
        
        <p className="text-center text-gray-400 mt-4">
          Don't have an account? 
          {/* <Link to='/signup' className="text-blue-400 hover:underline">Sign up</Link> */}
          <Link
            to="/"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
