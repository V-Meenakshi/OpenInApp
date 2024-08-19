import React, { useContext } from 'react';
import './login.css';
import { FaGoogle, FaApple, FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { globalContext } from './App';

function Login() {
  const {setGlobalIsLogin}=useContext(globalContext);
  const formSubmitted=(event)=>{
    event.preventDefault();
    console.log("form submitted");
    setGlobalIsLogin(true);
  }

  return (
    <div className="login-container">
        <div className='"card'>
        <h2>Sign In</h2>
        <p>Sign in to your account</p>

        <button className="social-signin google">
            <FaGoogle className="icon" /> Sign in with Google
        </button>

        <button className="social-signin apple">
            <FaApple className="icon" /> Sign in with Apple
        </button>

        <form onSubmit={formSubmitted}>
            <label>Email address</label>
            <input type="email" value="johndoe@gmail.com" readOnly />

            <label>Password</label>
            <input type="password" value="********" readOnly/>

            <a href="/" className="forgot-password">Forgot password?</a>
            <button type="submit" className="signin-button" >Sign In</button>
        </form>

        <p className="register">Don't have an account? <a href="/">Register here</a></p>

        <div className="social-icons">
            <FaGithub />
            <FaTwitter />
            <FaLinkedin />
            <FaDiscord />
        </div>
      </div>
    </div>
  );
}

export default Login;
