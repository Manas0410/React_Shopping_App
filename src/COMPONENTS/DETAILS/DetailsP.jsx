import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = detail;
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{price}</div>
      <div>{discountPercentage}</div>
      <div>{rating}</div>
      <div>{stock}</div>
      <div>{brand}</div>
      <div>{category}</div>
      <img srcSet={thumbnail} alt="" />
      <div>{}</div>
    </div>
  );
};

export default DetailsP;
