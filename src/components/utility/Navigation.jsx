import React from 'react'
import { NavLink } from 'react-router-dom'
const Navigation = ({page,name}) => {
  return (
    <>
    <div className="row mx-auto text-left py-3 bg-light">
         <h6 className="d-flex align-items-center "><NavLink to='/' className="nav-link "> {page} </NavLink> / {name} </h6>
        </div>
    </>
  )
}

export default Navigation