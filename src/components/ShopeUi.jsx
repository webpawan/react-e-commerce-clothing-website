import React from 'react'
// import Navbar from '../Navbar'
import img from '../Img/sample/img2.jpg'
import Footer from './Footer'
const ShopeUi = () => {
  return (
    <>
{/* <h1 className='text-center my-4'>fg</h1> */}

   <div className="container-fluid  ">
    <div className="row ">
     <div className="col-11  mx-auto text-center my-5">
      <h1 className='mx-auto px-3 heading underline d-inline'>shope</h1>
     </div>
    </div>
    <div className="row p-5">

        <div className="col-11 col-md-4 text-light mx-auto">
     
      <form action="">
      <div class="input-group mb-3 ">
  <div class="input-group-prepend">
    <button class="input-group-text btn btn-outline-dark" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i></button>
  </div>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
      </form>


        </div>
        <div className="col-11 col-md-8 mx-auto" >
<div className="row">
    
<div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
    <div className="card">
  <img src={img} className="card-img-top mx-auto" alt="hello" style={{width:'10rem'}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div> <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
    <div className="card">
  <img src={img} className="card-img-top mx-auto" alt="hello" style={{width:'10rem'}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div> <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
    <div className="card">
  <img src={img} className="card-img-top mx-auto" alt="hello" style={{width:'10rem'}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div> <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
    <div className="card">
  <img src={img} className="card-img-top mx-auto" alt="hello" style={{width:'10rem'}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div> <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
    <div className="card">
  <img src={img} className="card-img-top mx-auto" alt="hello" style={{width:'10rem'}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div> <div className="col-11 col-md-6 col-lg-4 mb-3 mx-auto">
    <div className="card">
  <img src={img} className="card-img-top mx-auto" alt="hello" style={{width:'10rem'}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
     
  
</div>
        </div>
      
    </div>
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
    <button className='btn btn-outline-dark mx-2'><i class="fa-solid fa-angle-left "></i></button>
    </li>
    <li class="page-item"><a class="page-link" href="/">1</a></li>
    <li class="page-item"><a class="page-link" href="/">2</a></li>
    <li class="page-item"><a class="page-link" href="/">3</a></li>
    <li class="page-item">
    <button className='btn btn-outline-dark mx-2'><i class="fa-solid fa-angle-right "></i></button>
    
    </li>
  </ul>
</nav>
   </div>
   <Footer/>
    </>
  )
}

export default ShopeUi