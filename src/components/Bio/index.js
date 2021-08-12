import React from "react";
import "./bio.css";
import headshot from '../../images/headshot.jpg'

function Bio() {
  return (

  
      <div id='bio-container'>

        <div id="bio-details">
          <h2>Hi, I'm Alexandra Gallo</h2>

          <p>  Ex ad sit ad laboris enim. Laboris tempor nulla pariatur incididunt.
            Pariatur non adipisicing tempor ea ullamco exercitation. Dolor cillum
            laboris ullamco velit pariatur consequat anim. Magna aliquip sunt culpa adipisicing fugiat.
            Adipisicing velit exercitation laboris dolor exercitation fugiat occaecat consectetur.
            Consequat ullamco nostrud minim excepteur proident.
          </p>
        </div>

        <img id='headshot' alt='headshot' src={headshot} />




        


      </div>


  );
}

export default Bio;
