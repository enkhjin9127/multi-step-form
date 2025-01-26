import { useState } from "react";
import Input from "./Input";

const Step2 = ({ formData, handleChange, handleNext, handleBack }) => {
  const [errors, setErrors] = useState({});

  const validateAndProceed = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "И-мэйл хаягаа оруулна уу.";
    if (!formData.phone) newErrors.phone = "Утасны дугаараа оруулна уу.";
    if (!formData.password) newErrors.password = "Нууц үгээ оруулна уу.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Нууц үг таарахгүй байна.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleNext();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 2: Contact Information</h2>
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
        error={errors.email}
      />
      <Input
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Your phone number"
        error={errors.phone}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Your password"
        error={errors.password}
      />
      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm your password"
        error={errors.confirmPassword}
      />
      <div className="flex justify-between">
        <button onClick={handleBack} className="p-2 bg-gray-300 rounded">
          Back
        </button>
        <button
          onClick={validateAndProceed}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
