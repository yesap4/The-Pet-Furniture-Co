import React from 'react';
import Client from './Clients/Client';
import Explore_More from './Explore More/Explore_More';
import Ratings from './Ratings/Ratings';

const Footer = () => {
  return (
    <div className="grid grid-cols-3 h-screen relative bottom-60 ">
        <Client />
        <Explore_More />
        <Ratings />
    </div>
  );
};

export default Footer;