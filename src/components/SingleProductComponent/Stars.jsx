import React from "react";

const Stars = ({ ProductStars }) => {
  
  const ratingStar= Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <p className="" key={index}>
        {ProductStars >= index + 1 ? (
          <span>
            {" "}
            <i className="fa-solid fa-star  mx-2 "></i>
          </span>
        ) : ProductStars >= number ? (
          <span>
            {" "}
            <i className="fa-solid fa-star-half-stroke mx-2"></i>
          </span>
        ) : (
          <span>
            {" "}
            <i className="fa-regular fa-star mx-2"></i>
          </span>
        )}
      </p>
    );
  });

return ( <div className="d-flex justify-content-center">
{ratingStar}
</div>)



// static way 
  //   return <>

  //    <p className="">

  //    {/* The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object. */}

  //    {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from */}

  //               {/* <span>
  //                 <i className="fa-regular fa-star mx-2"></i>
  //               </span>
  //               <span>
  //                 <i className="fa-regular fa-star mx-2"></i>
  //               </span>
  //               <span>
  //                 <i className="fa-regular fa-star mx-2"></i>
  //               </span>
  //               <span>
  //                 <i className="fa-regular fa-star mx-2"></i>
  //               </span>
  //               <span>
  //                 <i className="fa-regular fa-star mx-2"></i>
  //               </span> */}

  //             </p>
  //   </>;
};

export default Stars;
