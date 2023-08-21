import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CategoryPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryValue = queryParams.get("query");

  // console.log("Query Value:", queryValue);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${queryValue}`)
      .then((response) => setProducts(response.data.products));
  }, [queryValue]);
  console.log(products);
  return <div>CategoryPage</div>;
};

export default CategoryPage;
