import React from 'react';

import {ArrowRight} from 'lucide-react';

const Slider_BTN = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <p className="px-6 py-3 text-white bg-orange-600 rounded-full font-medium">Explore Products</p>
      <button className="bg-white flex justify-center items-center rounded-full text-orange-600 h-10 w-10">
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default Slider_BTN;
