import { useState, useEffect } from 'react';
import { getCurrentUser, signIn } from 'aws-amplify/auth';
import './Styles/Login-RegisterStyle.css';  // Retained original styles
import 'boxicons';

function Login({ onNavigate }) {
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
    <div className="container">
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              id="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={togglePasswordVisibility} className="icon-button">
              {passwordVisible ? (
                <box-icon name="show" color="rgba(255, 255, 255, 0.5)"></box-icon>
              ) : (
                <box-icon name="hide" color="rgba(255, 255, 255, 0.5)"></box-icon>
              )}
            </button>
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
        <p className="error">{message}</p>
        <p className="text-center">Don't have an account? </p>
        <button onClick={() => onNavigate("register")} className="change-page">Register</button>
      </div>
    </div>
  );
}

export default Login;
