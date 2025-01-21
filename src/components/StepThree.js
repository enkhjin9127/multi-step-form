import React from "react";

const StepThree = (props) => {
  const { handleNextStep, handleBackStep } = props;
  return (
    <div>
      <div>stepThree</div>
      <button onClick={handleNextStep}>next</button>
      <button onClick={handleBackStep}>back</button>
    </div>
  );
};

export default StepThree;
