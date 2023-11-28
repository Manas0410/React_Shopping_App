/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

const EditProd = ({ data, setAdminEditFlag }) => {
  const [editData, setEditData] = useState({ ...data });
  const onProdEdit = async () => {
    await axios.put(`https://dummyjson.com/products/${data.id}`, editData);
    setAdminEditFlag(false);
  };
  const onInpChang = (e) => {
    const { name, value } = e.target;
    setEditData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  return (
    <div style={{ backgroundColor: "red" }}>
      <div>
        Title:
        <input
          type="text"
          value={editData.title}
          name="title"
          onChange={onInpChang}
        />
      </div>
      <div>
        Description:
        <input
          type="text"
          value={editData.description}
          name="description"
          onChange={onInpChang}
        />
      </div>
      <div>
        Price:
        <input
          type="text"
          value={editData.price}
          name="price"
          onChange={onInpChang}
        />
      </div>
      <button className="button" onClick={onProdEdit}>
        SAVE
      </button>
    </div>
  );
};

export default EditProd;
