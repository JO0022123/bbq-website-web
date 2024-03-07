import React from "react";
import myimage from "../Galleryimages/img3.jpeg";
class Aboutus extends React.Component {
    render() {
        return (
          <>
           <div class="container">
          <div class="content">
            <center>
              <h2 className="b">About Us</h2>
            </center>
            <br></br>
            <p>
              Welcome to [Restaurant Name], where we are passionate about
              providing exceptional dining experiences. Founded in [year],
              [Restaurant Name] has been serving delicious meals and providing
              top-notch service to our patrons for [number] years.
            </p>
            <p>
              Our mission is simple: to delight our guests with exquisite dishes
              crafted from the finest ingredients. We strive to exceed
              expectations by delivering exceptional service and creating
              memorable dining experiences.
            </p>
            <p>
              Get to know the faces behind [Restaurant Name] and discover the
              passion and creativity that goes into every dish.
            </p>
            <p>
              We'd love to hear from you! Whether you have a question, comment,
              or special request, don't hesitate to reach out to us.
            </p>
            <p>Phone: [Phone Number]</p>
            <p>Email: [Email Address]</p>
            <p>Address: [Restaurant Address]</p>
          </div>
          <div class="image">
            <img src={myimage} alt="myimage"></img>
          </div>
        </div>

        
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>BBQ<span> MECHANIC</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Franshies</a>
				
					<a href="#">Menu</a>
				
					<a href="#">About</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Company Name © 2015</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>no.2/1, maruthamalai road, opposite svarga residency,</span> vadavalli, Coimbatore.</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					the bbq mechanic has been at the center stage for all fast food lovers since 2024 successful and a vision to reach an easy franchese oppurtunity with low investment option for metro cities all over india.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>

          </>
);
}
}
export default Aboutus;
