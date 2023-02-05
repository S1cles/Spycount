import React from "react";
import "./Popup.scss";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Popup = () => {
  const data = [
    {
      id: 1,
      title: "Johny Hat",
      desc: "Johny Hat",
      img1: "/img/p1-1.jpg",
      img2: "/img/p1-2.jpg",
      isNew: true,
      oldPrice: 10,
      price: 7,
    },
    {
      id: 2,
      title: "Lui Glasses",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus vero enim, nobis sunt natus quidem quos quia voluptas? Dicta commodi unde accusantium et quam aperiam vitae, enim cumque quis?",
      img1: "/img/p2-1.jpg",
      img2: "/img/p2-2.jpg",
      isNew: true,
      oldPrice: 40,
      price: 15,
    },
  ];

  return (
    <div className="cart">
      <h1 className="title_cart">Its your cart 🤍</h1>
      <div className="cart_item">
        {data?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img1} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc.substring(0, 60)}</p>
              <h2>{`Price 1 x ${item.price}$`}</h2>
            </div>
            <RemoveCircleOutlineIcon className="delete_btn" />
          </div>
        ))}
      </div>
      <div className="total">
        <span>TOTAL</span>
        <span>$123</span>
      </div>
      <div className="buy_btn">
        <button>PROCEED TO CHECKOUT</button>
        <span style={{ color: "red" , cursor:'pointer'}}> Clean cart</span>
      </div>
    </div>
  );
};

export default Popup;
