import React from "react";
import Footer from "./Footer";
import Image1 from '../Images/moji.jpg';
import Image2 from '../Images/rice.jpg';
import Image3 from '../Images/bbq.jpg';
import Image4 from '../Images/combo.jpeg';
import Image5 from '../Images/burger.jpg';
import Image6 from '../Images/nool.png';
import Image7 from '../Images/milk.png';
import Image8 from '../Images/pizza.jpeg';
import Image9 from '../Images/sanwich.jpeg';
import Image10 from '../Images/shawarma.jpeg';
import Image11 from '../Images/tantoori.jpg';
import Image12 from '../Images/ice.jpg';
import "./Card.css";

class Menu extends React.Component {
  render(){
    return(
      <>
                   <div className="container-fluid p-0">
          
            <div className="container-fluid p-0" id="box">
                <h1 className="text-center">OUR MENU</h1>
            </div>
            <div> 
              <h1>Don’t count calories, count the happy moments! </h1>
              </div>
<br></br>
<div class="row row-cols-1 row-cols-md-3 g-4 p-2" id="box1">
  <div class="col">
    <div class="card">
    <img src={Image1} alt="Cocacola" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">MOJITO</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Image2} alt="Briyani" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">FRIEDRICE</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Image3} alt="BBQ" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">BBQ</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Image4} alt="Combo" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">COMBO</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Image5} alt="Burger" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">BURGER</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Image6} alt="Noodles" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">NOODLES</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Image7} alt="Pasta" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">MILKSHAKE</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Image8} alt="Pizza" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">PIZZA</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Image9} alt="Sanwich" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">SANWITCH</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Image10} alt="Tantoori" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">TANTOORI</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Image11} alt="Grill" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">GRILL CHICKEN</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <img src={Image12} alt="Cocacola" className="card-img" height={"300px"}/>
      <div class="card-body">
        <h5 class="card-title">ICECREAM</h5>
      </div>
    </div>
  </div>
</div>
</div>
      <Footer></Footer>
</>
  
    );
}
}
export default Menu;
