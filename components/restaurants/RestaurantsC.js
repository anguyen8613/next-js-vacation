import React from 'react';
import Restaurant from './Restaurant';

const RestaurantsC = ({restaurants}) => {
  return <div>
      {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant}/>
      ))}
  </div>;
};

export default RestaurantsC;
