import React, { useContext, useEffect, useState } from "react";
import "./LoginForm.css"; // Import the CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser, setUsername, username, user } = useContext(AuthContext);
  
  const handleGuest = async () => {
    try {
      let details = {};
      details["username"] = "test1";
      details["password"] = "123";

      let res = await axios.post("https://fullstackproject-ft5k.onrender.com/user/login", details);
      console.log(res.data, "res");
      setUser(res.data.token);
      setUsername(res.data.username);
      localStorage.setItem("token", res.data.token);
      if (!res.data.token) return alert(" No token");
      if (res.data.role == "user") {
        navigate("/");
      } else {
        navigate("/resultspage");
      }
    } catch (error) {
      console.log("errrrrrrrrrrrrrrrrrrrrrr");
    }
  };

  const handleGuestAdmin = async () => {
    try {
      let details = {};
      details["username"] = "Nagendra";
      details["password"] = "1234";

      let res = await axios.post("https://fullstackproject-ft5k.onrender.com/user/login", details);
      console.log(res.data, "res");
      setUser(res.data.token);
      setUsername(res.data.username);
      localStorage.setItem("token", res.data.token);
      if (!res.data.token) return alert(" No token");
      if (res.data.role == "user") {
        navigate("/");
      } else {
        navigate("/resultspage");
      }
    } catch (error) {
      console.log("errrrrrrrrrrrrrrrrrrrrrr");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let details = {};
      details["username"] = event.target.username.value;
      details["password"] = event.target.password.value;

      let res = await axios.post("https://fullstackproject-ft5k.onrender.com/user/login", details);
      console.log(res.data, "res");
      setUser(res.data.token);
      setUsername(res.data.username);
      localStorage.setItem("token", res.data.token);
      if (!res.data.token) return alert(" No token");
      if (res.data.role == "user") {
        navigate("/");
      } else {
        navigate("/resultspage");
      }
    } catch (error) {
      console.log("errrrrrrrrrrrrrrrrrrrrrr");
    }
  };

  useEffect(() => {
    console.log("login useffect");
  }, []);

  return (
    <div className="container">
      <h2 className="Container-heading">Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="button">
          Login
        </button>
      </form>
      <button onClick={handleGuest} className="guest_btn">Guest Login</button>
      <button onClick={handleGuestAdmin} className="guestadmin_btn">Guest Admin Login</button>
      <p className="Container-heading">
        Don't have an account already ? Register <Link to="/register">here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
