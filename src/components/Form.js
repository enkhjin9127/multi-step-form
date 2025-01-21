import React from "react";

const ReusableForm = ({ onSubmit, fields, buttonText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            name={field.name}
            type={field.type || "text"}
            placeholder={field.placeholder || ""}
            required={field.required || false}
          />
        </div>
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default ReusableForm;
