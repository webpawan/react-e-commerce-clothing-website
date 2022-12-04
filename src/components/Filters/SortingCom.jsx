import React from 'react'

const Sorting = ({SortingFun}) => {
  return (
    <>
    <div className="col-11 mx-auto mb-3">
            <div className=" d-flex justify-content-end align-items-center">
             <form action="#">
              <label htmlFor="sort">sort</label>
              <select name="sort" id="sort" className="mx-2 p-1" onClick={SortingFun}>
                <option value="lowest">price highest</option>
                <option value="highest">price lowest</option>
                <option value="a-z"> a-z</option>
                <option value="z-a"> z-a</option>
                
              </select>
             </form>
            </div>
          </div>
    </>
  )
}

export default Sorting