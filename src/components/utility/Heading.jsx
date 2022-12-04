import React from "react";

const Heading = ({ name ,textCol}) => {
  return (
    <>
      <h1 className={`text-capitalize heading underline d-inline px-2 ${textCol}`}>
        {name}
      </h1>
    </>
  );
};

export default Heading;
