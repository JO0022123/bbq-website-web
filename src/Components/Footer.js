import React from "react"

import { Link } from "react-router-dom";
class Footer extends React.Component {
    render() {
        return (
          <>
          
<footer class="text-center text-lg-start bg-dark text-white" id="footercss">
 
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    
  </section>
  
  <section class="">
    <div class="container text-center text-md-start mt-5">
      
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>BBQ
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Our Page
          </h6>
          <p>
          <Link class="nav-link text-white active" to="/">   <a href="#!" class="text-reset">HOME</a></Link>
          </p>
          <p>
          <Link class="nav-link text-white" to="Aboutus">  <a href="#!" class="text-reset">ABOUT</a></Link>
          </p>
          <p>
          <Link class="nav-link text-white" to="Franchese">  <a href="#!" class="text-reset">FRANCHISE</a></Link>
          </p>
          <p>
          <Link class="nav-link text-white" to="Menu">  <a href="#!" class="text-reset">MENU</a></Link>
          </p>
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <p>
          <Link class="nav-link text-white" to="Gallery">    <a href="#!" class="text-reset">GAllERY</a></Link>
          </p>
          <p>
          <Link class="nav-link text-white" to="Reviews">  <a href="#!" class="text-reset">REVIEW</a></Link>
          </p>
          <p>
          <Link class="nav-link text-white" to="Contactus"> <a href="#!" class="text-reset">CONTACT</a></Link>
          </p>
          
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
       
      </div>
    
    </div>
  </section>
  
  <div class="text-center p-4">
    © 2024 Copyright:
    <a class="text-reset fw-bold" href="">BBQ</a>
  </div>
 
</footer>


          </>
);
}
}
export default Footer;
