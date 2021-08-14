import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import url from "../services/config";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const Category = () => {
  const [categories, setCategories] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async ()=>{
    const { data: categories } = await axios.get("/categories/");
    setCategories(categories)
  },[])

  if(categories.length === 0) return <h1>Loading...</h1>

  
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

export default Category;
