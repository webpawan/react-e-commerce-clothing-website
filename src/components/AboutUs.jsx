
import team1 from "../img/team3.jpg";
import team2 from "../img/team1.jpg";
import team3 from "../img/team5.jpg";
import team4 from "../img/team4.jpg";
import { useProduct } from "./Context/ProductContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Heading from '../components/utility/Heading'
import { motion } from "framer-motion";

const AboutUs = () => {

const name = useProduct()
console.log(name);
  return (
    <>
      <div className="container py-5">
        <Navbar />
      </div>
      <div className="container mx-auto my-3">
        <div className="row mx-atuo text-center">
          <div className="col-11 mx-auto">
            <Heading name="about us"/>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="storeImg mt-5 mx-auto"></div>
        </div>
        <div className="row my-4 mx-auto ">
          <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto">
            <p className="heading-1 ">Who We Are ?</p>
            <h6 className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              debitis optio officiis non cumque architecto sequi quod
              repudiandae, dolor veritatis.
            </h6>
          </div>
          <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto">
            <p className="heading-1 ">Who We Do ?</p>
            <h6 className="">
              Lorem ipsum, dolor sit amet consectetur adpisicing elit. Rerum
              debitis optio officiis non cumque architecto sequi quod
              repudiandae, dolor veritatis.
            </h6>
          </div>
          <div className="col-10 col-md-6 col-lg-4 my-3 mx-auto">
            <p className="heading-1 ">Why Choose Us ?</p>
            <h6 className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              debitis optio officiis non cumque architecto sequi quod
              repudiandae, dolor veritatis.
            </h6>
          </div>
        </div>

        <div className="row my-5">
          <hr />
          <div className="col-10 col-md-4 col-lg-3 my-2">
            <div className="d-flex align-items-center justify-content-center">
              <p className="mx-2 display-5">102</p>
              <h4>Our Clients</h4>
            </div>
          </div>
          <div className="col-10 col-md-4 col-lg-3 my-2">
            <div className="d-flex align-items-center justify-content-center">
              <p className="mx-2 display-5">102</p>
              <h4>Total Categories</h4>
            </div>
          </div>
          <div className="col-10 col-md-4 col-lg-3 my-2">
            <div className="d-flex align-items-center justify-content-center">
              <p className="mx-2 display-5">50</p>
              <h4>In Country</h4>
            </div>
          </div>
          <div className="col-10 col-md-4 col-lg-3 my-2">
            <div className="d-flex align-items-center justify-content-center">
              <p className="mx-2 display-5">96%</p>
              <h4>Happy Customer</h4>
            </div>
          </div>
          <hr />
        </div>

        <div className="row mx-auto my-2">
          <div className="row mx-auto">
            <div className="col-11 mx-auto text-center">
              
              <Heading name="Meet Our Team"/>
            </div>
            <div className="row mx-auto mt-5">
              <motion.div whileHover={{y:-10}}  className="col-10 col-md-4 col-lg-3 mx-auto">
                <img src={team1} alt="" className="img-fluid" />
                <h4 className="text-capitalize">Vanessa Soto</h4>
                <p className=" text-uppercase"> founder and c.e.o.</p>
              </motion.div>
              <motion.div whileHover={{y:-10}} className="col-10 col-md-4 col-lg-3 mx-auto">
                <img src={team2} alt="" className="img-fluid" />
                <h4 className="text-capitalize">andreea-avramescu</h4>
                <p className=" text-uppercase">Fashion Design </p>
              </motion.div>
              <motion.div whileHover={{y:-10}} className="col-10 col-md-4 col-lg-3 mx-auto">
                <img src={team3} alt="" className="img-fluid" />
                <h4 className="text-capitalize"> Max</h4>
                <p className=" text-uppercase">Manager</p>
              </motion.div>
              <motion.div whileHover={{y:-10}} className="col-10 col-md-4 col-lg-3 mx-auto">
                <img src={team4} alt="" className="img-fluid" />
                <h4 className="text-capitalize">John Smith</h4>
                <p className=" text-uppercase">cto</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
