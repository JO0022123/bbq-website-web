import React from "react"
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
      
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark" id="navbarbox">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
              <Link class="nav-link" to="Home">Home</Link>
              <Link class="nav-link" to="Aboutus">Aboutus</Link>
              <Link class="nav-link" to="Franchese">Franchese</Link>
              <Link class="nav-link" to="Menu">Menu</Link>
              <Link class="nav-link" to="Gallery">Gallery</Link>
                <Link class="nav-link" to="Reviews">Reviews</Link>
                <Link class="nav-link" to="Contactus">Contactus</Link>

              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

      
export default Header;
