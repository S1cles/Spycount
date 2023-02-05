import React, { useState, useEffect } from "react";
import "./Recomended.scss";
import Card from "./../Card.jsx/Card";
import axios from "axios";

const Recomended = (props) => {
  const API_TOKEN =
    "662a9da5b0609d2f2c7204cf43aed6c2f8db3d626becbf8a1be77065ab6f936ecfcbd05c5a7b1975e535d6e394f3e9ec8689c786cc17f447c9887049f968ea08d9eb7c9ac10e06ceba129bd32da7a5ee494c61cb0cbd3d10ae91d2dd1f428a291c35d27abf14767f0806487c12d1a31ee1d3591b4a11b103f1d44924af8df1b6";
  // const API_TOKEN2 = '3d7c7870e2954e5bdbfafac327eff305f4b17c323e823c7aef698b53a450b1542c0fb4d6a93db078aeaa0e71c67a44462e80f79cbc276024e6280f8f09d8323e06a5d6a9318a8156c94934cb91e835ca5ee897b233d03a109dc42e1101a6d309997b7080e63078863cafe1bfbbb2a50b035b2a56adf7b54f75ec27e7886a6ff4'
  const API_URL = "http://localhost:1337/api";
  // const data = [
  //   {
  //     id: 1,
  //     title: "Johny Hat",
  //     img1: "img/p1-1.jpg",
  //     img2: "img/p1-2.jpg",
  //     isNew: true,
  //     oldPrice: 10,
  //     price: 7,
  //   },
  //   {
  //     id: 2,
  //     title: "Lui Glasses",
  //     img1: "img/p2-1.jpg",
  //     img2: "img/p2-2.jpg",
  //     isNew: true,
  //     oldPrice: 40,
  //     price: 15,
  //   },
  //   {
  //     id: 3,
  //     title: "Skate Skirt",
  //     img1: "img/p3-1.jpg",
  //     img2: "img/p3-2.jpg",
  //     isNew: false,
  //     oldPrice: 30,
  //     price: 15,
  //   },
  //   {
  //     id: 4,
  //     title: "Jacket Jan",
  //     img1: "img/p4-1.jpg",
  //     img2: "img/p4-2.jpg",
  //     isNew: false,
  //     oldPrice: 20,
  //     price: 17,
  //   },
  // ];

  const [products, setProducts] = useState([]);

  // useEffect(() => {

  // const fetchData = async() => {
  //   try {
  //     const data = await axios.get(API_URL+"/products",{
  //       headers:{
  //         Autorization : "bearer" + API_TOKEN,
  //       }
  //     });
  //     // console.log(data);
  //     console.log(API_URL)
  //   } catch (error) {
  //     console.log(error)
  //     console.log(API_URL)
  //   }
  // }
  // fetchData()
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL + "/products", {
          headers: {
            Authorization: "Bearer " + API_TOKEN,
          },
        });
        setProducts(res.data);
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
    console.log(products.data);
  const nameBlock = props.type;

  const upFirst = () => {
    if (!nameBlock) return nameBlock;

    return nameBlock[0].toUpperCase() + nameBlock.slice(1);
  };

  return (
    <div className="recomended">
      <div className="container">
        <div className="wrapper">
          <div className="header">
            <h1>{upFirst(nameBlock)} Products</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              architecto labore debitis ullam, ea unde autem fuga reiciendis aut
              corrupti eveniet officiis suscipit quibusdam porro aspernatur
            </p>
          </div>
          <div className="content">
            {/* {products.data.map((item) => (
              <Card item={item} key={item.id} />
            ))
            } */}
            {/* {products.data.map((product) => (
              <Card key={product.id} item={product}/>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
