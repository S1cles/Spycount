import React, { useState, useEffect } from "react";
import "./Recomended.scss";
import Card from "./../Card.jsx/Card";
import axios from "axios";
import useFetch from "./../hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Recomended = (props) => {
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

  // const [products, setProducts] = useState([]);

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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${props.type}`, {
  //         headers: {
  //           Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
  //         },
  //       });
  //       setProducts(res.data);
  //       // console.log(res.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  //   console.log(products.data);

  const { products, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${props.type}`
  );
  const nameBlock = props.type;
  console.log(products);
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
            {error? <div>ERROR</div> :(loading ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              products?.data?.map((item) => <Card item={item} key={item.id} />)
            ))}
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
