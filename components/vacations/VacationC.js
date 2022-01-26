import React from 'react';

//Display each vacation's properties
const VacationC = ({vacation, selectVacation}) => {



  return <div>
      <p>{vacation.id + ' '} {vacation.name + ' '} {vacation.description + ' '} {vacation.location + ' '} {vacation.comment + ' '} <button onClick={() => selectVacation(vacation.id)}>details</button></p>
  </div>;
};

export default VacationC;
