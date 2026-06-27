import React from 'react';
import Happy_Clients from './Happy Clients Count/Happy_Clients';
import Explore_Products from './Explore Products/Explore_Products';
import Ratings from './Ratings/Ratings';



const Footer = () => {
  return (
    <div className="flex flex-nowrap">
        <Happy_Clients />
        <Explore_Products />
        <Ratings />
    </div>
  );
};

export default Footer;