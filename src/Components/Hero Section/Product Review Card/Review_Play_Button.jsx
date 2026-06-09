import React from 'react';

import { Play } from 'lucide-react';

const Review_Play_Button = () => {
  return (
    <div className="flex justify-center items-center relative bottom-4">
        <button className="h-10 w-10 rounded-full flex justify-center items-center text-white bg-green-950">
            <Play />
        </button>
    </div>
  );
};

export default Review_Play_Button;