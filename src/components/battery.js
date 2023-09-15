
const Battery = ({scrollPosition}) => {
  return(
    <div className='relative w-full h-[100vh]'
      style={{
        transform: scrollPosition < 3000?"translateX(-50vw)":"translateX(0vw)", 
        opacity: scrollPosition < 3000?0:1, 
        transition: "transform 1s ease-out, opacity 1s ease-out"
      }}
    >
      <div className='absolute top-[200px]'>
        <img src={require('../assets/battery.png')} className='float-left min-w-[680px]'/>
        <div className='absolute left-[400px]'>
          <p className='absolute top-[-100px] left-[260px] max-w-[250px]'>
            Electric vehicles have 30% reduced Carbon Dioxide emission compared to combustion vehicles.
          </p>
          <svg width="500" height="104" viewBox="0 0 500 104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="254" y1="0.785645" x2="500" y2="0.785645" stroke="black"/>
          <line x1="0.813041" y1="102.822" x2="253.813" y2="0.821905" stroke="black"/>
          </svg>

        </div>
        <div className='absolute left-[400px] top-[200px]'>
          <p className='absolute top-[-10px] left-[450px] max-w-[250px]'>
            Electric vehicle saves 15% more water then combustion vehicles.
          </p>
          <svg width="686" height="57" viewBox="0 0 686 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="686" y1="55.7856" x2="431" y2="55.7857" stroke="black"/>
          <line x1="0.0632919" y1="0.789667" x2="431.063" y2="55.7897" stroke="black"/>
          </svg>
        </div>
        <div className='absolute left-[400px] top-[400px]'>
          <p className='absolute top-[90px] left-[380px] max-w-[250px]'>
            One electric vehicle saves 55 tons of carbon dioxide over its lifetime.
          </p>
          <svg width="562" height="191" viewBox="0 0 562 191" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="365.995" y1="189.786" x2="561.995" y2="187.816" stroke="black"/>
          <line x1="0.229414" y1="0.841382" x2="366.229" y2="189.841" stroke="black"/>
          </svg>
        </div>
      </div>

    </div>
  )
}

export default Battery