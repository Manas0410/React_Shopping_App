import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeCart } from "../Cart/Cart.Slice";
import "./SearchProduct.Style.css";

const SearchComP = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.forAddedToCart);

  const queryParams = new URLSearchParams(location.search);
  const queryValue = queryParams.get("q");
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${queryValue}`)
      .then((response) => setSearchData(response.data.products));
  }, [queryValue]);
  console.log({ searchData, queryValue });
  return (
    <div className="product-list">
      {searchData.map((item) => {
        const { id, title, description } = item;
        return (
          <div key={id} className="product-item">
            <div className="product-image">
              <img src={item.thumbnail} alt="" />
            </div>
            <div className="product-details">
              <Link to={`/${id}`} className="product-title">
                {title}
              </Link>
              <p className="product-description">{description}</p>
              <button
                className={`cart-button ${id in cart ? "added" : ""}`}
                onClick={() => dispatch(storeCart(item))}
              >
                {id in cart ? "ADDED TO CART" : "ADD TO CART"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchComP;
