import React from "react";
import "./dm.css";
import donatella from '../../assets/dm/donatella.png'
import figure from '../../assets/dm/figure1.png'
import figures from '../../assets/dm/figures.png'
import romper from '../../assets/dm/romper.png'
import tierra from '../../assets/dm/tierra.png'
import united from '../../assets/dm/united.png'
import tierraPDF from '../../assets/dm/tierra.pdf'
import romperPDF from '../../assets/dm/romper.pdf'
import unitedPDF from '../../assets/dm/united.pdf'





function DM() {
  return (





    <div id='dm-flex-container'>
      <div id='dm-grid'>
        <img className='dm-photo' alt='placeholder' src={donatella}></img>

        <a className='pdf' target="_blank" rel="noopener noreferrer" href={tierraPDF}>
          <img className='dm-photo' alt='placeholder' src={tierra}></img>
        </a>

        <img className='dm-photo' alt='placeholder' src={figure}></img>

        <a className='pdf' target="_blank" rel="noopener noreferrer" href={unitedPDF}>
          <img className='dm-photo' alt='placeholder' src={united}></img>
        </a>

        <img className='dm-photo' alt='placeholder' src={figures}></img>

        <a className='pdf' target="_blank" rel="noopener noreferrer" href={romperPDF}>
          <img className='dm-photo' alt='placeholder' src={romper}></img>
        </a>

      </div>
    </div>




  );
}

export default DM;