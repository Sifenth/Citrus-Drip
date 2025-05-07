import React from 'react'
import './welcome.css'
import welcomeIMG from '../Assets/images/welcoming.png'
import captionimg from '../Assets/images/captionimage.png'
const Welcome = () => {
  return (
  <div className='welcome'>
    <div className='welcome-right'>
      <img src={welcomeIMG} alt="" />
    </div>
    <div className="welcome-left">
    <p className="caption">Gen'z wearing destination 🧭 </p>
    <p className='subcaption' style={{color : "#14213D"}}>When picking your outfit becomes entertainning !</p>
      
    </div>

  </div>
  )
}


export default Welcome;