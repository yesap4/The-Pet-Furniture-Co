import React from 'react';

import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-pointer">
      <SearchIcon color='#023020' />
    </div>
  );
};

export default Search;