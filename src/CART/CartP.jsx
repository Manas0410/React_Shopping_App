import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addQuantity, minusQuantity, removeItem } from "../REDUUX SETUP/slice";
const Cart = () => {
  const cartt = useSelector((state) => state.storeSlice.cart);
  console.log(cartt);
  const dispatch = useDispatch();

  const totalPrice = useMemo(() => {
    let values = 0;
    cartt.map((items) => {
      const { quantity = 1, price } = items;
      values += price * quantity;
    });
    return values.toFixed(2);
  }, [cartt]);

  return (
    <div>
      <Link to={`/`}>
        <button>HOME</button>
      </Link>
      <div style={priceSt}>TOTAL PRICE : {totalPrice}</div>
      <ul style={uls}>
        {cartt.map((item) => (
          <li key={item.id} style={priceSt}>
            {item.title}
            <p>
              QUANTITY:{" "}
              <button onClick={() => dispatch(addQuantity(item))}>+</button>{" "}
              {item.quantity}{" "}
              <button onClick={() => dispatch(minusQuantity(item))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>✂</button>
            </p>
            <p>price:{item.price} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
const priceSt = {
  border: "1px solid black",
  borderRadius: "8px",
  padding: "12px",
  width: "100%",
};
const uls = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
};

export default Cart;
