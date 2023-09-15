// App.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './index.css'
import { IoMoon, IoSunny } from 'react-icons/io5' 
import Car from './components/car';
import Battery from './components/battery';


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mineralN, setMineralN] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lightHeight, setLightHeight] = useState(0)
  const [darkHeight, setDarkHeight] = useState(0)

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
  const mineralWidth = [250,360,285,354,290]

  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
  };
  
  const lightRef = useRef(null)
  const darkRef = useRef(null)

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      window.scrollTo({top: 700})
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  console.log(scrollPosition)
  return (
    <div className='flex flex-col items-center relative overflow-hidden '>
      {/* Light mode */}
      <div className='flex flex-col items-center w-full bg-white h-[5500px]' ref={lightRef}>
        <div  style={{marginBottom: 300, marginTop: 100}}>
          <h3>Sources:</h3>
          <p>
            Tire Paragraph: https://www.theatlantic.com/technology/archive/2023/07/electric-vehicles-tires-wearing-out-particulates/674750/ <br/>
            Rare minerals Image: https://www.sciencenews.org/article/rare-earth-mining-renewable-energy-future#:~:text=Rare%20earths%20are%20mined%20by,that%20might%20leak%20into%20groundwater.<br/>
            Tire Image: https://www.pngwing.com/en/free-png-ppfuj/download <br/>
            Lithium Image: https://feed.jeronimomartins.com/deep/lithium-the-new-white-gold/ <br/>
            Nickel Image: https://stock.adobe.com/images/macro-shoot-of-piece-of-nickel-metal-ore-isolated-on-a-white-background-closeup-photo-of-amazing-shiny-mineral-rough/414192078<br/>
            Aluminum Image: https://images-of-elements.com/aluminium.php <br/>
            Cobalt Image: https://carbosystem.com/en/wcco-cobalt-tungsten/ <br/>
            Terbium Image: https://www.pngwing.com/en/free-png-tdxgs/download <br/>
            Book: Marx, Paris. Road to Nowhere: What Silicon Valley Gets Wrong about the Future of Transportation. Verso, 2022. <br/>
            Tesla Impact Report: https://www.tesla.com/impact  <br/>
          </p>

        </div>
        <div className='flex items-center flex-col h-[100vh] justify-center'>
          <h1>
            Tesla: The Environmental & Social Impact
          </h1>
          <p>"Our mission is to accelerate the world's transition to sustainable energy"</p>
        </div>
        {/* Word bubble */}
        <div className='flex items-center text-center flex-col leading-10 font-[Dhyana] h-[100vh] justify-center whitespace-nowrap'>
          <p style={{transform: scrollPosition < 1000?"translateX(100vw)":"translateX(0vw)", opacity: scrollPosition < 1000?0:1, transition: "transform 1s ease-out, opacity 2s ease-out"}}>“3x increase in direct supplier audits”</p>
          <p style={{transform: scrollPosition < 1050?"translateX(-100vw)":"translateX(0vw)", opacity: scrollPosition < 1050?0:1, transition: "transform 1s ease-out, opacity 2s ease-out"}}>“We are a majority-minority company with 67% of U.S. employees from underrepresented groups”</p>
          <p style={{transform: scrollPosition < 1100?"translateX(100vw)":"translateX(0vw)", opacity: scrollPosition < 1100?0:1, transition: "transform 1s ease-out, opacity 2s ease-out"}}>“In 2022, our customers avoided releasing about 13.4 million metric tons of CO2 into the atmosphere”</p>
          <p style={{transform: scrollPosition < 1150?"translateX(-100vw)":"translateX(0vw)", opacity: scrollPosition < 1150?0:1, transition: "transform 1s ease-out, opacity 2s ease-out"}}>“100% renewable supercharger network” &nbsp;&nbsp;&nbsp;&nbsp;“We strive to have the safest and healthiest operations in the world.”</p>
          <p style={{transform: scrollPosition < 1200?"translateX(100vw)":"translateX(0vw)", opacity: scrollPosition < 1200?0:1, transition: "transform 1s ease-out, opacity 2s ease-out"}}>“4 mining companies in our supply chain completed or agreed to IRMA audits”&nbsp;&nbsp;&nbsp;&nbsp;“800+ suppliers engaged in responsible sourcing”</p>
          <p style={{transform: scrollPosition < 1250?"translateX(-100vw)":"translateX(0vw)", opacity: scrollPosition < 1250?0:1, transition: "transform 1s ease-out, opacity 2s ease-out"}}>“+80% find work personally rewarding and challenging”&nbsp;&nbsp;&nbsp;&nbsp;“75+ diversity hiring events”</p>
          <p style={{transform: scrollPosition < 1300?"translateX(100vw)":"translateX(0vw)", opacity: scrollPosition < 1300?0:1, transition: "transform 1s ease-out, opacity 2s ease-out"}}>“Fire incidents are lower for Tesla vehicles then the average vehicle in the U.S.</p>
          <p style={{transform: scrollPosition < 1350?"translateX(-100vw)":"translateX(0vw)", opacity: scrollPosition < 1350?0:1, transition: "transform 1.5s ease-out, opacity 2s ease-out"}}>“32,400 kW of solar panels installed on factories”</p>
        </div>
        <Car scrollPosition={scrollPosition}/>
        <Battery scrollPosition={scrollPosition}/>
        <button className={`bg-black p-4 rounded-full mt-[400px] mb-[400px] animate-bounce`} onClick={() => {setDarkMode(!darkMode)}}>
          <IoMoon size={30} color='white'/>
        </button>
      </div>
      {/* Dark Mode */}
      <div 
        className='bg-black w-full absolute text-white flex flex-col items-center bottom-0 h-[5500px]' 
        style={{transition: 'opacity 0.5s ease-in-out', opacity:darkMode?1:0, pointerEvents: darkMode?"":"none"}}
        ref={darkRef}
      >
        <div className='h-[100vh] flex justify-center items-center'>
          <h1>
            Tesla: The Environmental & Social Impact
          </h1>
        </div>
        <div className='mt-[100px] mb-[200px] flex justify-center items-center'>
          <p className='w-[630px]'>Yes, while switching from combustion to electric vehicles would reduce the overall carbon footprint of the transportation system, it would not sufficiently address the climate change issues caused by personal transportation, and comes with a battalion of significant social and health issues that companies have hidden from the public view. These issues cannot be solved by continuing to rely on personal vehicles: The focus should be on making a better public transportation system and building walk-able neighborhoods where essentials are closer to home. Companies have forced personal cars on the public for so long, that we cannot even imagine a world without personal cars, and the issues presented today illustrate why we SHOULD imagine a world without personal cars.</p>
        </div>
        <div className='flex flex-col justify-center w-[1000px] gap-4 mt-[300px] mb-[200px]'>
          <h2>Minerals</h2>
          <div className='flex flex-row w-[400px] justify-between flex-wrap'>
            {mineralList.map((mineral, index)=> {
              return (
                <button onClick={() => {setMineralN(index)}} key={mineral}>
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
          <div className='flex flex-row gap-8 items-center relative'>
            <img src={mineralImage[mineralN]} className='h-[fit-content] z-10' style={{width: mineralWidth[mineralN]}}/>
            <p>{mineralContent[mineralN]}</p>
            <div className='w-[400px] h-[400px] blur-3xl absolute rounded-full pointer-events-none' style={{backgroundColor: mineralColor[mineralN]}}/>
          </div>
        </div>
        <div className='mt-[250px] mb-[250px] flex justify-center items-center'>
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
        <div className='mt-[300px] mb-[200px] flex justify-center items-center text-center'>
          <p className='w-[750px]'>
          The Electric vehicles (EVs) made by Tesla are surging in popularity right now due to their image as sustainable and futuristic. Electric vehicles widely appear to be green, however this could not be further from the truth. When compared to the environmental disaster that the public has labeled combustion cars, anything would be an upgrade. The Companies that are funded by our need for cars, have forced upon us charging/gas stations, parking lots, roads, repair centers, road signs, all of which segregate and make cities unwalkable and uncyclable, so much so that we cannot even imagine a world without cars. All of this infrastructure has an environmental and social impact, that is compounded by tire wear and the mining of the minerals needed for these cars.
          </p>
        </div>
        <button className='bg-white p-4 rounded-full mb-[400px] mt-[300px] animate-bounce' onClick={() => {setDarkMode(!darkMode)}}>
          <IoSunny size={30} color="black"/>
        </button>
      </div>
    </div>
  );
}


export default App;
