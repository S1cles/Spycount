import React from "react";
import "./Popup.scss";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/cartReducer";
import { resetCart } from "../../Redux/cartReducer";
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from './../../makeRequest';

const Popup = () => {
  const products = useSelector((state) => state.cart.products);
  // const data = [
  //   {
  //     id: 1,
  //     title: "Johny Hat",
  //     desc: "Johny Hat",
  //     img1: "/img/p1-1.jpg",
  //     img2: "/img/p1-2.jpg",
  //     isNew: true,
  //     oldPrice: 10,
  //     price: 7,
  //   },
  //   {
  //     id: 2,
  //     title: "Lui Glasses",
  //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus vero enim, nobis sunt natus quidem quos quia voluptas? Dicta commodi unde accusantium et quam aperiam vitae, enim cumque quis?",
  //     img1: "/img/p2-1.jpg",
  //     img2: "/img/p2-2.jpg",
  //     isNew: true,
  //     oldPrice: 40,
  //     price: 15,
  //   },
  // ];

  const stripePromise = loadStripe('pk_test_51MaoLeIJas7mhGBxzBB7gU1hR14IfGSbBb4Ss3jrZJOxAZP7GjZqoKd1AeWydDFKe1mtWfJyu1eSyDgCsi2Yy7Sh00U2GzyLKE');

  const handlePayment = async() =>{
    try {
      const stripe = await stripePromise
      
      const res = await makeRequest.post("/orders",{
        products
      }) 
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err)
    }
  }

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h1 className="title_cart">Its your cart 🤍</h1>
      <div className="cart_item">
        {products?.map((item) => (
          <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_API_UPLOAD + item.img1} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <h2>{`Price ${item.quantity} x ${item.price}$`}</h2>
            </div>
            <RemoveCircleOutlineIcon
              className="delete_btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            />
          </div>
        ))}
      </div>
      <div className="total">
        <span>TOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <div className="buy_btn">
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => dispatch(resetCart())}
        >
          {" "}
          Clean cart
        </span>{" "}
      </div>
    </div>
  );
};

export default Popup;
