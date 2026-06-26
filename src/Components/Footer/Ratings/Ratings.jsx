import React from "react";

import { Star as Favourites } from "lucide-react";
import Reviews from "./Reviews";

const Ratings = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-green-300 rounded-lg w-full max-w-xs p-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <p className="text-green-950 text-5xl font-semibold">4.6</p>
          <button>
            <Favourites color="#ffac1c" fill="#ffac1c" size={30} />
          </button>
        </div>
        <Reviews />
      </div>
    </div>
  );
};

export default Ratings;
