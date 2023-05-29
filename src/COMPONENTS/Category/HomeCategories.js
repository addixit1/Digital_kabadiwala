import React from 'react'
import './HomeCategories.css'
import img1 from '../../ASSETS/Images/order.svg'
import img2 from '../../ASSETS/Images/search.svg'
import img3 from '../../ASSETS/Images/booked.svg'
import img4 from '../../ASSETS/Images/picked.svg'
// main page 4 card
const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={img1} alt='img1' />
        <div className='content'>
          <h1>
            Interecting with website
          </h1>
          <p> Person easy to interact</p>
        </div>
      </div>
      <div className='container'>
        <img src={img2} alt='img2' />
        <div className='content'>
          <h1>
            Search according to need 
          </h1>
          <p> Search according yor need  </p>
        </div>
      </div>
      <div className='container'>
        <img src={img3} alt='img3' />
        <div className='content'>
          <h1>
             Confirm Booking
          </h1>
          <p> Easy to Confirm to notify </p>
        </div>
      </div>
      <div className='container'>
        <img src={img4} alt='img4' />
         <div className='content'>
          <h1>
            Pickup team Come
          </h1>
          <p> Easy to pickup the team solve problem</p>
        </div>

      </div>

    </div>
  )
}

export default HomeCategories