import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, remove } from "./shopingCartSlice";
// import { decrease, getCartTotal, increase, remove } from "./redux/actions";
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const ShopingCartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "70vw",
        maxWidth: "90rem",
        margin: "0px auto",
      }}
    >
      <div className="row" style={{ marginTop: "10px", marginLeft: "120px" }}>
        <div className="col-sm-2">
          <img
            src={img}
            className="img-fluid"
            alt=""
            style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
          />
        </div>
        <div className="col-sm-2" margin>
          <h5>{title}</h5>
          <h5 style={{ color: "#617d98" }}>${price}</h5>
          <DeleteIcon
            fas
            // icon="trash"
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => dispatch(remove(id))}
          />
        </div>
        <div className="col-sm-8">
          <ExpandLessIcon
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(increase(id))}
            fas
            // icon="chevron-up"
          />
          <p style={{ marginTop: "10px" }}>{amount}</p>
          <ExpandMoreIcon
            fas
            // icon="chevron-down"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(decrease(id))}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopingCartItem;