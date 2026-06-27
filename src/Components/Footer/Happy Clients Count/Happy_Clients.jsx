import React from 'react';

import Clients_Count from './Clients_Count';

import Happy_Client_Real_IMG_MORE_BTN from './Happy_Client_Real_IMG_MORE_BTN';

import Clients_Reviews from './Clients_Reviews';

const Happy_Clients = () => {
  return (
      <div className="flex-none min-w-[24rem]">
        <Clients_Count />
        <Happy_Client_Real_IMG_MORE_BTN />
        <Clients_Reviews />
    </div>
  );
};

export default Happy_Clients;