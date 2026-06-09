import React from "react";
import { ArrowUpRight } from "lucide-react";

const Cat_House_Btn = () => {
  return (
    <button
      id="Take Me Button"
      className="h-10 w-10 rounded-full flex justify-center items-center text-white bg-green-950"
    >
      <ArrowUpRight strokeWidth={1.5} />
    </button>
  );
};

export default Cat_House_Btn;
