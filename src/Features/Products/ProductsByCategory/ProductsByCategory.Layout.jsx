import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProductsByCategory = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryValue = queryParams.get("query");

  // console.log("Query Value:", queryValue);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${queryValue}`)
      .then((response) => setProducts(response.data.products));
  }, [queryValue]);
  // console.log(products);
  const selectPage = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= Math.ceil(products.length / 2))
      setPage(selectedPage);
  };

  return (
    <div>
      <div>
        {products.slice(page * 2 - 2, page * 2).map((items) => {
          const { thumbnail, id, title, brand, description, price } = items;
          return (
            <div
              key={id}
              style={{
                display: "flex",
                gap: "15px",
                border: "4px solid black",
              }}
            >
              <div>
                <img
                  src={thumbnail}
                  alt={title}
                  style={{ width: "200px", height: "150px" }}
                />
              </div>
              <div>
                <div>{title}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <p>Brand: {brand}</p>
                  <p>{description}</p>
                  <p>💸{price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          width: "100%",
        }}
      >
        {products.length > 0 && (
          <div>
            <span onClick={() => selectPage(page - 1)}>⬅️</span>
            {[...Array(Math.ceil(products.length / 2))].map((_, i) => (
              <span
                key={i}
                onClick={() => selectPage(i + 1)}
                style={{
                  backgroundColor: page === i + 1 ? "blue" : "transparent",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {i + 1}
              </span>
            ))}
            <span onClick={() => selectPage(page + 1)}>➡️</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsByCategory;
