import React, { useState } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import facebook from "../images/Facebook.png";
import apple from "../images/Apple.png";
import google from "../images/google.png";
import bigboy from "../images/BigBoy.png";
import messages from "../images/message.png";
import invisible from "../images/invisible.png";
import lock from "../images/padlock.png";
export default function Signin() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // console.log(credentials);
  };
  const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
  };
  return (
    <div>
      <p className="logo">Your Logo</p>
      <div className="container">
        <h2 className="sign">Sign In</h2>
        <br />
        <div className="text">
          <p style={{ margin: 0 }}>If you don't have an account register</p>
          <p style={{ marginTop: "6px" }}>
            You can{" "}
            <Link to="/register" style={{ marginLeft: "5px" }}>
              Register here !
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <div className="inputs">
            <img src={messages} alt="" style={{ marginRight: "10px" }} />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              onChange={handleChange}
              value={credentials.email}
            />
          </div>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <div className="inputs">
            <img src={lock} alt="" style={{ marginRight: "10px" }} />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your password"
              value={credentials.password}
              onChange={handleChange}
            />
            <img src={invisible} alt="" style={{ marginLeft: "65px" }} />
          </div>
          <br />

          <input type="checkbox" name="remember_me" id="remember_me" />
          <label htmlFor="remember_me" className="special bottom">
            Remember Me
          </label>
          <p
            style={{ display: "inline-block", marginLeft: "200px" }}
            className="bottom"
          >
            <Link to="/reset_password" style={{ color: "#4D4D4D" }}>
              Forgot Password?
            </Link>
          </p>
          <br />
          <button className="submit">Login</button>
        </form>
        <br />
        <p className="extra">or continue with</p>
        <div
          className="icons d-flex justify-content-center"
          style={{
            position: "absolute",
            marginLeft: "120px",
          }}
        >
          <img src={facebook} alt="xyz" />
          <img src={apple} alt="abc" className="apple" />
          <img src={google} alt="pqr" />
        </div>
      </div>
      <img src={bigboy} alt="" className="bigboy" />
    </div>
  );
}
