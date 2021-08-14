import React, { useState } from "react";
import axios from "axios";
import auth from "../services/auth";
// import url from "../services/config";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const RegisterUser =()=> {
  const [name, setName] = useState("Abhishek");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    const res = await axios.post("/users/", userData);
    auth.setToken(res.headers["x-auth-token"]);
    window.location.assign("/");
  };

  return (
    <div className="form">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={(input) => setName(input.target.value)}
            type="name"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={(input) => setEmail(input.target.value)}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
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
            Check me out
          </label>
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="btn btn-info"
        >
          Submit
        </button>
      </form>
    </div>
  );
  
}

export default RegisterUser;
