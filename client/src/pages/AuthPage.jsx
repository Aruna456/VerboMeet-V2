import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const AuthPage = ({ type }) => {
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: type === 'signup' ? '' : null,
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 

    const userData={
      email:formData.email,
      role:formData.email==="admin123@verbomeet.com"?"admin":"user",
     };
     console.log(userData);
     
  
     localStorage.setItem("user",JSON.stringify(userData))
    navigate('/home'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-blue-800 to-gray-900 p-6">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          {type === 'signin' ? 'Welcome Back!' : 'Create an Account'}
        </h2>
        <p className="text-center text-gray-500 mb-6">
          {type === 'signin'
            ? 'Please sign in to your account.'
            : 'Sign up to join the VerboMeet community.'}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'signup' && (
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          )}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {type === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-500">
            {type === 'signin' ? 'Don’t have an account?' : 'Already have an account?'}{' '}
            <a
              href={type === 'signin' ? '/signup' : '/signin'}
              className="text-purple-600 font-semibold hover:underline"
            >
              {type === 'signin' ? 'Sign Up' : 'Sign In'}
            </a>
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <a
            href="#"
            className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-all duration-300"
          >
            <Facebook className="text-purple-600" />
          </a>
          <a
            href="#"
            className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-all duration-300"
          >
            <Twitter className="text-purple-600" />
          </a>
          <a
            href="#"
            className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-all duration-300"
          >
            <Instagram className="text-purple-600" />
          </a>
          <a
            href="#"
            className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-all duration-300"
          >
            <Linkedin className="text-purple-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const SignIn = () => <AuthPage type="signin" />;
export const SignUp = () => <AuthPage type="signup" />;
