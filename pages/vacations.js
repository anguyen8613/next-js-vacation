import React, { useState } from 'react';
import VacationForm from '../components/vacations/VacationForm';
import VacationsC from '../components/vacations/VacationsC';

const vacations = ({vacations}) => {

  const [vacation, setVacation] = useState({});

  async function selectVacation(id){
    const url = 'http://localhost:5000/vacations/' + id;
    const response = await fetch(url);
    const vacation = await response.json();
    setVacation(vacation);
  }
  
  return <div>
      <p className='text-blue-600'>These are some of the vacations I look forward to visiting this year.</p>
      <VacationsC vacations={vacations} selectVacation={selectVacation}/>
      <VacationForm />
      <h3>Current Vacation Detail</h3>
      {vacation.name}

  </div>;
};

export default vacations;


export async function getServerSideProps() {
    const res = await fetch('http://localhost:5000/vacations');
    const vacations = await res.json();
    console.log(vacations);
    return {
      props: {
        vacations
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
    }
  }