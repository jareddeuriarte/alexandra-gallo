import React from "react";
import "./hero.css";

// Give this component props to make it resuable and dry
// and create "images.json" to pass through the src attribute
// and import json to App.js

function Hero() {
  return (
    <div id='hero-container'>
        
        <img className='hero-images' alt='alex-on-bridge' src='/images/alex-on-bridge.jpg'></img>
        <img className='hero-images' alt='alex-and-level' src='/images/alex-and-level.jpg'></img>
        <img className='hero-images' alt='alex-on-rooftop.jpg' src='/images/alex-on-rooftop.jpg'></img>


    </div>
  );
}

export default Hero;