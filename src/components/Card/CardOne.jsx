import React from 'react'
import homeOne from "../img/home-5.png";
const CardOne = () => {
  return (
<section >
<div className='shadow-xl mx-8 my-8' >
  <div>
    <img src={homeOne} alt='img'/>
  </div>
  <p className='text-xl font-bold'>GST Billing App</p>
  <p>With Taxeasy Billing App, you can easily & quickly create GST Bills/Tax Invoices in just few steps. Also, you can choose different Invoices format for different lines of Business.</p>
</div>
</section>
  )
}

export default CardOne