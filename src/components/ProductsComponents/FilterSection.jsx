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
        </form>
        <hr />
        <div className="category_filter d-block">
          <h5>category</h5>
        
         {categoryData.map((curElem,index)=>{
return <button key={index} className="btn btn-outline-dark mx-2 my-2" type="button" name="category" value={curElem} onClick={updateFilterValue}>{curElem}</button>
         })}
          
        </div>
        <hr/>
        <div className="company_filters">
          <h5>company filters</h5>
          <form action="#">
          <select name="company" onClick={updateFilterValue}>
            {companyData.map((curElem,index)=>{
             return <option value={curElem} key={index} name="company">{curElem}</option>
            })}
          </select>
          </form>
        </div>
        <hr />
        <div className="color_filter">
          <h5>colors</h5>
         
          {colorsData.map((curColor,index)=>{
           

if(curColor==="All"){
  return <motion.button whileTap={{scale:1.1}} key={index} className={"btn btn-outline-dark  p-2   mx-2 " + (curColor)} name="color" value={curColor} onClick={updateFilterValue} >
 All
</motion.button>
}
return <motion.button whileTap={{scale:1.1}} key={index} className={"btn btn-outline-dark  p-2   mx-2 " + (curColor)} name="color" value={curColor} onClick={updateFilterValue} >
  {curColor}
</motion.button>

          })}
        </div>
        
        <hr/>


        <div className="price_range">
          <h5 className="text-capitalize">Price Range</h5>
<h6>price {price}</h6>
<input type="range" className="form-range w-50 " id="customRange1" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} name="price"></input>
        </div>
        <hr/>
        <div className="clear_filters">
          <button className="btn btn-outline-danger" onClick={clearFilters}>clear filters</button>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
