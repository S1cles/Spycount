import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../../Components/List/List.jsx";
import "./Products.scss";
import { Slider } from "@mui/material";
import { yellow } from "@mui/material/colors";

const Products = () => {
  const Categoryid = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let trans = 'logo'
  if (scrollTop >= 100) {
    trans += '-scroll';
  }else if (scrollTop < 100 && scrollTop >= 0){
    trans += '-rscroll';
  }

  return (
    <div className="products">
      <nav>
        {/* {scrollTop >= 150 ? <h2 className="logo">SPYCOUNT</h2> : <div className="logo" style={{color:'white'}} >SPYCOUNT</div>} */}
        <div className={trans} style={{color:'white'}} >SPYCOUNT</div>
        <div className="menu">
          <div className="filterItems">
            <div className="filter_item">
              <h2>Product Categories</h2>
              <div className="input_item">
                <input type="checkbox" id="1" value={1} />
                <label htmlFor="1">Shoes</label>
              </div>
              <div className="input_item">
                <input type="checkbox" id="2" value={2} />
                <label htmlFor="2">Coats</label>
              </div>{" "}
              <div className="input_item">
                <input type="checkbox" id="3" value={3} />
                <label htmlFor="3">Skirts</label>
              </div>
            </div>
            <div className="filter_item">
              <h2>Filter by Price</h2>
              <div className="filter_price">
                <p style={{ textAlign: "center" }}>{maxPrice}</p>
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  // getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={10}
                  max={1000}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  color={"secondary"}
                />
              </div>
            </div>
            <div className="filter_item">
              <h2>Sort By</h2>
              <div className="input_item">
                <input
                  type="checkbox"
                  name="asc"
                  id="asc"
                  onChange={(e) => setSort("asc")}
                />
                <label htmlFor="asc">Filter by lowest first</label>
              </div>
              <div className="input_item">
                <input
                  type="checkbox"
                  name="desc"
                  id="desc"
                  onChange={(e) => setSort("desc")}
                />
                <label htmlFor="desc">Filter by highest first</label>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="content">
        <img
          src="https://americanpronunciationcoach.com/wp-content/uploads/1200-x-300-website-sliders-china-man.jpg"
          alt="mainImg"
          className="categoryImg"
        />
        <List Categoryid={Categoryid} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
