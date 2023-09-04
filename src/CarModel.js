import React, { useState } from 'react';
import './CarModel.css'; 

function CarModel() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="car-container">
      <img src="/car.png" alt="Car" />
      <button 
        className="dot-button" 
        onClick={() => setShowDescription(!showDescription)}
      ></button>
      {showDescription && (
        <div className="description-box">
          This is description of the tire.
        </div>
      )}
      <img src="/battery.png" alt="Electric Car Battery" className="battery-image" />
    </div>
  );
}

export default CarModel;
