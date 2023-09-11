const Car = () => {
  return(
    <div className='relative grow w-full h-[100vh]'>
      <div className='absolute top-[200px] w-full'>
        <img src={require('../assets/car.png')} className='float-right min-w-[940px]'/>
        <p className='absolute top-[40px] right-[430px] max-w-[250px]'>
          Electric vehicles have 30% reduced Carbon Dioxide emission compared to combustion vehicles.
        </p>
        <svg width="457" height="181" viewBox="0 0 457 181" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-32 right-60'>
        <line y1="0.5" x2="275" y2="0.5" stroke="black"/>
        <line x1="456.648" y1="180.356" x2="274.648" y2="0.355503" stroke="black"/>
        </svg>
        <p className='absolute top-[220px] right-[730px] max-w-[250px]'>
          Electric vehicle saves 15% more water then combustion vehicles.
        </p>
        <svg width="445" height="112" viewBox="0 0 445 112" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[280px] right-[550px]'>
        <line y1="0.5" x2="243" y2="0.5" stroke="black"/>
        <line x1="444.759" y1="111.438" x2="242.759" y2="0.438196" stroke="black"/>
        </svg>
        <p className='absolute top-[390px] right-[900px] max-w-[250px]'>
          One electric vehicle saves 55 tons of carbon dioxide over its lifetime.
        </p>
        <svg width="566" height="18" viewBox="0 0 566 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[450px] right-[600px]'>
        <line x1="0.995816" y1="2.50002" x2="239.996" y2="0.500017" stroke="black"/>
        <line x1="565.974" y1="17.4993" x2="239.974" y2="0.499321" stroke="black"/>
        </svg>
        <p className='absolute top-[640px] right-[800px] max-w-[250px]'>
          90% of manufacturing waste recycled
        </p>
        <svg width="467" height="157" viewBox="0 0 467 157" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[550px] right-[600px]'>
        <line x1="-4.37114e-08" y1="156.5" x2="265" y2="156.5" stroke="black"/>
        <line x1="466.306" y1="0.395729" x2="264.306" y2="156.396" stroke="black"/>
        </svg>
      </div>
    </div>
  )
}

export default Car