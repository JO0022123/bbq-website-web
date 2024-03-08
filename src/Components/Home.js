import React from "react";
import "./Home.css";
import Image5 from '../Images/burger.jpg';
import cardimage27 from "../Galleryimages/img25.jpg";
import Image3 from '../Images/bbq.jpg';
import Hero from '../Images/hero.png';
import { Link } from "react-router-dom";
import cardimage15 from "../Galleryimages/img12.jpeg";
import cardimage17 from "../Galleryimages/img13.jpeg";

class Home extends React.Component {
    render() {
        return (
          <>
         <div className="container-fluid p-0" id="homebox">

          <div className="container-fluid p-0" id="homebox">
            <div class="container-fluid py-0 bg-dark hero-header mb-5">
              <div class="container pb-5">
                <div class="row align-items-center g-5">
                  <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Food</h1>
                    <p class="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

                   <Link class="nav-link text-white" to="Menu"><a href="" class="btn btn-primary text-center py-sm-3 px-sm-5 me-3 animated slideInLeft">Our Menu</a></Link>


                  </div>
                  <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img class="img-fluid" src={Hero} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
          <br></br>
          <h1>WELCOME TO BBQ MECHANIC</h1>
          
         
          <p className="para">
              BBQ Mechanic has been serving delightful experiences through the art of cooking for four decades. A cozy,relaxing space combined with flavourful dishes makes it a first choices for every foodie in town. It provides a wide range of items to choose from and lets everyone indulge in an experiences of pleasing their taste buds.
               </p>
          
         <div class="container">
            <h1 class="mt-5 mb-5">Our Menu card</h1>
            <div class="row">
              <div class="col-4">
                <img src={cardimage15} id="imgbox"height="400px"/>
              </div>
              <div class="col-4" id="para">
              "Grillin' and chillin' at the BBQ party!",<br></br>
        "Sauce boss, ruling the grill with a smokin' attitude."<br></br>
       
        "Gettin' saucy with my barbecue crew!"<br></br>
        
        "In the world of BBQ, I'm the sauce-preneur!"<br></br>
              </div>
              <div class="col-4">
                <img src={cardimage17} id="imgbox" height="400px"/>
              </div>
              

            </div>

          </div>

          </div>

          
          <h1 class="mt-5 mb-5">Our Special Menu</h1>
          <div className="container">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" id="caro">
              <div class="carousel-item active" data-bs-interval="100">
                 <div class="row">
                  <div class="col-4">
                  <img src={Image5} class="d-block w-100" id="imgcol" height="400px" alt="cardimage15" />
                  </div>
                  <div class="col-4">
                  <img src={Image5} class="d-block w-100"id="imgcol" height="400px" alt="cardimage15" />
                  </div>
                  <div class="col-4">
                  <img src={Image5} class="d-block w-100"id="imgcol"  height="400px" alt="cardimage15" />
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="100">
                <div class="row">
                  <div class="col-4">
                  <img src={cardimage27} class="d-block w-100"id="imgcol" height="400px" alt="cardimage27" />
                  </div>
                  <div class="col-4">
                  <img src={cardimage27} class="d-block w-100"id="imgcol"  height="400px"alt="cardimage27" />
                  </div>
                  <div class="col-4">
                  <img src={cardimage27} class="d-block w-100"id="imgcol" height="400px" alt="cardimage27" />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <div class="row">
                  <div class="col-4">
                  <img src={Image3} class="d-block w-100"id="imgcol"  height="400px" alt="cardimage15" />
                  </div>
                  <div class="col-4">
                  <img src={Image3} class="d-block w-100"id="imgcol" height="400px" alt="cardimage15" />
                  </div>
                  <div class="col-4">
                  <img src={Image3} class="d-block w-100"id="imgcol" height="400px" alt="cardimage15" />
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div><br></br>
          </div>
        </div>
              
          </>
);
}
}
export default Home;
