import React from 'react'
import homeFive from "../img/home-9.png";
const CardFive = () => {
  return (
    <section>
    <div className='shadow-xl mx-8 my-8'>
      <div>
        <img src={homeFive} alt='img'/>
      </div>
      <p className='text-xl font-bold'>Stock/Inventory Management</p>
      <p>Manage & Track your stock/ Inventory simply & reliably with Taxeasy. Low Inventory Alerts will save MSME’s from Stock Out situation and hence from situation of losing customer trust.</p>
    </div>
    </section>
  )
}

export default CardFive