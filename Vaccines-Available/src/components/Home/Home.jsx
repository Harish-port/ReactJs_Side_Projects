import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [vaccines, setVaccines] = useState([]);
  const fetchVaccines = async () => {
    await axios.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=560079&date=22-05-2021").then((response=>{
      const receivedData = response.data;
      setVaccines(receivedData);
     }))
  };

  useEffect(() => {
    fetchVaccines();
  }, []);

  return (
    <div className="container">
      <div className="vaccine-generator">
        <h1>VACCINES AVAILABLE IN BANGALORE</h1>
        {console.log(vaccines)}
      </div>
    </div>
  );
}
