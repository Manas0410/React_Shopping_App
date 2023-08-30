import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CategoryName from "./CATEGORY/CategoryNames";
import { useDispatch, useSelector } from "react-redux";
import { storeCart, storeData } from "../REDUUX SETUP/slice";
import { Link } from "react-router-dom";
import ErrorBoundary from "../ERR BOUNDARY/ErrBoundary";
import "../ExternalCssFiles/Css4Category.css";

const InfiniteScrollP = () => {
  const bottom = useRef(null);
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.storeSlice.forAddedToCart);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1); //to set the page to next
  const callApi = () => {
    axios
      .get(`https://dummyjson.com/products?limit=10&page=${page}`)
      .then((response) => {
        console.log({ response });
        if (response?.data?.products.length) {
          setIsLoading(false);
        }

        setApiData((prev) => [...prev, ...response.data.products]);
        dispatch(storeData(response.data.products));
      });
  };
  useEffect(() => {
    setIsLoading(true);
    callApi();
  }, [page]);
  console.log({ page });
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    observer.observe(bottom.current);
  }, []);
  console.log(page);

  return (
    <ErrorBoundary>
      <div>
        <div>
          <div className="searchBox">
            <input
              type="text"
              placeholder="🔍 Search for products"
              className="search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={`/search?q=${search}`} className="searchButton">
              Search
            </Link>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <CategoryName />
          {isLoading && <div>LOADING...</div>}
          <div className="productStyle">
            <ul style={uls}>
              {apiData.map((item) => {
                const { id, title, description, price } = item;
                return (
                  <li style={box} className="oneCard" key={id}>
                    <div>
                      <img
                        src={item.thumbnail}
                        alt=""
                        style={{ width: "373px", height: "199px" }}
                      />
                    </div>
                    <div>
                      <Link to={`/${id}`} className="titleLink">
                        <p>{title} </p>
                      </Link>
                      <p>{description} </p>
                      <p style={{ color: "orange" }}>PRICE:{price}$</p>
                      <button
                        className="button"
                        style={{ padding: "0px 24px" }}
                        onClick={() => dispatch(storeCart(item))}
                      >
                        {id in cart ? <p>ADDED TO CART</p> : <p>ADD TO CART</p>}
                      </button>
                    </div>
                  </li>
                );
              })}
              ;<div ref={bottom}></div>
            </ul>
          </div>

          {isLoading && <div>LOADING...</div>}
        </div>
      </div>
    </ErrorBoundary>
  );
};
const box = {
  display: "flex",
  gap: "25px",
  border: "2px solid black",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  width: "90%", // Add width
  height: "200px", // Add height
  flexDirection: "row",
};

const uls = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
};

export default InfiniteScrollP;
