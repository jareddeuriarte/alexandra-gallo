import React from "react";
import "./photo.css";
import pablo1 from '../../images/photo/pablo1.png'
import jared from '../../images/photo/jared.png'
import sunflower from '../../images/photo/sunflower.png'
import ballerina from '../../images/photo/ballerina.png'
import pablo2 from '../../images/photo/pablo2.png'
import tutu from '../../images/photo/tutu.png'





function Photo() {
  return (


      <div id='photo-flex-container'>
        <div id='photo-grid'>
        <img className='grid-photo' alt='placeholder' src={pablo1}></img>
          <img className='grid-photo' alt='placeholder' src={jared}></img>
          <img className='grid-photo' alt='placeholder' src={sunflower}></img>
          <img className='grid-photo' alt='placeholder' src={ballerina}></img>
          <img className='grid-photo' alt='placeholder' src={pablo2}></img>
          <img className='grid-photo' alt='placeholder' src={tutu}></img>
        </div>
      </div>




  );
}

export default Photo;