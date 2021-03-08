import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import url from "../services/config";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

class Category extends Component {
  state = {
    categories: [],
  };
  render() {
    const { categories } = this.state;
    return (
      <div className="row">
        {categories.map((category) => (
          <div
            className="col-12 mr-5"
            style={{
              textAlign: "center",
              border: "4px solid teal",
              margin: "5px",
            }}
            key={category._id}
          >
            <Link to={`/gifts/${category._id}`}>
              <h3 className="text">{category.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
  async componentDidMount() {
    const { data: categories } = await axios.get("/categories/");
    this.setState({ categories });
  }
}

export default Category;
