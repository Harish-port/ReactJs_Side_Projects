import React from "react";
import "./SelectOption.css";

export default function SelectOption({states}) {
  return (

    <div className="wrapper">
        <div className="selector-one-row">
      <div>
        <label>Select State</label>
        <br />
        <select className="custom-style select-district">
          <option value="1">1</option>
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
