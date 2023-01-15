import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="/img/f2.jpg" alt="" />
          <button>
          <Link style={{color:'white'}} to="/products">Sale</Link>
          </button>
        </div>
        <div className="row">
          {" "}
          <img src="/img/f3.jpg" alt="" />
          <button>
          <Link style={{color:'white'}} to="/products">Women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img src="/img/f6.jpg" alt="" />
          <button>
          <Link style={{color:'white'}} to="/products">New Season</Link>
          </button>
        </div>
      </div>
      <div className="col col-large">
        <div className="row">
          <div className="col">
            <div className="row">
              {" "}
              <img src="/img/f1.jpg" alt="" />
              <button>
              <Link style={{color:'white'}} to="/products">Men</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img src="/img/f5.jpg" alt="" />
              <button>
              <Link style={{color:'white'}} to="/products/1">accesories</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <img src="/img/f4.jpg" alt="" />
          <button>
            <Link style={{color:'white'}} to="/products">shoes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
