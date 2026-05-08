import React from "react";
import "./App.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import ToggleSwitch from "./ToggleSwitch";

function Field({
  id,
  label,
  type,
  required,
  onFieldChange,
  onRemoveField,
}) {
  // Handle all field updates
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFieldChange(id, name, value);
  };

  // Handle toggle switch separately
  const handleToggleChange = (checked) => {
    onFieldChange(id, "required", checked);
  };

  return (
    <div className="field-container">
      <div className="field-header">
        <h4 className="field-title">Field Configuration</h4>

        <RiDeleteBin6Line
          className="delete-icon"
          title="Delete Field"
          onClick={() => onRemoveField(id)}
        />
      </div>

      <div className="field-body">
        {/* Label Input */}
        <div className="input-group">
          <label className="input-label">Field Label</label>

          <input
            className="text-box"
            type="text"
            name="label"
            placeholder="Enter field label"
            value={label}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>

        {/* Type Dropdown */}
        <div className="input-group">
          <label className="input-label">Field Type</label>

          <select
            className="dropdown"
            name="type"
            value={type}
            onChange={handleInputChange}
          >
            <option value="">Select Type</option>
            <option value="string">STRING</option>
            <option value="number">INTEGER</option>
            <option value="boolean">BOOLEAN</option>
            <option value="object">OBJECT</option>
            <option value="array">ARRAY</option>
          </select>
        </div>

        {/* Required Toggle */}
        <div className="toggle-wrapper">
          <span className="toggle-label">Required Field</span>

          <ToggleSwitch
            checked={required}
            onChange={handleToggleChange}
          />
        </div>
      </div>

      <hr className="solid" />
    </div>
  );
}

export default Field;
