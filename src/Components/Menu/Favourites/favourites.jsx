import React from 'react';

import { Star as Favourites } from 'lucide-react';

const favourites = () => {
  return (
    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-pointer ">
        <Favourites color="#ffac1c" fill='#ffac1c' size={30} />
    </div>
  );
};

export default favourites;