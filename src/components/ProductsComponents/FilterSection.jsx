import React from 'react'

const FilterSection = () => {
  return (
    <>
    <div className="col-11 col-md-4 text-light mx-auto">
            <form action="">
              <div className="input-group mb-3 ">
                <div className="input-group-prepend">
                  <button
                    className="input-group-text btn btn-outline-dark"
                    id="basic-addon1"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </form>
          </div>
    </>
  )
}

export default FilterSection