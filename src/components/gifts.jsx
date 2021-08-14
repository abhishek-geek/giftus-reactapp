import React, { Component, useEffect, useState } from "react";
import Gift from "./gift";
import axios from "axios";
// import url from "../services/config";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const Gifts = ({match}) => {
  const [gifts, setGifts] = useState([]);
  const [categories, setCategories] = useState([]);
  const categoryId = match.params.category;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async ()=>{
  const { data: gifts } = await axios.get("/gifts/");
  setGifts(gifts);
  const { data: categories } = await axios.get("/categories/");
  setCategories(categories);
  }, [])

  useEffect(()=>{
    filterGifts(categoryId);
  },[categoryId])

  const filterGifts = (categoryId) => {
    const categoryName = getCategoryName(categoryId);
    let filteredGifts = [];
    gifts.map((gift) => {
      if (gift.category.indexOf(categoryName) >= 0) {
        filteredGifts.push(gift);
      }
    });
    setGifts(filteredGifts);
  }

  const getCategoryName = (id) => {
    for (let c in categories) {
      if (categories[c]._id === id) {
        return categories[c].name;
      }
    }
  }



  return (
    <div>
      <h1>Your Gifts from {getCategoryName(categoryId)} category here --:</h1>
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

export default Gifts;
