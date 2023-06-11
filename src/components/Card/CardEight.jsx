import React from 'react'
import homeEight from "../img/home-12.png";
const CardEight = () => {
  return (
    <section>
    <div className='shadow-xl mx-8 my-8'>
      <div>
        <img src={homeEight} alt='img'/>
      </div>
      <p className='text-xl font-bold'>GST/Income Tax- One Spot solution for all Tax Needs</p>
      <p>Taxeasy is the one spot solution for all the tax needs of small & medium businesses. With Taxeasy, you can reduce the errors in your GST Returns by preparing the Invoices & getting filed GST Returns at the same place.</p>
    </div>
    </section>
  )
}

export default CardEight