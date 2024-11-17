import { useState, useEffect } from 'react';
import { getCurrentUser, signIn } from 'aws-amplify/auth';
import 'boxicons';
import logo from "../images/logo.png"

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getCurrentUser()
      .then(() => {
        onNavigate('home');
      })
      .catch(() => {});
  }, [onNavigate]);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await signIn({
        username: email,
        password: password
      });
      console.log('Sign in successful:', user);
      onNavigate('home');
    } catch (error) {
      console.log(error);
      if (error.message) {
        if (error.message === "User does not exist.") {
          setMessage("Incorrect email or password");
        } else {
          setMessage(error.message);
        }
      } else {
        setMessage('An unexpected error occurred.');
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen bg-cyan-50 flex items-center justify-center p-4 w-screen">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6 text-center">
        <div className="mb-6 flex justify-center ">
          <img src={logo} alt="Logo" width={150} height={150} />
        </div>
        <h1 className="text-5xl pb-10 font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 text-black"
            />
          </div>
          <div className="space-y-2 relative">
            <input
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-transparent w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 text-black"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 text-gray-400 hover:text-gray-600"
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
            className=" w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-400 text-white font-medium rounded-md transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center space-y-2">
          <p className="text-gray-600 pt-3">Don't have an account?</p>
          <button
            onClick={() => onNavigate("register")}
            className="w-full py-2 px-4 bg-white border border-[#0ea5e9] text-[#0ea5e9] font-medium rounded-md hover:bg-[#0ea5e9] hover:text-white transition duration-300"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}