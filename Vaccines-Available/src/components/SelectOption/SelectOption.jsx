import React from "react";
import "./SelectOption.css";
import { useState, useEffect } from "react";
import * as Utils from "../../services/ApiHelper";

export default function SelectOption({ states }) {
  const [selectedStateId, setSelectedStateId] = useState("");
  const [district, setDistrict] = useState([]);

  const handleChange = (e) => {
    setSelectedStateId(e.target.value);
    getDistricts();
  };
  console.log(selectedStateId, "selected");
  const getDistricts = () => {
    if (selectedStateId) {
      Utils.getDistricts(selectedStateId).then((result) => {
        const recievedData = result.data;
        setDistrict(recievedData);
      });
    }
  };
  useEffect(() => {
    getDistricts();
  }, []);
  return (
    <div className="wrapper">
      {console.log(district, "districts")}
      {console.log(selectedStateId, "selected")}
      <div className="selector-one-row">
        <div>
          <label>Select State</label>
          <br />
          <select
            className="custom-style select-district"
            value={selectedStateId}
            onChange={(e) => handleChange(e)}
          >
            {states.map((item) => (
              <option key={item.state_id} value={item.state_id}>
                {item.state_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select District</label>
          <br />
          <select className="custom-style select-district">
            {district ? console.log("true") : console.log("false")}
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
