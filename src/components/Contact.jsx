import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <div className="container py-4 bg-dark">
        <Navbar />
      </div>
      <div className="container mx-auto my-4">
        <div className="row mx-atuo text-center">
          <div className="col-11 mx-auto">
            <h1 className="text-capitalize heading underline d-inline px-2">
              contact
            </h1>
          </div>
        </div>
        <div className="row mx-auto my-5">
          <div className="col-12 mx-auto text-center">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58391.46524316145!2d78.71360710234578!3d23.83756025427533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d14a2cf591af%3A0xf446eaa2b5281370!2sSagar%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1667242057932!5m2!1sen!2sin"
              className="mymap"
            ></iframe>
          </div>
        </div>
        <hr />
        <div className="row mx-auto">
          <div className="col-10 col-md-6 mx-auto ">
            <div className="mb-4">
              <p className="text-danger">Information</p>
              <h4 className="text-capitalize ">contact us</h4>
              <h6>
                As you might expect of a company that began as a high-end
                interiors contractor, we pay strict attention.
              </h6>
            </div>
            <div className="mb-4">
              <h4 className="text-capitalize "> sagar</h4>
              <h6>195 E Parker Square Dr, Parker, CO 801 +43 982-314-0958.</h6>
            </div>
            <div className="mb-4">
              <h4 className="text-capitalize "> bhopal</h4>
              <h6>109 Avenue Léon, 63 Clermont-Ferrand +12 345-423-9893.</h6>
            </div>
          </div>
          <div className="col-10 col-md-6 mx-auto ">
            <h4 className="mb-4 ">Leave A Comment</h4>
            <h6>Our staff will call back later and answer your questions.</h6>

            <div className="row  my-4">
              <div className="col-10 col-lg-6 my-2">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="name"
                />
              </div>
              <div className="col-10 col-lg-6 my-2">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="email"
                />
              </div>
              <textarea
                name=""
                className="form-control my-4"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="btn btn-outline-dark d-inline">
              send message
            </button>
          </div>
        </div>
        <hr />
      </div>

      <Footer />
    </>
  );
};

export default Contact;
