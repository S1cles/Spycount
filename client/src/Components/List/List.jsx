import React from "react";
import "./List.scss";
import Card from "./../Card.jsx/Card";

const List = () => {
  const data = [
    {
      id: 1,
      title: "Johny Hat",
      img1: "../img/p1-1.jpg",
      img2: "../img/p1-2.jpg",
      isNew: true,
      oldPrice: 10,
      price: 7,
      // category:'shoes'
    },
    {
      id: 2,
      title: "Lui Glasses",
      img1: "../img/p2-1.jpg",
      img2: "../img/p2-2.jpg",
      isNew: true,
      oldPrice: 40,
      price: 15,
    },
    {
      id: 3,
      title: "Skate Skirt",
      img1: "../img/p3-1.jpg",
      img2: "../img/p3-2.jpg",
      isNew: false,
      oldPrice: 30,
      price: 15,
    },
    {
      id: 4,
      title: "Jacket Jan",
      img1: "../img/p4-1.jpg",
      img2: "../img/p4-2.jpg",
      isNew: false,
      oldPrice: 20,
      price: 17,
    }
  ];
  return (
    <div className="list">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
