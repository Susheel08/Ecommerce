import React from "react";
import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import logo from "../../Images/shopy-logo-removebg-preview.png";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCart } from "@mui/icons-material";
const Header = () => {
  return (
    <>
      <div className=" lg:flex hidden justify-between items-center h-16 bg-yellow-300 text-black px-7">
        <img src={logo} alt="" className="h-28 w-42" />
        <input
          type="search"
          placeholder="Search"
          className="h-10 w-80  bg-yellow-200 rounded px-2"
        />
        <div className="flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/collection">Collections</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/new">New</Link>
          <Link to="/sales">Sales</Link>
          <Link to="/eng">Eng</Link>

          <LocalMallIcon />
        </div>
      </div>
      {/* Header 2  */}
      <div className="flex lg:hidden justify-between items-center bg-yellow-300 p-2 h-10">
        <div className="flex justify-start items-center">
          <MenuIcon />
          <img src={logo} alt="" className="h-16 w-24" />
        </div>
        <input
          type="search"
          placeholder="Search "
          className="px-1 rounded bg-yellow-200"
        />
        <ShoppingCart />
      </div>
    </>
  );
};

export default Header;
