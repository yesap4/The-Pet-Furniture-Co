import React from 'react';

import { ShoppingCart } from 'lucide-react';

const Cart_Amount = () => {
  return (
    <div className="w-20 h-10 rounded-full bg-white flex items-center justify-center gap-3 text-lime-950 font-medium ">
        <ShoppingCart color='#023020' size={24} />
        <p>$21</p>
    </div>
  );
};

export default Cart_Amount;