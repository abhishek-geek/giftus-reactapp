import React, { useState } from "react";
import axios from "axios";
import auth from "../services/auth";
// import url from "../services/config";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const res = await axios.post("/users/login", userData);
    console.log(res.headers["x-auth-token"]);
    auth.setToken(res.headers["x-auth-token"]);
    window.location.assign("/");
  };

  return (
    <div className="form">
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={(input) => setEmail(input.target.value)}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(input) => setPassword(input.target.value)}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );

}

export default Login;
