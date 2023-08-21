import { useEffect, useState } from "react";
import ErrorBoundary from "../ERR BOUNDARY/ErrBoundary";
import axios from "axios";

const MainComponentP = () => {
  const [store, setStore] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchingList = async () => {
      const listData = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      setStore(listData.data.products);
    };
    fetchingList();
  }, []);

  const selectPage = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= store.length / 10)
      setPage(selectedPage);
  };

  return (
    <ErrorBoundary>
    <div style={styles.container}>
      <div style={styles.itemContainer}>
        {store.slice(page * 10 - 10, page * 10).map((items) => {
          const { images, id, title, brand, description, price } = items;
          return (
            <div key={id} style={styles.item}>
              <img src={images[0]} alt={title} style={styles.image} />
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
          );
        })}
      </div>
      <div style={styles.paginationContainer}>
        {store.length > 0 && (
          <div>
            <span
              style={{ ...styles.paginationItem, ...styles.activePage }}
              onClick={() => selectPage(page - 1)}
            >
              ⬅️
            </span>
            {[...Array(Math.ceil(store.length / 10))].map((_, i) => (
              <span
                key={i}
                onClick={() => selectPage(i + 1)}
                style={{
                  ...styles.paginationItem,
                  ...(page === i + 1 ? styles.activePage : {}),
                }}
              >
                {i + 1}
              </span>
            ))}
            <span
              style={{ ...styles.paginationItem, ...styles.activePage }}
              onClick={() => selectPage(page + 1)}
            >
              ➡️
            </span>
          </div>
        )}
      </div>
    </div></ErrorBoundary>
  );
};

const styles = {
  container: {
    backgroundImage:
      "linear-gradient(45deg, #ffcccc, #ffe0b2, #fff7b2, #e0ffb2, #b2ffe0, #b2f7ff, #d9b2ff)",
  },
  itemContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  item: {
    paddingTop: 10,
    border: "1px solid black",
    width: 300,
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "cover",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: 20,
  },
  paginationItem: {
    display: "inline-block",
    padding: "8px 12px",
    margin: "0 5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
  },
  activePage: {
    backgroundColor: "cyan",
    color: "#333",
  },
};
export default MainComponentP;
//https://dummyjson.com/products?limit=10&skip=20&select=title,price