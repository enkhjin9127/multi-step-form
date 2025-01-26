"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Step1 from "./StepOne";
import Step2 from "./StepTwo";
import Step3 from "./StepThree";
import Step4 from "./StepFour";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: null,
  });

  const router = useRouter();

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    router.push("/success");
  };

  return (
    <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg ">
      {step === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          handleChange={handleChange}
          handleImageUpload={handleImageUpload}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 4 && <Step4 handleSubmit={handleSubmit} />}
    </div>
  );
};

export default MultiStepForm;
