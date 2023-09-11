// App.js
import React, { useState } from 'react';
import './App.css';
import './index.css'
import { IoMoon } from 'react-icons/io5' 
import Car from './components/car';
import Battery from './components/battery';


function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className='flex flex-col items-center relative'>
      {/* Light mode */}
      <div className='flex flex-col items-center w-full bg-white'>
        <div className='flex items-center flex-col h-[100vh] justify-center'>
          <h1>
            Tesla: The Environmental & Social Impact
          </h1>
          <p>"Our mission is to accelerate the world's transition to sustainable energy"</p>
        </div>
        {/* Word bubble */}
        <div className='flex items-center text-center flex-col leading-10 font-[Dhyana] h-[100vh] justify-center'>
          <p>“3x increase in direct supplier audits”</p>
          <p>“We are a majority-minority company with 67% of U.S. employees from underrepresented groups”</p>
          <p>“In 2022, our customers avoided releasing about 13.4 million metric tons of CO2 into the atmosphere”</p>
          <p>“100% renewable supercharger network” &nbsp;&nbsp;&nbsp;&nbsp;“We strive to have the safest and healthiest operations in the world.”</p>
          <p>“4 mining companies in our supply chain completed or agreed to IRMA audits”&nbsp;&nbsp;&nbsp;&nbsp;“800+ suppliers engaged in responsible sourcing”</p>
          <p>“+80% find work personally rewarding and challenging”&nbsp;&nbsp;&nbsp;&nbsp;“75+ diversity hiring events”</p>
          <p>“Fire incidents are lower for Tesla vehicles then the average vehicle in the U.S.</p>
          <p>“32,400 kW of solar panels installed on factories”</p>
        </div>
        <Car/>
        <Battery />
        <button className='bg-black p-4 rounded-full mb-[300px] mt-[300px]' onClick={() => {setDarkMode(!darkMode)}}>
          <IoMoon size={30} color='white'/>
        </button>
      </div>
      {/* Dark Mode */}
      {/* <div className='bg-black w-full h-[200px] absolute text-white flex flex-col items-center' style={{transition: 'top 2s', top:darkMode?200:0}}>
        <h1>
          Tesla: The Environmental & Social Impact
        </h1>
      </div> */}
    </div>
  );
}


export default App;
