import React from "react";
import "./social.css";
import schedule1 from '../../assets/social/schedule-1.png'
import schedule2 from '../../assets/social/schedule-2.png'
import mainline from '../../assets/social/mainline.png'
import free1 from '../../assets/social/free-yoga-1.png'
import free2 from '../../assets/social/free-yoga-2.png'
import mindful from '../../assets/social/mindful-move.png'


function Social() {
  return (





      <div id='social-flex-container'>
        <div id='social-grid'>
          <img className='social-photo' alt='placeholder' src={schedule1}></img>
          <img className='social-photo' alt='placeholder' src={schedule2}></img>
          <img className='social-photo' alt='placeholder' src={mainline}></img>
          <img className='social-photo' alt='placeholder' src={free1}></img>
          <img className='social-photo' alt='placeholder' src={free2}></img>
          <img className='social-photo' alt='placeholder' src={mindful}></img>

        </div>
      </div>




  );
}

export default Social;