import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../node_modules/jquery/dist/jquery";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  state = {
    user: this.props.isLogin,
  };
  render() {
    const { user } = this.state;
    return (
      <nav className="navbar navbar-expand-lg text-white fixed-top">
        <Link className="navbar-brand" to="/">
          GiftUs
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <div
              style={{
                width: "35px",
                height: "5px",
                backgroundColor: "black",
                margin: "3px -2px",
              }}
            ></div>
            <div
              style={{
                width: "35px",
                height: "5px",
                backgroundColor: "black",
                margin: "3px -2px",
              }}
            ></div>
            <div
              style={{
                width: "35px",
                height: "5px",
                backgroundColor: "black",
                margin: "3px -2px",
              }}
            ></div>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto text-white">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Connect
              </NavLink>
            </li>
          </ul>
          {!user && (
            <ul className="navbar-nav ml-auto text-white ">
              <li className="nav-item mr-2">
                <NavLink
                  className="nav-link btn btn-info btn-outline-success btn-sm"
                  to="/register-user"
                >
                  Signup
                </NavLink>
              </li>

              <li className="nav-item mr-2">
                <NavLink
                  className="nav-link btn btn-info btn-outline-success btn-sm"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          )}
          {user && (
            <ul className="navbar-nav ml-auto text-white">
              <li className="nav-item mr-2">{this.props.isLogin.name}</li>
              <li className="nav-item mr-2">
                <NavLink
                  className="nav-link btn btn-info btn-outline-success btn-sm"
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
