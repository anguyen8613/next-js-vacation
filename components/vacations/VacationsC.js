import React, { useState } from "react";
import VacationC from "./VacationC";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import EditForm from "./EditForm";

//Map through vacations
const VacationsC = ({ vacations, selectVacation }) => {
  const [vacationInEdit, setVacationInEdit] = useState({
    name: "test",
    description: "tst",
    location: "test",
    comment: "test",
  });

  const [isInEdit, setIsInEdit] = useState(false);

  const router = useRouter();

  function editVacation(vacation) {
    setVacationInEdit(vacation);
    setIsInEdit(true);
  }

  async function deleteVacation(id) {
    const url = "http://localhost:5000/vacations/" + id;
    const response = await fetch(url, {
      method: "DELETE",
    });

    const vacation = await response.json();
    toast("DELETED " + vacation.name);
    router.push("/vacations");
  }

  return (
    <div className="hscreen w-screen flex flex-col">
      {isInEdit ? <EditForm vacation={vacationInEdit} /> : ""}
      {vacations.map((vacation) => (
        <VacationC
          key={vacation.id}
          vacation={vacation}
          deleteVacation={deleteVacation}
          editVacation={editVacation}
        />
      ))}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default VacationsC;
