import React, { useState } from "react";
import "../styles.css";
import bigboy from "../images/BigBoy.png";
import { Link } from "react-router-dom";
export default function Register() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    // console.log(credentials);
  };

  const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    // console.log(response);
  };

  return (
    <div>
      <p className="logo">Your Logo</p>
      <div className="container" style={{ marginTop: "100px" }}>
        <h2 className="sign">Sign Up</h2>
        <br />
        <div className="text">
          <p style={{ margin: 0 }}>If you already have an account register</p>
          <p style={{ marginTop: "6px" }}>
            You can{" "}
            <Link to="/" style={{ marginLeft: "5px" }}>
              Login Here !
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <div className="inputs">
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
          <label htmlFor="name">Username</label>
          <br />
          <div className="inputs">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your User Name"
              onChange={handleChange}
              value={credentials.name}
            />
          </div>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <div className="inputs">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              onChange={handleChange}
              value={credentials.password}
            />
          </div>
          <br />
          <label htmlFor="cpassword">Confirm Password</label>
          <br />
          <div className="inputs">
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="Confirm your Password"
              onChange={handleChange}
              value={credentials.cpassword}
            />
          </div>
          <button className="submit">Register</button>
        </form>
      </div>
      <img src={bigboy} alt="" className="bigboy" />
    </div>
  );
}
