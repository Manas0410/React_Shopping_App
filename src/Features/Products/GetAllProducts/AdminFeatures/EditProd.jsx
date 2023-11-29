/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

const EditProd = ({ data, setAdminEditFlag }) => {
  const [editData, setEditData] = useState({ ...data });
  const onProdEdit = async () => {
    const res = await axios.put(
      `https://dummyjson.com/products/${data.id}`,
      editData
    );
    if (res.status != 200) {
      alert(
        "i hv implemented the logic for edit and delete in code but the public api is not allowing for put and delete req"
      );
    }
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
    <div style={{ border: "2px solid black", padding: "9px", margin: "5px" }}>
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
      <button className="button" onClick={() => setAdminEditFlag(false)}>
        CANCEL
      </button>
    </div>
  );
};

export default EditProd;
