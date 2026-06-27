import React from 'react';
import Best_Products from './Best_Products/Best_Products';
import Slider_BTN from './Explore Products Slider Button/Slider_BTN';

const Explore_Products = () => {
  return (
      <div className="flex-none w-136 h-75 bg-green-950 relative bottom-60 right-22 px-16">
        <Best_Products />
        <Slider_BTN />
    </div>
  );
};

export default Explore_Products;