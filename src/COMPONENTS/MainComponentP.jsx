import axios from "axios";
import { useEffect, useRef, useState } from "react";
import CategoryName from "./CATEGORY/CategoryNames";
import { useDispatch, useSelector } from "react-redux";
import { storeCart, storeData } from "../REDUUX SETUP/slice";

const InfiniteScrollP = () => {
  const bottom = useRef(null);
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.storeSlice.forAddedToCart);

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
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <CategoryName />
        {isLoading && <div>LOADING...</div>}
        <div>
          <ul style={uls}>
            {apiData.map((item) => {
              const { id, title, description } = item;
              return (
                <li style={box} key={id}>
                  <p>{title} </p>
                  <p>{description} </p>
                  <button onClick={() => dispatch(storeCart(item))}>
                    {id in cart ? <p>ADDED TO CART</p> : <p>ADD TO CART</p>}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {isLoading && <div>LOADING...</div>}
      </div>
      <div ref={bottom}></div>
    </div>
  );
};
const box = {
  background: "linear-gradient(to right, #FF6B6B,#FFA500,#2ECC71,#4169E1)",
  border: "2px solid black",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "8px",
  width: "300px", // Add width
  height: "200px", // Add height
};

const uls = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
};

export default InfiniteScrollP;
