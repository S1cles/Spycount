import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import { useParams } from "react-router-dom";
import useFetch from "../../Components/hooks/useFetch";

const Product = () => {
  const data = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80",
  ];

  const id = useParams().id;

  const { products, loading, error } = useFetch(`/products/${id}?populate=*`);
  // console.log(products.data.attributes.img1.data.attributes.url)
  // console.log(process.env.REACT_APP_API_UPLOAD + products.data.attributes.img1.data.attributes.url)
  console.log(products);

  const [activeImg, setActiveImg] = useState("img1");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="images_side">
        <div className="images_mini">
          <img
            src={
              process.env.REACT_APP_API_UPLOAD +
              products?.data?.attributes?.img1?.data?.attributes?.url
            }
            alt="1"
            onClick={(e) => setActiveImg("img1")}
          />
          <img
            src={
              process.env.REACT_APP_API_UPLOAD +
              products?.data?.attributes?.img2?.data?.attributes?.url
            }
            alt="1"
            onClick={(e) => setActiveImg("img2")}
          />
        </div>
        <div className="image_main">
          <img
            src={
              process.env.REACT_APP_API_UPLOAD +
              products?.data?.attributes?.[activeImg].data?.attributes?.url
            }
            alt="1"
          />
        </div>
      </div>
      <div className="info_side">
        <h1 className="title">{products?.data?.attributes?.title}</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <h1
            style={{ textDecoration: "line-through", color: "grey" }}
            className="price"
          >
            ${products?.data?.attributes?.oldPrice}
          </h1>
          <h1 className="price">${products?.data?.attributes?.price}</h1>
        </div>
        <p className="desc">{products?.data?.attributes?.desc}</p>

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
            <p>
              Gender:
              {
                products?.data?.attributes?.categories?.data[0]?.attributes
                  ?.title
              }
            </p>
            <p>
              Product type:{" "}
              {
                products?.data?.attributes?.sub_categories?.data[0]?.attributes
                  ?.title
              }
            </p>
            <p>
              Tags:{" "}
              {
                products?.data?.attributes?.categories?.data[0]?.attributes
                  ?.desc
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
