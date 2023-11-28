import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addQuantity, minusQuantity, removeItem } from "./Cart.Slice";
import "./Cart.Style.css";

const Cart = () => {
  // const cartList = useSelector((state) => state.cartReducer.cart);
  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = useMemo(() => {
    let values = 0;
    cartList.map((items) => {
      const { quantity = 1, price } = items;
      values += price * quantity;
    });
    return values.toFixed(2);
  }, [cartList]);

  return (
    <div className="cart-container">
      <Link to={`/`}>
        <button className="home-button">HOME</button>
      </Link>
      <div className="total-price">TOTAL PRICE: ${totalPrice}</div>
      <ul className="cart-list">
        {cartList.map((item) => {
          const { quantity = 1 } = item;

          return (
            <li key={item.id} className="cart-item">
              <div className="item-title">{item.title}</div>
              <div className="item-quantity">
                <button onClick={() => dispatch(addQuantity(item))}>+</button>{" "}
                {quantity}{" "}
                <button onClick={() => dispatch(minusQuantity(item))}>-</button>
                <button onClick={() => dispatch(removeItem(item.id))}>✂</button>
              </div>
              <div className="item-price">Price: ${item.price}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
