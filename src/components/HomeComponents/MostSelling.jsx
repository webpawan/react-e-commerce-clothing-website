import React from 'react'

const MostSelling = () => {
  return (
    <>
    <div className="container-fluid bg-light   p-4 mx-auto text-center">
        <div className="row my-5">
          {/* <h1 className="mx-auto text-center my-3 col-10 heading"></h1> */}
          <div className="col-11 mx-auto">
<h1 className="text-capitalize heading underline d-inline px-2">Most Selling Products </h1>
</div>
        </div>

     
        {/* my gallery */}
<div className="container mx-auto text-center py-2">
<div className="row ">
  <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src='img/sam1.jpg' alt="my image87" className='img-fluid'/>
  </div>
  <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src='img/sam1.jpg' alt="my image1" className='img-fluid'/>
  </div> <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src='img/sam1.jpg' alt="my image2" className='img-fluid'/>
  </div> <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src='img/sam1.jpg' alt="my image3" className='img-fluid'/>
  </div>
  <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src='img/sam1.jpg' alt="my image4" className='img-fluid'/>
  </div> <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src='img/sam1.jpg' alt="my image5" className='img-fluid'/>
  </div> <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src='img/sam1.jpg' alt="my image6" className='img-fluid'/>
  </div>
  <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src='img/sam1.jpg' alt="my image7" className='img-fluid'/>
  </div>
</div>
</div>
<button className='btn btn-outline-primary mt-5 text-capitalize'>click</button>
    </div>
    </>
  )
}

export default MostSelling