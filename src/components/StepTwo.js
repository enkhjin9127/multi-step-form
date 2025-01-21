import React from "react";

const StepTwo = (props) => {
  const { handleNextStep, handleBackStep } = props;
  return (
    <div>
      <div>stepTwo</div>
      <button onClick={handleNextStep}>next</button>
      <button onClick={handleBackStep}>back</button>
    </div>
  );
};

export default StepTwo;
