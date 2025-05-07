import React, { useState } from 'react';
import './login.css'; // ✅ ya './login.css' agar same file use karni hai
import { Link, useNavigate } from 'react-router-dom';
import signupValidation from './SignUpValid';
import axios from "axios";
import SignupImage from './images/4.jpg'; // ✅ same image

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = signupValidation(values);
    setError(validationErrors);

    if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
      axios.post("http://localhost:8081/signup", values)
        .then(res => navigate('/'))
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
      <img src={SignupImage} alt="Login" />
        <h1>Your Style Our Vision</h1>
        <p>Turn your creativity into reality. Join a community where every stitch, every design, tells a story.</p>
      </div>

      <div className="auth-right">
        <h2>Sign Up</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" name="name" onChange={handleInput} placeholder="Name" required />
          {error.name && <span>{error.name}</span>}
          <input type="email" name="email" onChange={handleInput} placeholder="Email" required />
          {error.email && <span>{error.email}</span>}
          <input type="password" name="password" onChange={handleInput} placeholder="Password" required />
          {error.password && <span>{error.password}</span>}
          <button type="submit">Sign Up</button>
          <p>Already have an account? <Link to="/">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
