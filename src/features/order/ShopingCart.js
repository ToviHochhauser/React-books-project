import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import CartItem from "./ShopingCartItem";
import { clearCart, getCartItems, getCartTotal } from "./shopingCartSlice";
import ShopingCartItem from "./ShopingCartItem";

const ShoppingCartContainer = () => {
  const { totalAmount, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch getCartTotal only once when the component mounts
    dispatch(getCartTotal());
  }, []); // Empty dependency array means it will run only once

  if (items.length === 0) {
    return (
      <>
        <h3 className="fs-bold" style={{ marginTop: "20px" }}>
          Your Shopping <span>is Empty</span>
        </h3>
        <Button
          className="mx-2"
          style={{ marginRight: "100px" }}
          onClick={() => dispatch(getCartItems())}
        >
          Get Items
        </Button>
      </>
    );
  }

  return (
    <div>
      <h2 className="lead-mb-0 mt-2">Your Shopping Cart</h2>
      {items.map((item) => {
        return <ShopingCartItem key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "60px",
            }}
          >
            Total <span>${totalAmount}</span>
          </h4>
        </div>

        <Button
          color="danger"
          onClick={() => dispatch(clearCart())}
          style={{ width: "140px", marginTop: "50px" }}
        >
          Clear Cart
        </Button>
      </footer>
    </div>
  );
};

export default ShoppingCartContainer;
