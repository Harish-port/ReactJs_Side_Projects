import React, { useState, useEffect } from "react";
import * as Utils from "../../services/ApiHelper";
import "./Home.css";

export default function Home() {
  const [vaccines, setVaccines] = useState([]);
  const fetchVaccines = async () => {
    const date = getTodayDate();
    await Utils.getVaccineAvailability(date).then((result) => {
      const recievedData = result.data;
      setVaccines(recievedData);
    });
  };
  const getTodayDate = () => {
    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    return date;
  };
  useEffect(() => {
    fetchVaccines();
  }, []);

  return (
    <div className="container">
      <div className="vaccine-generator">
        {console.log(vaccines)}
        <h1>CoWIN Vaccination Slot Availabilty</h1>
      </div>
    </div>
  );
}
