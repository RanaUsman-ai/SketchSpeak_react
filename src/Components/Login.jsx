
import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import validation from "./LoginValid";
import axios from 'axios';
import img1 from "./images/2.jpg"
const Login = () => {
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
  
            navigate('/home');

          } else {
            alert("No Record Found");
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="auth-container">
     <div className="auth-left">
        <img src={img1} alt="Login" />
        <h1>Your Style Our Vision</h1>
        <p>Turn your creativity into reality. Join a community where every stitch, every design, tells a story.</p>
      </div> 
     
    <div className="login-right">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
    </div>
    
  );
};

export default Login;
