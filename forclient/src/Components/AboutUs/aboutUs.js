import React from 'react'
import img from "./photoab.AVIF";

function aboutUs() {
    return (
    <div className ="AboutUs-Section">
      <img  className ="Cover" src={img}  alt ="photosAboutUs"   />
        <div>
        <h1 className ="Question">Who we are </h1>
        </div>

        <div className="aboutTheCompany">
            <p className ="test6">
            IMMO SANEKLI was founded in 2024 by yahya sanekli Based in Hammamet,Tunisia,IMMO SANEKLI is is a website for renting apartments online. renting apartments in hammamet for a short term or long term .
            </p>
            <p className ="test6">
            Phone Number:50.118.760
            </p>

            <div>

            <p className ="Footer ">
            © copyright 2024  
        </p>
       </div>
        </div>
    </div>
    )
}

export default aboutUs