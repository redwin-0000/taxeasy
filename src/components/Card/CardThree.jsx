import React from 'react'
import homeThree from "../img/home-7.png";
const CardThree = () => {
  return (
    <section>
    <div className='shadow-xl mx-8 my-8'>
      <div>
        <img src={homeThree} alt='img' className='h-[23vh]'/>
      </div>
      <p className='text-xl font-bold'>Cloud based server with Data Backup</p>
      <p>All your data will be safe on the cloud server for years. Suppose, If you change your mobile phone, need not to worry about your data, just log out from old mobile and login with your details in new mobile, all your data will automatically reflect in your new device hassle free & easily.</p>
    </div>
    </section>
  )
}

export default CardThree