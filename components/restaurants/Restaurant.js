import React from 'react';

const Restaurant = ({restaurant}) => {
  return <div>
    <p>{restaurant.id} {restaurant.name}</p>
  </div>;
};

export default Restaurant;
