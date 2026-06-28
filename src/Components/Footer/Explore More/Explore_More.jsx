import React from "react";
import {ArrowRight} from 'lucide-react';    

const Explore_More = () => {
  return (
    <div className="bg-green-950 ">
      <p className="text-white text-center text-2xl mt-10 ">
        Best Products <br /> for Your Pet
      </p>
      <div className="flex justify-center items-center gap-2 mt-4">
        <p className="px-6 py-3 text-white bg-orange-600 rounded-full font-medium">
          Explore Products
        </p>
        <button className="bg-white flex justify-center items-center rounded-full text-orange-600 h-10 w-10">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Explore_More;
