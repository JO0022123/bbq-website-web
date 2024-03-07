import React from "react";
import './App.css'
import Header from "./Components/Header";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Reviews from './Components/Reviews';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Franchese from './Components/Franchese';
import Gallery from './Components/Gallery';
import Menu from './Components/Menu';
import ContactUs from './Components/Contactus';

function App(){
    return(
      <>
      <BrowserRouter>
             <Header/>
             <div>
               <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Aboutus" element={<Aboutus/>}/>
                  <Route path="/Franchese" element={<Franchese/>}/>
                  <Route path="/Menu" element={<Menu/>}/>
                  <Route path="/Gallery" element={<Gallery/>}/>
                  <Route path="/Reviews" element={<Reviews/>}/>
                  <Route path="/ContactUs" element={<ContactUs/>}/>
               </Routes>
             </div>
          </BrowserRouter>
     </>
     );

}
export default App;


