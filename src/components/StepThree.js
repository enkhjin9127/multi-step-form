import { useState } from "react";

const Step3 = ({
  formData,
  handleChange,
  handleImageUpload,
  handleNext,
  handleBack,
}) => {
  const [errors, setErrors] = useState({});

  const validateAndProceed = () => {
    const newErrors = {};
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Төрсөн огноогоо оруулна уу.";
    if (!formData.profileImage) newErrors.profileImage = "Зураг оруулна уу.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleNext();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 3: Additional Information</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            errors.dateOfBirth ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">
          Profile Image <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          name="profileImage"
          onChange={handleImageUpload}
          className={`w-full p-2 border rounded ${
            errors.profileImage ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.profileImage && (
          <p className="text-red-500 text-sm">{errors.profileImage}</p>
        )}
      </div>

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

export default Step3;
