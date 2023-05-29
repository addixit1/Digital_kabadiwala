import React from 'react'
import veges from '../../ASSETS/vega.jpg'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>Ab Har Ghar Tak Hum h 
                </h1>
                <p>sfaiye k sath ab kmaiye bhi,
                    ab sb kre g sfaiye
                </p>
            </div>
        </div>
    )
}

export default Footer1
