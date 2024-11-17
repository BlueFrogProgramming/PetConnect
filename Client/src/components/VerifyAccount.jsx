import { useState } from 'react';
import { confirmSignUp, resendSignUpCode } from 'aws-amplify/auth';

function VerifyAccount({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  
  const handleVerify = async (event) => {
    event.preventDefault();
    try {
      // Confirm sign-up with verification code
      await confirmSignUp(email, verificationCode);
      setMessage('Account verified successfully!');
      onNavigate('login'); // Redirect to login page after successful verification
    } catch (error) {
      setMessage(error.message || 'Verification failed');
      console.error('Verification error:', error);
    }
  };

  const handleResendVerification = async () => {
    try {
      // Resend verification email
      await resendSignUpCode(email);
      setMessage('Verification email resent. Please check your inbox.');
    } catch (error) {
      setMessage(error.message || 'Failed to resend verification email');
      console.error('Resend verification error:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    console.log(email)
    if (name === 'verificationCode') setVerificationCode(value);
  };

  return (
    <div className="wrapper">
      <h1>Verify Your Account</h1>
      <form onSubmit={handleVerify}>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Verification Code"
            name="verificationCode"
            value={verificationCode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Verify</button>
      </form>
      <p className="error">{message}</p>
      <button onClick={handleResendVerification} className="resend-button">Resend Verification Email</button>
      <button onClick={() => onNavigate('login')} className="change-page">Back to Login</button>
    </div>
  );
}

export default VerifyAccount;
