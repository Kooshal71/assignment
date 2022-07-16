import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import bigboy from "../images/BigBoy.png";
export default function Reset() {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
    // console.log(credentials);
  };
  const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/reset_password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    // console.log(response);
  };
  return (
    <div>
      <p className="logo">Your Logo</p>
      <div className="container">
        <h2 className="sign">Forgot your Password</h2>
        <br />
        <div className="text">
          <p style={{ margin: 0 }}>
            Please enter the email address you would like your password reset
            information sent to
          </p>
          <p style={{ marginTop: "6px" }}>
            To go back to login page{" "}
            <Link to="/" style={{ marginLeft: "5px" }}>
              Click Here
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
              value={email}
            />
          </div>
          <br />
          <button className="submit">Login</button>
        </form>
      </div>
      <img src={bigboy} alt="" className="bigboy" />
    </div>
  );
}
