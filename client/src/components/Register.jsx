import { useState } from 'react';
import { signUp } from 'aws-amplify/auth'; // Import Auth methods from aws-amplify/auth
import './Styles/Login-RegisterStyle.css';
import 'boxicons';

function Register({ onNavigate }) {
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
        attributes: {
          email: registerData.email,
          family_name: registerData.lastName,
          name: `${registerData.firstName} ${registerData.lastName}`,
          picture: ''
        }
      });
      console.log('User registered:', user);
      setMessage('User registered successfully! Please check your email to confirm your account.');
      onNavigate('verifyaccount');
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
    <>
      <div className="wrapper">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div className="input-box">
            <input
              type='text'
              placeholder="First Name"
              name="firstName"
              value={registerData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type='text'
              placeholder="Last Name"
              name="lastName"
              value={registerData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type='email'
              placeholder="Email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <box-icon name='show' color="rgba(255, 255, 255, 0.5)"></box-icon>
              ) : (
                <box-icon name='hide' color="rgba(255, 255, 255, 0.5)"></box-icon>
              )}
            </button>
          </div>
          <button type='submit' className="submit-button">Register</button>
        </form>
        <p className="error">{message}</p>
        <p className="change-page-text">Already have an account? </p>
        <button onClick={() => onNavigate('login')} className="change-page">Login</button>
      </div>
    </>
  );
}

export default Register;
