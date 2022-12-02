import { motion } from 'framer-motion';
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
                    <motion.div whileTap={{y:-15}}   whileHover={{y:-5}}
                    initial={{opacity:0,y:-30}}
                    animate={{opacity:1,y:0,transition:{delay:.4,duration:1}} }className="col-2  mx-auto" key={index} >   
                    <img src={curElm.img} alt="j" className="img-fluid mx-2 shadow-lg" onClick={()=> setMainimg(curElm)}/>
                  </motion.div>
                  )
                })}
              
            </div>
          </div>
  </>

)

  
}

export default MyImags