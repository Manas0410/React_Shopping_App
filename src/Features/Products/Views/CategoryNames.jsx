import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryName = () => {
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => setCategory(response.data));
  }, []);

  return (
    <div className="categoryList">
      <Link to={`/cart`} style={{ marginLeft: "35px" }}>
        <button className="button">SHOW CART</button>
      </Link>
      {Category.map((item, i) => {
        return (
          <Link
            key={i}
            to={`/category?query=${item}`}
            className="category-link"
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryName;
