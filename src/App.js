import React, { useMemo, useState } from "react";
import "./App.css";
import Field from "./Field";
import { AiOutlinePlus } from "react-icons/ai";

const INITIAL_FIELD = {
  id: Date.now(),
  label: "",
  type: "",
  required: false,
};

function App() {
  const [fields, setFields] = useState([INITIAL_FIELD]);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  /**
   * Handles field updates dynamically
   */
  const handleFieldChange = (id, name, value) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id
          ? {
              ...field,
              [name]: value,
            }
          : field
      )
    );

    // Clear validation error when user updates field
    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  /**
   * Adds a new field row
   */
  const handleAddField = () => {
    const newField = {
      id: Date.now(),
      label: "",
      type: "",
      required: false,
    };

    setFields((prevFields) => [...prevFields, newField]);
  };

  /**
   * Removes selected field
   */
  const handleRemoveField = (id) => {
    setFields((prevFields) =>
      prevFields.filter((field) => field.id !== id)
    );

    setErrors((prev) => {
      const updatedErrors = { ...prev };
      delete updatedErrors[id];
      return updatedErrors;
    });
  };

  /**
   * Form validation
   */
  const validateFields = () => {
    const validationErrors = {};

    fields.forEach((field) => {
      if (!field.label.trim()) {
        validationErrors[field.id] = "Field label is required";
      } else if (!field.type.trim()) {
        validationErrors[field.id] = "Field type is required";
      }
    });

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  /**
   * Generates final form object
   */
  const handleSave = () => {
    if (!validateFields()) return;

    const generatedFormData = {};

    fields.forEach((field) => {
      switch (field.type) {
        case "number":
          generatedFormData[field.label] = 0;
          break;

        case "checkbox":
          generatedFormData[field.label] = false;
          break;

        case "array":
          generatedFormData[field.label] = [];
          break;

        case "object":
          generatedFormData[field.label] = {};
          break;

        default:
          generatedFormData[field.label] = "";
      }
    });

    setFormData(generatedFormData);

    console.log("Generated Form Schema:", generatedFormData);
  };

  /**
   * Derived stats
   */
  const totalFields = useMemo(() => fields.length, [fields]);

  return (
    <div className="parent-container">
      <div className="container">
        <div className="inner-box">
          {/* Header */}
          <div className="header-section">
            <div>
              <h1 className="title">Dynamic Form Builder</h1>
              <p className="subtitle">
                Create custom fields and generate form schema instantly
              </p>
            </div>

            <div className="field-count">
              Total Fields: {totalFields}
            </div>
          </div>

          {/* Add Field */}
          <div
            className="add-field-wrapper"
            onClick={handleAddField}
            role="button"
            tabIndex={0}
          >
            <span className="add-button">
              Add New Field
            </span>

            <AiOutlinePlus className="add-icon" />
          </div>

          {/* Fields */}
          <div className="fields-wrapper">
            {fields.map((field, index) => (
              <div key={field.id} className="field-card">
                <div className="field-index">
                  Field #{index + 1}
                </div>

                <Field
                  id={field.id}
                  label={field.label}
                  type={field.type}
                  required={field.required}
                  error={errors[field.id]}
                  onFieldChange={handleFieldChange}
                  onRemoveField={handleRemoveField}
                />
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="button-wrapper">
            <button
              className="save-button"
              onClick={handleSave}
            >
              Generate Schema
            </button>
          </div>

          {/* Preview */}
          {Object.keys(formData).length > 0 && (
            <div className="preview-wrapper">
              <h3 className="preview-title">
                Generated JSON Schema
              </h3>

              <pre className="preview-box">
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
