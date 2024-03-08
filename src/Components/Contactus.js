import React from "react"
import './Contact.css';
import { Link } from "react-router-dom";
import Img from '../Images/swiggy.png';
import Footer from "./Footer";
class Contactus extends React.Component {
    render() {
        return (
          <>
          <section id="contact">
	<div class="social">
	<Link to="https://www.instagram.com/bbq_mechanic_vadavalli?igsh=MWs2ZDYyMWJnemhlaw=="><i class="fab fa-instagram"></i></Link>
	
	</div>
	<div class="contact-box">
	<div class="c-heading">
	<h1>Get In Touch</h1>
	<p>Call Or Email Us Regarding Question Or Issues</p>
	</div>
	<div class="c-inputs">
	<form>	
	<input type="email" placeholder="Example@gmail.com"/>
	<textarea name="message" placeholder="Write Message"></textarea>
	<button>SEND</button>
	</form>
	</div>
		
	</div>
	<div class="map"> 
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7832.247662335602!2d76.88680535395373!3d11.029334961618126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f55448cad49%3A0x6ab938d0659030e1!2sBBQ%20Mechanic%20vadavalli!5e0!3m2!1sen!2sin!4v1709103953716!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		
	</div>
	</section>
          <Footer></Footer>
          </>
);
    }
        }
export default Contactus;
