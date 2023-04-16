import React from "react";
import './App.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import ToggleSwitch from "./ToggleSwitch";

function Field(props) {
  const handleInputChange = (e) => {
    props.onFieldChange(props.id, e.target.name, e.target.value);
  };

  return (
    <div className="field">
      <label>
        {/* Label: */}
        <input
        className="text-box"
          type="text"
          name="label"
          placeholder="----"
          value={props.label}
          onChange={handleInputChange}
        />
      </label>
      <label>
        {/* Type: */}
        <select className="dropdown" name="type" value={props.type} onChange={handleInputChange}>
          <option value="">-Select Type-</option>
          <option value="string">STRING</option>
          <option value="number">INTEGER</option>
          <option value="boolean">BOOLEAN</option>
          <option value="object">OBJECT</option>
        </select>
      </label>
      {/* <button onClick={() => props.onRemoveField(props.id)}><RiDeleteBin6Line/></button> */}
      <ToggleSwitch />
      <RiDeleteBin6Line className="react-icons" onClick={() => props.onRemoveField(props.id)}/>
      <hr class="solid"></hr>
    </div>
  );
}

export default Field;
