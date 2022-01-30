import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function EditForm({ vacation }) {
  const [vacationEdit, setVacationEdit] = useState(vacation);
  const router = useRouter();

  useEffect(() => {
    setVacationEdit(vacation);
  }, []);

  async function submitForm(e) {
    e.preventDefault();
    //todo fetch
    console.log(submitForm);
    router.reload();
  }

  function changeName(e) {
    console.log(e);
    setVacationEdit({ ...vacationEdit, name: e.target.value });
  }

  function changeDescription(e) {
    console.log(e);
    setVacationEdit({ ...vacationEdit, description: e.target.value });
  }

  function changeLocation(e) {
    console.log(e);
    setVacationEdit({ ...vacationEdit, location: e.target.value });
  }

  function changeComment(e) {
    console.log(e);
    setVacationEdit({ ...vacationEdit, comment: e.target.value });
  }

  return (
    <div className="h-screen bg-gray-200 grid place-items-center">
      <form className="m-10 " onSubmit={submitForm}>
        <div>
          <label>Name: </label>
          <input
            className="bg-gray-200 border-2 border-gray-600 mt-2"
            type="text"
            onChange={changeName}
            value={vacationEdit.name}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            className="bg-gray-200 border-2 border-gray-600 mt-2"
            type="text"
            onChange={changeDescription}
            value={vacationEdit.description}
            required
          />
        </div>
        <div>
          <label>Location: </label>
          <input
            className="bg-gray-200 border-2 border-gray-600 mt-2"
            type="text"
            onChange={changeLocation}
            value={vacationEdit.location}
            required
          />
        </div>
        <div>
          <label>Comment: </label>
          <input
            className="bg-gray-200 border-2 border-gray-600 mt-2"
            type="text"
            onChange={changeComment}
            value={vacationEdit.comment}
            required
          />
        </div>
        <button className='mt-10' type="submit">submit</button>
      </form>
    </div>
  );
}

export default EditForm;
