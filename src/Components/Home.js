import React from "react";
import "./Home.css";
import Image5 from '../Images/burger.jpg';
import cardimage27 from "../Galleryimages/img25.jpg";
import Image3 from '../Images/bbq.jpg';
import Hero from '../Images/hero.png';
class Home extends React.Component {
    render() {
        return (
          <>
         <div className="container-fluid p-0">

          <div className="container-fluid p-0" id="hom">
            <div class="container-xxl py-1 bg-dark hero-header mb-5">
              <div class="container py-5">
                <div class="row align-items-center g-5">
                  <div class="col-lg-6 text-center text-lg-start">
                    <h1 class="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Food</h1>
                    <p class="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

                    <a href="#" class="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Our Menu</a>


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
          
          <br></br> <h1>About us</h1><br></br>
          <h5 className="para">The BBQ MECHANIC has been at the center stage for all Fast Food lovers since 2024 successful and a vision to reach an easy Franchese ooportunity with low investment option for metro cities all over India.</h5>
          <br></br>
          </div>

          
          <h1>Our Special Menu</h1>
          <div className="container">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" id="caro">
              <div class="carousel-item active" data-bs-interval="100">
                <img src={Image5} class="d-block w-100" alt="cardimage15" />
              </div>
              <div class="carousel-item" data-bs-interval="100">
                <img src={cardimage27} class="d-block w-100" alt="cardimage27" />
              </div>
              <div class="carousel-item">
                <img src={Image3} class="d-block " alt="Image3" />
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
