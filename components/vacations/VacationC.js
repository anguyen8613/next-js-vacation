import { useRouter } from 'next/router';
import React from 'react';
import styles from './VacationC.module.css';
//Display each vacation's properties
const VacationC = ({vacation, selectVacation, deleteVacation, editVacation}) => {

  const router = useRouter();

  function edit(){
    editVacation(vacation);
  }

  function showDetails(){
    const url = '/vacations/' + vacation.id;
    router.push(url);
  }

  return <div>
      <p><button className={styles.detailsBtn} onClick={showDetails}>details</button><button className={styles.editBtn} onClick={edit}>edit</button><button className={styles.deleteBtn} onClick={() => deleteVacation(vacation.id)}>delete</button>{vacation.id + ' '} {vacation.name + ' '}</p>
  </div>;
};

export default VacationC;
