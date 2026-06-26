import React from "react";

import Happy_Client from "./Happy_Client.png";

import { Plus } from "lucide-react";

const Happy_Client_Real_IMG_MORE_BTN = () => {
  return (
    <div className="flex items-center gap-2 mt-4">
        <img
          src={Happy_Client}
          alt="Happy Client Real Image"
          className="rounded-full h-12 w-12 object-cover"
        />
        <button className="flex items-center justify-center rounded-full w-10 h-10 bg-green-950 text-white">
          <Plus size={18} />
        </button>
    </div>
  );
};

export default Happy_Client_Real_IMG_MORE_BTN;
