import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryName = () => {
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => setCategory(response.data));
  });

  return (
    <div style={list}>
      {Category.map((item, i) => {
        return (
          <Link key={i} to={`/category?query=${item}`}>
            {item}
          </Link>
        );
      })}
      <Link to={`/cart`}>
        <button>SHOW CART</button>
      </Link>
    </div>
  );
};
const list = {
  display: "flex",
  flexDirection: "column",
};
export default CategoryName;
