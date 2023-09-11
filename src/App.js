// App.js
import React, { useState } from 'react';
import './App.css';
import './index.css'
import { IoMoon, IoSunny } from 'react-icons/io5' 
import Car from './components/car';
import Battery from './components/battery';


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mineralN, setMineralN] = useState(0)

  const mineralList = ["Aluminium", "Nickel", "Cobalt", "Lithium", "Other"]
  const mineralContent = [
    "Aluminum requires a significant amount of energy to mine, process, and refine, all of which which have a negative effect on the environment. Every year, a region the size of 250 football fields is cleared for bauxite, the mineral that is refined into aluminum, just in Porto Trombetas, Brazil. Up to four tons of toxic waste are created from the production of just one ton of raw aluminum. Large ponds are used to hold this waste and a lot of the time, entire communities are submerged under this highly corrosive sludge as a result of leaks and dam collapses. The amount of electricity needed to produce one ton of aluminum is 15 MWh, or about five years' worth of use for a two-person household.",
    "Electric vehicles use about 40 kg more nickel then combustion cars. Over the ensuing years, this will represent a considerable increase in demand. Concerns regarding pollution, indigenous rights, greenhouse gas emissions, and working conditions are brought up by nickel mining. The Large-scale mining activities needed to harvest nickel-rich ores leads to destruction of wildlife habitats, deforestation, ecosystem fragmentation, and water pollution. This negatively effects local biodiversity and can force communities who are dependent on those habitats for their livelihoods,  to relocate. In addition, The manufacturing of batteries produces a great deal of waste, which, if improperly disposed of, can release harmful substances into the environment. Smelting and refining nickel-rich ores can release pollutants that can be detrimental to nearby communities and contribute to climate change.",
    "Cobalt is crucial in the production of lithium-ion batteries. Each electric vehicle requires between 6 and 12 kilograms of cobalt. Cobalt mining practices raise human rights and child labor concerns.  About 70% of the supply is produced in the Democratic Republic of the Congo (DRC), where small-scale, artisanal mining is widely practiced. This involves miners who work independently using simple tools or just their bare handst. Deaths and ongoing health issues are frequent. Long-term cobalt exposure can cause lung disease, deafness, birth defects, and various cancers. Artisanal mining accounts for roughly 15% of global cobalt production.",
    "Lithium is one of the primary components in the lithium-ion batteries used in Tesla’s electric vehicles. Some of the dangers of extracting lithium include large-scale water consumption and associated pollution; probable rise in carbon dioxide emissions; large amounts of mineral waste; rise in respiratory issues; change in the hydro-logical cycle. To extract lithium, large amounts of salt brine must be sucked up and evaporated, this process uses large amounts of water that when drawn from adjacent sources, can cause harm to the communities that depend on that water.  About 500,000 gallons of water are needed to extract one ton of lithium, which can contaminate reservoirs and cause accompanying health issues.",
    "What about minerals in electric vehicles not used in batteries? Yttrium and Europium are used in LCD screens,  neodymium, terbium, and dysprosium are used in the magnetic motors of electric cars. The mining of all of these minerals contaminate the environment with acids, heavy metals, and radioactive materials, that can affect local water supplies and wildlife."
  ]
  const mineralImage = [require("./assets/aluminium.png"),require("./assets/nickel.png"), require("./assets/cobalt.png"), require("./assets/lithium.png"), require("./assets/other.png") ]
  const mineralColor = ["rgba(255,255,255,0.2)","rgba(144,244,238, 0.2)","rgba(121,135,255,0.2)","rgba(255,81,81,0.2)","rgba(235,114,255,0.2)"]

  return (
    <div className='flex flex-col items-center relative overflow-hidden'>
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
        <button className='bg-black p-4 rounded-full mb-[500px] mt-[2200px]' onClick={() => {setDarkMode(!darkMode)}}>
          <IoMoon size={30} color='white'/>
        </button>
      </div>
      {/* Dark Mode */}
      <div className='bg-black w-full absolute text-white flex flex-col items-center' style={{transition: 'top 2s', bottom:darkMode?7000:0}}>
        <div className='h-[100vh] flex justify-center items-center'>
          <h1>
            Tesla: The Environmental & Social Impact
          </h1>
        </div>
        <div className='h-[100vh] flex justify-center items-center'>
          <p className='w-[630px]'>Yes, while switching from combustion to electric vehicles would reduce the overall carbon footprint of the transportation system, it would not sufficiently address the climate change issues caused by personal transportation, and comes with a battalion of significant social and health issues that companies have hidden from the public view. These issues cannot be solved by continuing to rely on personal vehicles: The focus should be on making a better public transportation system and building walk-able neighborhoods where essentials are closer to home. Companies have forced personal cars on the public for so long, that we cannot even imagine a world without personal cars, and the issues presented today illustrate why we SHOULD imagine a world without personal cars.</p>
        </div>
        <div className='h-[100vh] flex flex-col justify-center w-[1000px]'>
          <h2>Minerals</h2>
          <div className='flex flex-row w-[400px] justify-between flex-wrap'>
            {mineralList.map((mineral, index)=> {
              return (
                <button onClick={() => {setMineralN(index)}}>
                  <h3 
                    className=''
                    style={{color: mineralN == index?'rgba(255,255,255,1)':'rgba(255,255,255,0.5)', fontFamily: mineralN == index?'DhyanaBold':'DhyanaRegular'}}>
                      {mineral}
                  </h3>
                </button>
              )
            })}
          </div>
          <div className='bg-[rgba(255,255,255,1)] h-[1px] w-full'/>
          <div className='flex flex-row'>
            <img src={mineralImage[mineralN]} className='h-[fit-content] w-[200px]'/>
            <p>{mineralContent[mineralN]}</p>
          </div>
        </div>
        <div className='h-[100vh] flex justify-center items-center'>
          <p className='w-[750px]'>Tesla has numerous checks in place to ensure that their mineral suppliers do not involve forced/child labor and yet in December 2019, Tesla was sued by International Rights Advocates on the behalf of 14 families from the Democratic Republic of Congo for “aiding and abetting in the death and serious injury of children who they claim were working in cobalt mines in their supply chains.” At the end of the day, even if Tesla cares about preventing forced/child labor, when your supplies come from hundreds of different sources shipped from around the world, can you really know if your supplies are ethically sourced?</p>
        </div>
        <div className='h-[110vh] w-full flex items-center justify-between relative'>
          <div className='ml-[300px]'>
            <h2 className='mb-6'>Tire Wear</h2>
            <p className='w-[630px]'>Vehicle tires are continuously grinding against the pavement, generating particles that harm both wildlife and human health as they drift through the air and attach into waterways. The hazard is heightened by the fact that newer electric vehicles tend to be heavier and faster, producing more particles. Larger tire fragments from rougher surfaces often fall to the ground, but tiny fragments from smoother surfaces, like newly paved highways, can float hundreds of feet in the air. These particles are so minute that they can travel to our organs and enter our lungs. There is a particular worry in areas near highways where various tire components have been connected to chronic illnesses like respiratory issues, renal damage, neurological damage, and birth abnormalities. Because tire compounds may find their way into the algae and grass that fish and cows eat, tire particles may also have an impact on us through our food.</p>
          </div>
          <img src={require("./assets/tire.png")} className=''/>
          <img src={require("./assets/dust.png")} className='absolute top-0 w-full h-[110vh]'/>
        </div>
        <div className='h-[100vh] flex justify-center items-center text-center'>
          <p className='w-[750px]'>
          The Electric vehicles (EVs) made by Tesla are surging in popularity right now due to their image as sustainable and futuristic. Electric vehicles widely appear to be green, however this could not be further from the truth. When compared to the environmental disaster that the public has labeled combustion cars, anything would be an upgrade. The Companies that are funded by our need for cars, have forced upon us charging/gas stations, parking lots, roads, repair centers, road signs, all of which segregate and make cities unwalkable and uncyclable, so much so that we cannot even imagine a world without cars. All of this infrastructure has an environmental and social impact, that is compounded by tire wear and the mining of the minerals needed for these cars.
          </p>
        </div>
        <div className='h-[100vh] flex justify-center items-center'>
          <button className='bg-white p-4 rounded-full mb-[300px] mt-[300px]' onClick={() => {setDarkMode(!darkMode)}}>
            <IoSunny size={30} color="black"/>
          </button>
        </div>
      </div>
    </div>
  );
}


export default App;
