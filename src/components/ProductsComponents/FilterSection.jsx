import React from 'react'
import { useFileContext } from '../Context/FilterContext'

const FilterSection = () => {
const { filters:{text},updateFilterValue}=  useFileContext();
  return (
    <>
    <div className="col-11 col-md-4 text-light mx-auto">
            <form action="" onSubmit={(e)=>e.preventDefault()}>
              <div className="input-group mb-3 ">
                <div className="input-group-prepend ">
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
                  name="text"
                  value={text}
                  placeholder="Username"
                  onChange={updateFilterValue}
                />
              </div>
            </form>
          </div>
    </>
  )
}

export default FilterSection