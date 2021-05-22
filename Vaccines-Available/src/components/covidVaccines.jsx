import React, { useState, useEffect } from "react";
import './covidVaccines.css';

export default function CovidVaccines() {
  const [vaccines, setVaccines] = useState([]);
  const fetchQuotes = async () => {
    await fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=560079&date=22-05-2021")
      .then((response) => response.json())
      .then((receivedData) => setVaccines(receivedData));
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="container">
      <div className="vaccine-generator">

      </div>
    </div>
  );
}
