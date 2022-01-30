import React from "react";

const VacationDetails = ({ vacation }) => {
  return <div>{vacation.name}</div>;
};

export default VacationDetails;

export async function getStaticPaths() {
  //api call to get all ids
  const res = await fetch("http://localhost:5000/vacations");
  const vacations = await res.json();

  return {
    fallback: "blocking", //supported ids are all covered in the paths.
    paths: vacations.map((vacation) => ({
      params: { id: vacation.id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  //fetch data for a single vacation
  const id = context.params.id;
  const url = "http://localhost:5000/vacations/" + id;
  const response = await fetch(url);

  const vacation = await response.json();

  return {
    props: {
      vacation: vacation,
    },
  };
}
