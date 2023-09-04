import React, { useState } from 'react';
import './CarModel.css'; 

function CarModel() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="car-container">
      <img src="/car.png" alt="Car" />
      <button 
        className="dot-button dot1" 
        onClick={() => setShowDescription(showDescription === 'dot1' ? null : 'dot1')}
      ></button>
      <button 
        className="dot-button dot2" 
        onClick={() => setShowDescription(showDescription === 'dot2' ? null : 'dot2')}
      ></button>
      {showDescription === 'dot1' && (
        <div className="description-box dot1">
          This is description of tire
        </div>
      )}
      {showDescription === 'dot2' && (
        <div className="description-box dot2">
          This is description of battery
        </div>
      )}
      <img src="/battery.png" alt="Electric Car Battery" className="battery-image" />
    </div>
  );
}

export default CarModel;
