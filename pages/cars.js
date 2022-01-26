import React from 'react';
import CarsC from '../components/cars/CarsC';

const cars = ({cars}) => {
  return <div>
      <h3>These are the cars I am interested in.</h3>
      <CarsC cars={cars}/>

  </div>;
};

export default cars;

export async function getStaticProps(){

    const response = await fetch('http://localhost:5000/cars');
    const cars = await response.json();
    console.log(cars)

    return {
        props: {
            cars
        }
    }
}