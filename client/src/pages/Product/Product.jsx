import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
const Product = () => {
  const data = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80",
  ];

  const [activeImg, setActiveImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="images_side">
        <div className="images_mini">
          <img src={data[0]} alt="1" onClick={(e) => setActiveImg(0)} />
          <img src={data[1]} alt="1" onClick={(e) => setActiveImg(1)} />
        </div>
        <div className="image_main">
          <img src={data[activeImg]} alt="1" />
        </div>
      </div>
      <div className="info_side">
        <h1 className="title">Hat Jacky V</h1>
        <h1 className="price">$19.99</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
          mollitia tenetur minima fuga placeat corrupti assumenda magni maxime,
          libero soluta quis aliquid? Laudantium vitae aspernatur laborum a
          aliquid sunt nihil.
        </p>

        <div className="buttons">
          <div className="quantity">
            <button
              className="btn"
              onClick={
                quantity <= 1 ? quantity === 1 : () => setQuantity(quantity - 1)
              }
            >
              -
            </button>
            <span>{quantity}</span>
            <button className="btn" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
          <button className="btn_cart">
            Add to cart <AddShoppingCartIcon />
          </button>
          <div>
            <button className="btn_func">
              <FavoriteBorderIcon />
              Add to favorite
            </button>
            <button className="btn_func">
              <AlignVerticalBottomIcon /> Compare this{" "}
            </button>
          </div>
        </div>
        <div className="stats_block">
          <div className="stats">
            <p>Vendor: Polo</p>
            <p>Product type: Hat</p>
            <p>Tags: Hat Jacky V , Hats , Women</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
