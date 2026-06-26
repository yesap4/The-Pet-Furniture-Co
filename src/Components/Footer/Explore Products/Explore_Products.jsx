import React from 'react';
import Best_Products from './Best_Products/Best_Products';
import Slider_BTN from './Explore Products Slider Button/Slider_BTN';

const Explore_Products = () => {
  return (
      <div className="flex flex-col items-center justify-center bg-green-950 rounded-lg px-8 py-8 w-full max-w-xs">
        <Best_Products />
        <Slider_BTN />
    </div>
  );
};

export default Explore_Products;
