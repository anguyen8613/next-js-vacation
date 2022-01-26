import React from 'react';
import HotelsC from '../components/hotels/HotelsC';

const hotels = ({hotels}) => {
  return <div>
      <h2>Hotels I want to visit.</h2>
      <HotelsC hotels={hotels}/>
  </div>;
};

export default hotels;

export async function getStaticProps(){

    const response = await fetch('http://localhost:5000/hotels');
    const hotels = await response.json();
    console.log(hotels);

    return {
        props: {
            hotels
        }
    }
}