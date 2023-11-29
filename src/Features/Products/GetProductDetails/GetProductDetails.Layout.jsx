import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./GetProductDetails.Style.css";
import { useSelector } from "react-redux";
import EditProd from "../GetAllProducts/AdminFeatures/EditProd";

const DetailsP = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [editF, setEditF] = useState(false);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => setDetail(response.data));
  }, [id]);
  const adminFlag = useSelector((state) => state.admin);

  const {
    title,
    description,
    price,

    rating,
    stock,
    brand,
    category,
    thumbnail,
    images = [],
  } = detail;
  const del = async () => {
    const res = await axios.delete("https://dummyjson.com/products/1");
    if (res.status == 200) {
      alert(
        "i hv implemented the logic for edit and delete in code but the public api is not allowing for put and delete req"
      );
    } else {
      alert("deleted successfully");
    }
  };
  return (
    <div className="container">
      {adminFlag && (
        <p style={{ color: "tomato" }}>
          i hv implemented the logic for edit and delete in code but the public
          api is not allowing for put and delete req
        </p>
      )}
      <div className="product">
        <div className="product-info">
          <div className="product-title">{title}</div>
          <div className="product-description">{description}</div>
          <div className="product-price">${price}</div>
          <div className="product-rating">Rating: {rating}</div>
          <div className="product-stock">Stock: {stock}</div>
          <div className="product-brand">Brand: {brand}</div>
          <div className="product-category">Category: {category}</div>
        </div>
        <img src={thumbnail} alt="" className="product-image" />
      </div>
      <div className="image-gallery">
        {images.map((item, i) => (
          <img key={i} src={item} alt="" className="gallery-image" />
        ))}
      </div>
      {adminFlag && (
        <button
          className="button"
          style={{ margin: "5px" }}
          onClick={() => {
            setEditF(true);
          }}
        >
          EDIT
        </button>
      )}
      {adminFlag && (
        <button onClick={del} className="button" style={{ margin: "5px" }}>
          DELETE
        </button>
      )}
      {editF && <EditProd setAdminEditFlag={setEditF} data={detail} />}
      <Link to={`/HomePage`} className="button">
        🔙BACK TO HOME
      </Link>
    </div>
  );
};

export default DetailsP;
