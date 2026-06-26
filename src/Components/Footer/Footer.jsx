import React from 'react';
import Happy_Clients from './Happy Clients Count/Happy_Clients';
import Explore_Products from './Explore Products/Explore_Products';
import Ratings from './Ratings/Ratings';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-green-100 px-8 py-12">
        <Happy_Clients />
        <Explore_Products />
        <Ratings />
    </div>
  );
};

export default Footer;
