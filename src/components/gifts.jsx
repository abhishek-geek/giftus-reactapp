import React, { Component } from "react";
import Gift from "./gift";
import axios from "axios";
import url from "../services/config";

class Gifts extends Component {
  state = {
    gifts: [],
    categories: [],
  };
  render() {
    // const category = this.props.match.params.category;

    const categoryId = this.props.match.params.category;
    const { gifts } = this.state;
    const categoryName = this.getCategoryName(categoryId);
    return (
      <div>
        <h1>Your Gifts from {categoryName} category here --:</h1>
        <div className="row ml-2">
          {gifts.map((gift) => (
            <div key={gift._id} className="col mb-4">
              <Gift gift={gift} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  filterGifts(categoryId) {
    const { gifts } = this.state;
    const categoryName = this.getCategoryName(categoryId);
    let filteredGifts = [];
    gifts.map((gift) => {
      if (gift.category.indexOf(categoryName) >= 0) {
        filteredGifts.push(gift);
      }
    });
    this.setState({ gifts: filteredGifts });
  }
  getCategoryName(id) {
    const { categories } = this.state;
    for (let c in categories) {
      if (categories[c]._id === id) {
        return categories[c].name;
      }
    }
  }
  async componentDidMount() {
    const { data: gifts } = await axios.get(url + "api/gifts/");
    this.setState({ gifts: gifts });
    const { data: categories } = await axios.get(url + "api/categories/");
    this.setState({ categories });
    const categoryId = this.props.match.params.category;
    this.filterGifts(categoryId);
  }
}

export default Gifts;
