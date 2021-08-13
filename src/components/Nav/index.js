import React from "react";
import "./nav.css";
import logo from '../../assets/logo.png'



function Nav() {
  return (


    <div id='nav-container'>


      <img id='logo' alt='logo' src={logo}></img>

      <a href="/">About</a>
      <a href="/dm">D + M</a>
      <a href='photo'>Photography</a>
      <a href='social'>Social</a>
      <a id='yoga' target="_blank" rel="noopener noreferrer" href='https://www.yogallo.com/'>yoga</a>




    </div>

  );
}

export default Nav;