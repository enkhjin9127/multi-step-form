import { useState } from "react";
import Input from "./Input";
import PineconeIcon from "@/icons/PineconeIcon";

const Step1 = ({ formData, handleChange, handleNext }) => {
  const [errors, setErrors] = useState({});

  const validateAndProceed = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Нэрээ оруулна уу.";
    if (!formData.lastName) newErrors.lastName = "Овгоо оруулна уу.";
    if (!formData.username)
      newErrors.username = "Хэрэглэгчийн нэрээ оруулна уу.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleNext();
    }
  };

  return (
    <div>
      <div className="space-y-2 mb-7">
        <PineconeIcon />
        <h2 className="text-[26px] text-foreground font-semibold">
          Join Us! 😎
        </h2>
        <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
          Please provide all current information accurately.
        </p>
      </div>
      <Input
        label="First name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Your first name"
        error={errors.firstName}
      />
      <Input
        label="Last name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Your last name"
        error={errors.lastName}
      />
      <Input
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Your username"
        error={errors.username}
      />
      <button
        onClick={validateAndProceed}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
