import React from 'react'
import homeNine from "../img/home-13.png";
const CardNine = () => {
  return (
    <section>
    <div className='shadow-xl mx-8 my-8'>
      <div>
        <img src={homeNine} alt='img'/>
      </div>
      <p className='text-xl font-bold'>Data Safety & Security</p>
      <p>With Taxeasy, your data is 100% safe & secure. Your data will be saved on cloud based server for years. SME’s can access their data anytime & anywhere.</p>
    </div>
    </section>
  )
}

export default CardNine