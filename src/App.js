import React, { useState } from "react";
import "./App.css";
import Field from "./Field";
import { AiOutlinePlus } from "react-icons/ai";

function App() {
  const [fields, setFields] = useState([{ id: 1, label: "", type: "" }]);
  const [formData, setFormData] = useState({});

  const handleFieldChange = (id, name, value) => {
    const newFields = fields.map((field) =>
      field.id === id ? { ...field, [name]: value } : field
    );
    setFields(newFields);
  };

  const handleAddField = () => {
    const newFields = [
      ...fields,
      { id: fields.length + 1, label: "", type: "" },
    ];
    setFields(newFields);
  };

  const handleRemoveField = (id) => {
    const newFields = fields.filter((field) => field.id !== id);
    setFields(newFields);
  };

  const handleSave = () => {
    const formData = {};
    fields.forEach((field) => {
      if (field.label !== "" && field.type !== "") {
        formData[field.label] = field.type === "number" ? 0 : "";
      }
    });
    setFormData(formData);
    console.log(formData);
  };

  return (
    <div class="parent-container">
      <div className="container">
        <div class="inner-box">
          <div class="add-field-wrapper">
            <text className="add-button" onClick={handleAddField}>
              Field name and type
            </text>
            <AiOutlinePlus className="add-icon" onClick={handleAddField} />
          </div>
          {fields.map((field) => (
            <Field
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              onFieldChange={handleFieldChange}
              onRemoveField={handleRemoveField}
            />
          ))}
          <div class="button-wrapper"><button className="save-button" onClick={handleSave}>Save</button></div>
        </div>
      </div>
    </div>
  );
}

export default App;
