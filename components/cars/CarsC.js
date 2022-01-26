import React from 'react';
import CarC from './CarC';

const CarsC = ({cars}) => {
  return <div>
      {cars.map((car) => (
          //Car component here
          <CarC key={car.id} car={car}/>
      ))}
  </div>;
};

export default CarsC;
