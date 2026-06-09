import React from 'react';

import {ArrowRight} from 'lucide-react';

const Slider_BTN = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="w-60 h-12 relative top-10 text-white bg-orange-600 rounded-full flex justify-center items-center">Explore Products</p>
      <button className="bg-white flex justify-center items-center rounded-full text-orange-600 h-8 w-8 relative top-10 right-12 ">
        <ArrowRight />
      </button>
    </div>
  );
};

export default Slider_BTN;