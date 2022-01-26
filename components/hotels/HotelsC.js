import React from 'react';
import HotelC from './HotelC';

const HotelsC = ({hotels}) => {
    
  return <div className='grid place-items-center'>
      {hotels.map((hotel) => (
          <HotelC key={hotel.id} hotel={hotel} />
      ))}
  </div>;
};

export default HotelsC;
