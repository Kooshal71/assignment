import React from "react";
import "../styles.css";
import bigboy from "../images/BigBoy.png";
export default function Register() {
  return (
    <div>
      <p className="logo">Your Logo</p>
      <div className="container" style={{ marginTop: "100px" }}>
        <h2 className="sign">Sign Up</h2>
        <br />
        <div className="text">
          <p style={{ margin: 0 }}>If you already have an account register</p>
          <p style={{ marginTop: "6px" }}>
            You can <a href="/login">Login Here !</a>
          </p>
        </div>
        <form action="POST">
          <label htmlFor="mail">Email</label>
          <br />
          <div className="inputs">
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="Enter your email address"
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
            />
          </div>
          <br />
          <label htmlFor="pass">Password</label>
          <br />
          <div className="inputs">
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Enter Your Password"
            />
          </div>
          <br />
          <label htmlFor="cpass">Confirm Password</label>
          <br />
          <div className="inputs">
            <input
              type="password"
              name="cpass"
              id="cpass"
              placeholder="Confirm your Password"
            />
          </div>
          <button className="submit">Register</button>
        </form>
      </div>
      <img src={bigboy} alt="" className="bigboy" />
    </div>
  );
}
