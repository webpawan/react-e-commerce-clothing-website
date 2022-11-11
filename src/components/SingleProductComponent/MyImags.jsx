import React,{useState} from 'react'

const MyImags = ({imgs=[{img:""}]}) => {
const [mainimg, setMainimg] = useState(imgs[0]);


return(
  <>
  <div className="col-10 col-md-7 mx-auto my-2">
            <div className="row mx-auto">
              <div className="SingleProduct__img ">
                <div className="col-12 mx-auto mb-2 ">
                  <div className="SingleProduct__imgContainer">
                    <img src={mainimg.img} className="img-fluid" alt="no" />
                  </div>
                </div>
              </div>
          
                {imgs.map((curElm,index)=>{
                  return(
                    <div className="col-3 mx-auto " key={index}>   
                    <img src={curElm.img} alt="j" className="img-fluid" onClick={()=> setMainimg(curElm)}/>
                  </div>
                  )
                })}
              
            </div>
          </div>
  </>

)

  
}

export default MyImags