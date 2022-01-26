import React from 'react';
import RestaurantsC from '../components/restaurants/RestaurantsC';

const restaurants = ({restaurants}) => {
  return <div>
      <h3>My go to restaurants.</h3>
      <RestaurantsC restaurants={restaurants}/>
  </div>;
};

export default restaurants;

export async function getServerSideProps(){
    let restaurants = [];
    try{
        const response = await fetch('http://localhost:5000/restaurants');
        restaurants = await response.json();
        console.log(restaurants);
    }catch(e){
        console.log(e.message);
    }

    return {
        props: {
            restaurants
        }
    }
}
