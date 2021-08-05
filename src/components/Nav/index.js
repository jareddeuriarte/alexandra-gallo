import React from "react";
import "./nav.css";


function Nav() {
  return (
    <div id='nav-container'>


        <img id='logo' alt='logo' src='/images/logo.png'></img>
      
      <a href="/">About</a>
      <a href="/dm">Design + Merchandising</a>
      <a href='photo'>Photography</a>
      <a href='social'>Social</a>
      <a target="_blank" rel="noopener noreferrer" href='https://www.yogallo.com/'>Yoga</a>




    </div>
  );
}

export default Nav;