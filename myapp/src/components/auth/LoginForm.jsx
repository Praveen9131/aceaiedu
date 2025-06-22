import React, { useState } from 'react';

const LoginForm = ({ onSwitchView }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }
    console.log('Login data:', formData);
    // Handle login logic here
  };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Sign in to your learning account</p>
      </div>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your email"
            required
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            placeholder="Enter your password"
            required
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <button type="submit" className="edutech-button">Sign In</button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-text-secondary">
          Don't have an account?{' '}
          <button onClick={onSwitchView} className="text-accent-color hover:underline">Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;