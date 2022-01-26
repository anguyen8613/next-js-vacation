import React from 'react';
import VacationC from './VacationC';
import VacationForm from './VacationForm';

//Map through vacations
const VacationsC = ({vacations, selectVacation}) => {

  return <div>
      {vacations.map((vacation) => (
          <VacationC key={vacation.id} vacation={vacation} selectVacation={selectVacation} />
      ))}
  </div>;
};

export default VacationsC;
