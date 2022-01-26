import React from 'react';

const CarC = ({car}) => {
  return <div>
      <p>{car.id + ' '} {car.make + ' '} {car.model + ' '}{car.year + ' '}</p>
  </div>;
};

export default CarC;
