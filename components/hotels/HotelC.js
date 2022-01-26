import React from 'react';

const HotelC = ({hotel}) => {
  return <div>
      <p>{hotel.id + ' '}{hotel.name + ' '}{hotel.description + ' '}{hotel.location + ' '}{hotel.cost + ' '}</p>
  </div>;
};

export default HotelC;
