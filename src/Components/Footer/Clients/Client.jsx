import React from "react";
import HappyClient from "./Happy_Client.png";
import { Plus } from "lucide-react";
const Client = () => {
  return (
    <div className="bg-green-300">
      <p className="font-semibold text-5xl text-green-950 flex justify-center items-center py-10 ">
        98K+
      </p>
      <div className="flex justify-center items-center relative bottom-5"> 
        <img
            src={HappyClient}
            alt="Happy Client Image"
            className="rounded-full h-12 w-12 object-cover"
        />
        <button className="flex items-center justify-center rounded-full w-10 h-10 bg-green-950 text-white">
            <Plus size={18} />
        </button>
        </div>
      <p className="text-green-950 flex justify-center items-center text-sm md:text-base lg:text-lg leading-relaxed text-center ">
        Happy Clients and Their Pets <br /> Who Love Our Products
      </p>
    </div>
  );
};

export default Client;
