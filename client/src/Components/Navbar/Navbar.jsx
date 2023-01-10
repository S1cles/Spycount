import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TranslateIcon from "@mui/icons-material/Translate";
import { NavLink } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrap">
        <div className="left_side flex">
          <div className="lang">
            <TranslateIcon />
            <ArrowDropDownIcon />
          </div>
          <div className="valute">
            USD
            <ArrowDropDownIcon />
          </div>
          <nav className=" nav item">
            <NavLink to={"/products/1"}>Women</NavLink>
            <NavLink to={"/products/2"}>Men</NavLink>
            <NavLink to={"/products/3"}>Children</NavLink>
            <NavLink to={"/products/4"}>Accessories</NavLink>
          </nav>
        </div>
        <div className="center_side flex">
          <NavLink style={{marginLeft: '30px',marginRight: '30px'}} to={"/"}>SPYCOUNT</NavLink>
        </div>
        <div className="right_side flex">
          <nav className="nav2 item ">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/stories"}>Stories</NavLink>
          </nav>
          <div className="icon_block item flex">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteIcon />
            <div className="cart">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
