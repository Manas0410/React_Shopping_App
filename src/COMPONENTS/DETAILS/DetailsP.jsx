import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailsP.css"; // Make sure to import your CSS file

const DetailsP = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => setDetail(response.data));
  }, [id]);

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

  return (
    <div className="container">
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
      <Link to={`/`} className="button">
        🔙BACK TO HOME
      </Link>
    </div>
  );
};

export default DetailsP;
