import React from "react";
import "./List.scss";
import Card from "./../Card.jsx/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useFetch from "../hooks/useFetch";

const List = ({ subCat, maxPrice, sort, Categoryid }) => {
  const { products, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${Categoryid}${subCat.map(
      (item) => `&[filters][sub_categories][id][$eq]= ${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  console.log(products);

  return (
    <div className="list">
      {loading ? (
        <Box sx={{ display: "flex", minHeight: '100vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        products?.data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
