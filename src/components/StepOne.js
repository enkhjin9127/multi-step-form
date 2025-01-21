import React from "react";
import PineconeIcon from "@/icons/pineconeIcon";
import Form from "../components/Form";

const StepOne = (props) => {
  const { handleNextStep, handleBackStep } = props;

  const fields = [
    {
      name: "fName",
      label: "First Name *",
      placeholder: "Enter your first name",
      required: true,
    },
    {
      name: "lName",
      label: "Last Name *",
      placeholder: "Enter your last name",
      required: true,
    },
    {
      name: "uName",
      label: "Username *",
      placeholder: "Enter your username",
      required: true,
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="opacity-100 transform-none">
        <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
          <div className="space-y-2 mb-7">
            <div className="flex">
              <PineconeIcon />
            </div>
            <h2 className="text-[26px] text-foreground font-semibold">
              Join Us! 😎
            </h2>
            <p className="text-[18px] whitespace-nowrap text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="flex flex-col flex-grow gap-y-3">
            <Form fields={fields} />
            <div className="flex justify-between mt-4">
              <button onClick={handleNextStep} className="btn-primary">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
