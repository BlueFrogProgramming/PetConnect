import { useState } from 'react';
import { signUp } from 'aws-amplify/auth';
import 'boxicons';
import logo from "../images/logo.png"

export default function Register({ onNavigate }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signUp({
        username: registerData.email,
        password: registerData.password,
        options: {
          userAttributes: {
            email: registerData.email,
            name: `${registerData.firstName} ${registerData.lastName}`,
            family_name: registerData.lastName,
            picture: "test"
          }
        }
      });
      console.log('User registered:', user);
      setMessage('User registered successfully! Please check your email to confirm your account.');
      onNavigate('verify-account');
    } catch (error) {
      console.error('Error registering:', error);
      setMessage(error.message || 'An unexpected error occurred');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen bg-cyan-50 flex items-center justify-center p-4 w-screen">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 text-center">
        <div className="mb-6 flex justify-center">
          <img src={logo} alt="Logo" width={150} height={150} />
        </div>
        <h1 className="text-5xl pb-10 font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Register</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-2">
            <input
              id="first-name"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={registerData.firstName}
              onChange={handleChange}
              required
              className="bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 text-black"
            />
          </div>
          <div className="space-y-2">
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={registerData.lastName}
              onChange={handleChange}
              required
              className="bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 text-black"
            />
          </div>
          <div className="space-y-2">
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              required
              className="bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 text-black"
            />
          </div>
          <div className="space-y-2 relative">
            <input
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              required
              className="bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 text-black"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {passwordVisible ? (
                <box-icon name="show" color="#9ca3af" size="sm"></box-icon>
              ) : (
                <box-icon name="hide" color="#9ca3af" size="sm"></box-icon>
              )}
            </button>
          </div>
          {message && (
            <p className="text-sm text-red-500 text-center">{message}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-md transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center space-y-2">
          <p className="text-gray-600 pt-3">Already have an account?</p>
          <button
            onClick={() => onNavigate("login")}
            className="w-full py-2 px-4 bg-white border border-[#0ea5e9] text-[#0ea5e9] font-medium rounded-md hover:bg-[#0ea5e9] hover:text-white transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}