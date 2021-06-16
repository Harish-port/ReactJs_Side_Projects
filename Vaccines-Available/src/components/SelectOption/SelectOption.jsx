import React from "react";
import "./SelectOption.css";
import { useState,useEffect } from "react";
import * as Utils from "../../services/ApiHelper";

export default function SelectOption({ states }) {
  const [selectedStateId, setSelectedStateId] = useState("");
  const [district, setDistrict] = useState([]);
  const handleSelectState = (e) => {
    setSelectedStateId(e.target.value);
    getDistricts();
  };
  const getDistricts = () => {
    console.log(selectedStateId,"selected")
    Utils.getDistricts(selectedStateId).then((result) => {
      const recievedData = result.data;
      setDistrict(recievedData);
    });
  };
  useEffect(() => {
    getDistricts();
  },[])
  return (
    <div className="wrapper">
      {console.log(district,"districts")}
      <div className="selector-one-row">
        <div>
          <label>Select State</label>
          <br />
          <select
            className="custom-style select-district"
            onChange={handleSelectState}
          >
            {states.map((item, index) => (
              <option key={index} value={item.state_id}>
                {item.state_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select District</label>
          <br />
          <select className="custom-style select-district">
            <option value="1">1</option>
          </select>
        </div>
      </div>
      <div className="selector-wrapper">
        <div>
          <label>Select Pin</label>
          <br />
          <select className="custom-style selector">
            <option value="1">1</option>
          </select>
        </div>
        <div>
          <label>Select Pin</label>
          <br />
          <select className="custom-style selector">
            <option value="1">1</option>
          </select>
        </div>
        <div>
          <label>Select Pin</label>
          <br />
          <select className="custom-style selector">
            <option value="1">1</option>
          </select>
        </div>
        <div>
          <label>Select Availability</label>
          <br />
          <select className="custom-style selector">
            <option value="1">1</option>
          </select>
        </div>
      </div>
    </div>
  );
}
