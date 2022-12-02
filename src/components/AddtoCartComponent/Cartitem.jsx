import React from 'react'
import { useCartContext } from '../Context/CartContext';
import CartAmountToggle from '../SingleProductComponent/CartAmountToggle';

const Cartitem = ({id,name,img,color,price,amount}) => {
    const {removeitem,setIncrement,setDecrement} = useCartContext();
    
  return (
    <>
    <div className="my-3 col-12 d-flex justify-content-between align-items-center mx-auto ">
          <div className="col-sm-2 col-4 d-col-flex align-items-center mx-auto text-center">
              <div className="img_container--cart mx-auto ">
                <img src={img} style={{width:'100px'}} className="img-container--cart" alt={id} />
              </div>
              <div className="mx-2  ">
                <h5>{name}</h5>
                <h6>color <button className="btn p-1" style={{backgroundColor:color}}></button></h6>
              </div>
            </div>
            <div className="col-2 mx-auto text-center cart_hide">
              <div>
                <h5>
                  {price}
                </h5>
              </div>
            </div>
            <div className="col-4 col-sm-2 mx-auto text-center ">
        
       <CartAmountToggle
        amount={amount}
        setDecrease={()=>setDecrement(id)}
        setIncrease={()=>setIncrement(id)}
        my_padding="my_padding"
      />
            </div>
            <div className="col-2 mx-auto text-center cart_hide">
              <div>
                <h5>{amount*price}</h5>
              </div>
            </div>
            <div className="col-sm-2 col-4 mx-auto text-center">
              <button className="btn btn-outline-danger" onClick={()=>removeitem(id)}>
              <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            
          </div>
    </>
  )
}

export default Cartitem