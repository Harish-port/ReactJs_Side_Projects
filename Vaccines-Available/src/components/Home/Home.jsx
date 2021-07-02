import React, { useState, useEffect } from "react";
import * as Utils from '../../Services/ApiHelper';
import "./Home.css";

export const Home= ()=> {
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
        <h2>CoWIN Vaccination Slot Availability</h2>
      </div>
    </div>
  );
}
