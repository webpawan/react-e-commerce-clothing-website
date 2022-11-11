import React from "react";

const Heading = ({ name }) => {
  return (
    <>
      <h1 className="text-capitalize heading underline d-inline px-2 ">
        {name}
      </h1>
    </>
  );
};

export default Heading;
