import React from 'react';
import Review_Glimpse from './Review_Glimpse';
import Card_Info from './Card_Info';
import Review_Play_Button from './Review_Play_Button';

const ReviewCard = () => {
  return (
    <div className="relative bottom-60 mr-10 bg-green-100">
        <Review_Glimpse />
        <Review_Play_Button />
        <Card_Info />
    </div>
  );
};

export default ReviewCard;