import React from "react";
import { useFileContext } from "../Context/FilterContext";
import { motion } from "framer-motion";
const FilterSection = () => {
  const {
    filters: { text, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFileContext();

  // TO GET UNIQUE DATA FOR ALL FIELDS

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    // ---------------------------------------------------
    //   if(property==="colors"){
    //     return (newVal = ["All",...new Set([].concat(...newVal))])
    //   }else{
    //     return (newVal = ["All",...new Set (newVal)]);
    //   }

    // // return (newVal = ["All",...new Set (newVal)]);----------------------
    // -------------------------------------------------------------------------------
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
    if (property === "colors") {
      newVal = newVal.flat();
    }

    return (newVal = ["All", ...new Set(newVal)]);
    // ------------------------------------
  };

  // unique data for category

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <>
      <div  className="col-11 col-md-4  mx-auto">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              {/* <button
                    className="input-group-text btn btn-outline-dark"
                    id="basic-addon1"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button> */}
            </div>
            <input
              type="text"
              value={text}
              onChange={updateFilterValue}
              className="form-control"
              placeholder="Search Items"
              name="text"
            />
          </div>
        </form>
        <hr />
        <div className="category_filter d-block">
          <h5>category</h5>

          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                className="btn btn-outline-dark mx-2 my-2"
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
        <hr />
        <div className="company_filters">
          <h5>company filters</h5>
          <form action="#">
            <select name="company" onClick={updateFilterValue}>
              {companyData.map((curElem, index) => {
                return (
                  <option value={curElem} key={index} name="company">
                    {curElem}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <hr />
        <div className="color_filter">
          <h5>colors</h5>
          <div className="d-flex align-items-center">
          {colorsData.map((bgColor, index) => {
            if(bgColor === "All"){
              return (
                <motion.button
                whileTap={{y:-5,}}

                  key={index}
                  style={{ backgroundColor: "none" ,border:'none' }}
                  className="btn_style btn_active "
                  value={bgColor}
                  onClick={updateFilterValue}
                  name="color"
                >All</motion.button>
              );
            }
            return (
              <motion.button
              whileTap={{y:-5}}

                key={index}
                style={{ backgroundColor: bgColor }}
                className="btn_style btn_active"
                value={bgColor}
                onClick={updateFilterValue}
                name="color"
              ></motion.button>
            );
          })}
          </div>
         
        </div>

        <hr />

        <div className="price_range">
          <h5 className="text-capitalize">Price Range</h5>
          <h6>price {price}</h6>
          <input
            type="range"
            className="form-range w-50 "
            id="customRange1"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
            name="price"
          ></input>
        </div>
        <hr />
        <div className="clear_filters">
          <button className="btn btn-outline-danger" onClick={clearFilters}>
            clear filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
