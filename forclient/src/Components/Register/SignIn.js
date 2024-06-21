import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { SignIn as signInAction } from '../../Redux/Actions/actions';
import './register.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (email === '' || password === '') {
      alert('Invalid login. Please try again');
    } else {
      try {
        await dispatch(signInAction({ email, password }, navigate));
      } catch (err) {
        setError(err.response.data.msg);
        alert(err.response.data.msg); // Display alert with error message
      }
    }
  };

  return (
    <div className="registerForm">
      <section className="get-in-touch">
        <h1 className="title">LogIn</h1>
        <form className="contact-form row" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <div className="form-field col-lg-6">
            <input
              id="email"
              className="input-text js-input"
              type="email"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label" htmlFor="email">
              E-mail
            </label>
          </div>
          <div className="form-field col-lg-6 ">
            <input
              id="password"
              className="input-text js-input"
              type="password"
              required=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label" htmlFor="password">
              Password
            </label>
          </div>
          <div className="form-field col-lg-12">
            <input type="submit" className="submit-btn" value="Submit" />
          </div>
        </form>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Link to="/SignUp"><h6 className="signup-redirect">Create an account?</h6></Link>
      </section>
    </div>
  );
}

export default Login;
