"use client"; // Add this directive at the top

import React, { useState } from "react";
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
      <div className="login-form">
        <div>Welcome Back!</div>
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
      </div>
    </main>
  );
};

export default Login;
