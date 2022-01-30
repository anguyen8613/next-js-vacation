import { useRouter } from "next/router";
import React, { useState } from "react";
import VacationForm from "../../components/vacations/VacationForm";
import VacationsC from "../../components/vacations/VacationsC";

const Vacations = ({ vacations }) => {
  return (
    <div>
      <p className="text-blue-600 ml-2">
        These are some of the vacations I look forward to visiting this year.
      </p>
      <VacationsC vacations={vacations} />
      <VacationForm />
    </div>
  );
};

export default Vacations;

//reload the data after every 60 seconds.
//reloading means use nextjs server to fetch from express and resend the new html.
export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/vacations");
  const vacations = await res.json();
  console.log(vacations);
  return {
    props: {
      vacations,
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
  };
}
