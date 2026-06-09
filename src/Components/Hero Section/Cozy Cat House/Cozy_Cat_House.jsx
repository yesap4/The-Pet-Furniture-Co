import React from "react";

import Cat_House_Image from "./Cat_House_Image";

import Cat_House_Btn from "./Cat_House_Btn";

import Product_Name from "./Product_Name";

import Product_Price from "./Product_Price";

const CatHouse = () => {
  return (
    <div className="relative right-10 top-27 bg-green-100">
      <Cat_House_Image />
      <Product_Name />
      <Product_Price />

      <div className="absolute bottom-18 right-20">
        <Cat_House_Btn /> 
      </div>
    </div>
  );
};

export default CatHouse;