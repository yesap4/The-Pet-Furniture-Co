import React from "react";

import Happy_Client from "./Happy_Client.png";

import { Plus } from "lucide-react";

const Happy_Client_Real_IMG_MORE_BTN = () => {
  return (
    <>
      <div className="px-52 relative bottom-117">
        <img
          src={Happy_Client}
          alt="Happy Client Real Image"
          className="rounded-full h-12 w-auto "
        />
      </div>
      <div className="flex justify-center items-center rounded-full w-12 h-12 bg-green-950 relative bottom-129 left-72  text-white">
        <button>
          <Plus />
        </button>
      </div>
    </>
  );
};

export default Happy_Client_Real_IMG_MORE_BTN;
