import React from 'react'
import img from '../Img/sample/img1.jpg'
const MostSelling = () => {
  return (
    <>
    <div className="container-fluid bg-light   p-4 mx-auto text-center">
        <div className="row ">
          <h1 className="mx-auto text-center my-3 col-10 heading">Most Selling Products</h1>
        </div>
        {/* my gallery */}
<div className="container mx-auto text-center py-2">
<div className="row ">
  <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src={img} alt="my image87" className='img-fluid'/>
  </div>
  <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src={img} alt="my image1" className='img-fluid'/>
  </div> <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src={img} alt="my image2" className='img-fluid'/>
  </div> <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src={img} alt="my image3" className='img-fluid'/>
  </div>
  <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src={img} alt="my image4" className='img-fluid'/>
  </div> <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src={img} alt="my image5" className='img-fluid'/>
  </div> <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src={img} alt="my image6" className='img-fluid'/>
  </div>
  <div className="col-lg-3 col-md-4 col-10 mx-auto my-2">
    <img src={img} alt="my image7" className='img-fluid'/>
  </div>
</div>
</div>
<button className='btn btn-outline-primary mt-5 text-capitalize'>click</button>
    </div>
    </>
  )
}

export default MostSelling