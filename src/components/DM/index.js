import React from "react";
import "./dm.css";
import donatella from '../../images/dm/donatella.png'
import figure from '../../images/dm/figure1.png'
import figures from '../../images/dm/figures.png'
import romper from '../../images/dm/romper.png'
import tierra from '../../images/dm/tierra.png'
import united from '../../images/dm/united.png'


function DM() {
  return (





      <div id='dm-flex-container'>
        <div id='dm-grid'>
          <img className='dm-photo' alt='placeholder' src={donatella}></img>
          <img className='dm-photo' alt='placeholder' src={tierra}></img>
          <img className='dm-photo' alt='placeholder' src={figure}></img>
          <img className='dm-photo' alt='placeholder' src={united}></img>
          <img className='dm-photo' alt='placeholder' src={figures}></img>
          <img className='dm-photo' alt='placeholder' src={romper}></img>

        </div>
      </div>




  );
}

export default DM;