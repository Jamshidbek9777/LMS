"use client"; // Add this directive at the top

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Simulate login delay
    }, 2000);
  };

  return (
    <main>
      <div className="container">
        <div className="welcome-section">
          <h1>Welcome</h1>
          <p>We are happy to see you back!</p>
        </div>
        <div className="login-form">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <i className="fa fa-user" aria-hidden="true"></i>
              <input type="text" required placeholder=" " />
              <label>Username</label>
            </div>
            <div className="input-container">
              <i className="fa fa-lock" aria-hidden="true"></i>
              <input type="password" required placeholder=" " />
              <label>Password</label>
            </div>
            <button type="submit" className={loading ? "loading" : ""}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="separator">OR</div>

          <div className="social-login">
            <button className="social-button gmail">
              <i className="fa-brands fa-google"></i> Login with Gmail
            </button>
            <button className="social-button telegram">
              <i className="fa-brands fa-telegram"></i> Login with Telegram
            </button>
            <button className="social-button github">
              <i className="fa-brands fa-github"></i> Login with GitHub
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
