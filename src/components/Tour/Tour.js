import React, { useState } from 'react';
import './Tour.css';

const Tour = () => {
  const openPreview = (src) => {
    const modal = document.getElementById("imagePreview");
    const modalImg = document.getElementById("previewImg");
    modalImg.src = src;
    modal.style.display = "block";
  };

  const closePreview = () => {
    const modal = document.getElementById("imagePreview");
    modal.style.display = "none";
  };
  return (
    <section id="tour">
      <div className="center-text">
        <h2>DESTINATION TOURS</h2>
      </div>

      <div className="tour-content">
        <div className="box" onClick={() => openPreview("london.webp")}>
          <img src="london.webp" alt='london' />
          <h6>LONDON</h6>
          <h4>UNITED KINGDOM</h4>
        </div>

        {
            <div className="box" onClick={() => openPreview("rome.jpeg")}>
            <img src="rome.jpeg" alt='Rome' />
            <h6>ROME</h6>
            <h4>ITALY</h4>
          </div>
          
        }
        {
            <div className="box" onClick={() => openPreview("dubai.jpeg")}>
            <img src="dubai.jpeg" alt='DUBAI' />
            <h6>DUBAI</h6>
            <h4>UNITED ARAB EMIRATES</h4>
          </div>
        }
        {
           <div className="box" onClick={() => openPreview("jaipur2.webp")}>
           <img src="jaipur2.webp" alt='JAIPUR' />
           <h6>JAIPUR</h6>
           <h4>RAJASTHAN</h4>
         </div>
        }
        {
           <div className="box" onClick={() => openPreview("paris3.jpeg")}>
           <img src="paris3.jpeg" alt='PARIS' />
           <h6>PARIS</h6>
           <h4>FRANCE</h4>
         </div>
        }
        {
           <div className="box" onClick={() => openPreview("AMRITSAR.jpeg")}>
           <img src="AMRITSAR.jpeg" alt='AMRITSAR' />
           <h6>AMRITSAR</h6>
           <h4>PUNJAB</h4>
         </div>
        }
        {
           <div className="box" onClick={() => openPreview("barcelona.jpeg")}>
           <img src="barcelona.jpeg" alt='barcelon' />
           <h6>BARCELONA</h6>
           <h4>SPAIN</h4>
         </div>
        }
        {
           <div className="box" onClick={() => openPreview("new york.jpeg")}>
           <img src="new york.jpeg" alt='new york'/>
           <h6>NEW YORK</h6>
           <h4>USA</h4>
         </div>
        }
      </div>
      <div id="imagePreview" className="modal" onClick={closePreview}>
        <span className="close" onClick={closePreview}>&times;</span>
        <img className="modal-content" id="previewImg" alt="Preview" />
      </div>
    </section>
  );
};

export default Tour;
