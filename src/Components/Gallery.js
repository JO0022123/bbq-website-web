import React from "react";
import "./Gallery.css";
import cardimage1 from "../Galleryimages/img.jpeg";
import cardimage2 from "../Galleryimages/img0.jpeg";
import cardimage3 from "../Galleryimages/img1.jpeg";
import cardimage4 from "../Galleryimages/img2.jpeg";
import cardimage6 from "../Galleryimages/img3.jpeg";
import cardimage7 from "../Galleryimages/img4.jpeg";
import cardimage8 from "../Galleryimages/img5.jpeg";
import cardimage9 from "../Galleryimages/img6.jpeg";
import cardimage10 from "../Galleryimages/img7.jpeg";
import cardimage11 from "../Galleryimages/img8.jpeg";
import cardimage12 from "../Galleryimages/img9.jpeg";
import cardimage13 from "../Galleryimages/img10.jpg";
import cardimage14 from "../Galleryimages/img11.jpeg";
import cardimage15 from "../Galleryimages/img12.jpeg";
import cardimage17 from "../Galleryimages/img13.jpeg";
import cardimage20 from "../Galleryimages/img14.jpeg";
import cardimage5 from "../Galleryimages/img15.jpeg";
import cardimage16 from "../Galleryimages/img16.jpeg";
import cardimage18 from "../Galleryimages/img17.jpeg";
import cardimage19 from "../Galleryimages/img18.jpeg";
import cardimage21 from "../Galleryimages/img19.jpg";
import cardimage22 from "../Galleryimages/img20.jpg";
import cardimage23 from "../Galleryimages/img21.jpg";
import cardimage24 from "../Galleryimages/img22.jpg";
import cardimage25 from "../Galleryimages/img23.jpg";
import cardimage26 from "../Galleryimages/img24.jpg";
import cardimage27 from "../Galleryimages/img25.jpg";
import cardimage28 from "../Galleryimages/img26.jpg";
import cardimage29 from "../Galleryimages/img27.jpg";
import video3 from "../Galleryimages/video3.mp4";
import video1 from "../Galleryimages/video1.mp4";


class Gallery extends React.Component {
  render() {
    return (
      <>
        <div class="row">
          <div class="column">
            <img src={cardimage1} alt="BBQ MECHANIC"/>
            <img src={cardimage2} alt="BBQ MECHANIC"/>
            <img src={cardimage3} alt="BBQ MECHANIC"/>
            <img src={cardimage4} alt="BBQ MECHANIC" />
            <img src={cardimage5} alt="BBQ MECHANIC"/>
            <img src={cardimage6} alt="BBQ MECHANIC"/>
            <img src={cardimage7}height="715px" alt="BBQ MECHANIC"/>
          </div>

          <div class="column">
           
            <img src={cardimage9} alt="BBQ MECHANIC"/>
            <img src={cardimage10} alt="BBQ MECHANIC"/>          
            <img src={cardimage8} alt="BBQ MECHANIC"/>
            <img src={cardimage29} height="235" alt="BBQ MECHANIC" />
            <img src={cardimage12} alt="BBQ MECHANIC"/>
            <img src={cardimage11} height="400px" alt="BBQ MECHANIC"/>
          </div>

          <div class="column">
           
            <img src={cardimage15} alt="BBQ MECHANIC"/>
            <img src={cardimage16} alt="BBQ MECHANIC"/>
            <img src={cardimage17} alt="BBQ MECHANIC"/>
            <img src={cardimage18} alt="BBQ MECHANIC"/>
            <img src={cardimage19} alt="BBQ MECHANIC"/> 
            <img src={cardimage14} alt="BBQ MECHANIC"/>
            <img src={cardimage26} height="410px" alt="BBQ MECHANIC"/>


          </div>
          <div class="column">
            <img src={cardimage22} alt="BBQ MECHANIC"/>
            <img src={cardimage23} alt="BBQ MECHANIC" />
            <img src={cardimage24} alt="BBQ MECHANIC" />
            <img src={cardimage25} alt="BBQ MECHANIC"/>
            <img src={cardimage28} alt="BBQ MECHANIC"/>
            <img src={cardimage27} alt="BBQ MECHANIC"/>
            <img src={cardimage21} alt="BBQ MECHANIC"/>
            <img src={cardimage13} alt="BBQ MECHANIC"/>
            <img src={cardimage20} height="550px" alt="BBQ MECHANIC"/>
          </div>

         
        </div>
      </>
    )
  }
}
export default Gallery;
