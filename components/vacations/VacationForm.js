import { useRouter } from 'next/router';
import React, { useRef } from 'react';

function VacationForm({addVacationList}) {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const locationRef = useRef();
    const commentRef = useRef();

    const router = useRouter();

    async function submitForm(e){
        e.preventDefault();
        const vacation = {name: nameRef.current.value, description: descriptionRef.current.value, location: locationRef.current.value, comment: commentRef.current.value};
        try{
            const newVacation = await fetch('http://localhost:5000/vacations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(vacation),
            })
            console.log(newVacation);
            
            router.reload();
        }catch(e){
            console.log(e.message);
        }
    }

  return <div className='mt-10'>
      <form onSubmit={submitForm}>
          <input ref={nameRef} type='text' placeholder='name' required/>
          <input ref={descriptionRef} type='text' placeholder='description' required/>
          <input ref={locationRef} type='text' placeholder='location' required/>
          <input ref={commentRef} type='text' placeholder='comment' required/>
          <button type='submit'>submit</button>
      </form>
  </div>;
}

export default VacationForm;
