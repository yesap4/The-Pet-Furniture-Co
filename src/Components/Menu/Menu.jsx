import React from "react";

import Brand_Logo from "./Logo/Brand_Logo";

import Brand_Name from "./Logo/Brand_Name";

import Home from "./Home Button/Home";

import Shop from "./Shop Button/Shop";

import Delivery_Shipment from "./Delivery and Payment/Delivery_Payments";

import Brands from "./Brands/Brands";

import Blogs from "./Blogs/Blogs";

import Search from "./Search/Search";

import Favourites from "./Favourites/favourites";

import Cart_Amount from "./Cart Amount/Cart_Amount";

import Profile from "./Profile/Profile";

const Menu = () => {
  return (
    <div className="flex bg-green-100 px-4">
      <div className="flex items-center">
        <Brand_Logo />

        <Brand_Name />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Home />

        <Shop />

        <Delivery_Shipment />

        <Brands />

        <Blogs />

        
      </div>

      <div className="flex items-center gap-4">

        <Search />

        <Favourites />

        <Cart_Amount />

        <Profile />
      </div> 
      
    </div>
  );
};

export default Menu;
