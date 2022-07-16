import React from "react";
import "../styles.css";

import facebook from "../images/Facebook.png";
import apple from "../images/Apple.png";
import google from "../images/google.png";
import bigboy from "../images/BigBoy.png";
export default function Signin() {
  return (
    <div>
      <p className="logo">Your Logo</p>
      <div className="container">
        <h2 className="sign">Sign In</h2>
        <br />
        <div className="text">
          <p style={{ margin: 0 }}>If you don't have an account register</p>
          <p style={{ marginTop: "6px" }}>
            You can <a href="/register">Register here !</a>
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
          <label htmlFor="pass">Password</label>
          <br />
          <div className="inputs">
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Enter Your password"
            />
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
            Forgot Password?
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
