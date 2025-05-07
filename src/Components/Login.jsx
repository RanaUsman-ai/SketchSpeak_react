import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import validation from "./LoginValid";
import axios from 'axios';
import loginImage from './images/2.jpg';

const Login = ({ setIsLoggedIn }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setError(validationErrors);

    if (!validationErrors.email && !validationErrors.password) {
      axios.post("http://localhost:8081/login", values)
        .then(res => {
          if (res.data.length !== 0) {
            setIsLoggedIn(true); // ✅ yeh line add ki hai
            navigate('/Home');
          } else {
            alert("No Record Found");
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Login" />
        <div className="left-text">
          <h1>Your Style Our Vision</h1>
          <p>Turn your creativity into reality. Join a community where every stitch, every design, tells a story.</p>
        </div>
      </div>

      <div className="login-right">
        <h2>Login</h2>
        <p>Welcome Back! Please enter your details.</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={handleInput}
            placeholder="Email"
            name="email"
            value={values.email}
            required
          />
          {error.email && <span>{error.email}</span>}

          <input
            type="password"
            onChange={handleInput}
            placeholder="Password"
            name="password"
            value={values.password}
            required
          />
          {error.password && <span>{error.password}</span>}

          <button type="submit" className="login-btn">Login</button>
          <button type="button" className="register-btn" onClick={() => navigate('/signup')}>Register</button>

          <div className="or-divider">OR</div>

          <button type="button" className="google-btn">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
            Sign in with Google
          </button>

          <p className="signup-link">Don't have an account? <Link to="/signup">Sign up for free</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
