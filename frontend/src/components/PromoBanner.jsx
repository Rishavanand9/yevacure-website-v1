import React from 'react'


const PromoBanner = () => {
  return (
    <section className="section__container banner__container">
        <div className='banner__card'>
            <span><i className='ri-truck-line'></i></span>
            <h4>Free Delivery</h4>
            <p>Free Delivery big text</p>
        </div>
        <div className='banner__card'>
            <span><i className='ri-money-rupee-circle-fill'></i></span>
            <h4>Money Back Guarantee</h4>
            <p>Money Back Guara Money Back Guara big text</p>
        </div>
        <div className='banner__card'>
            <span><i className='ri-user-voice-fill'></i></span>
            <h4>Support</h4>
            <p>BackSuppoe hbf Delivery Back text</p>
        </div>
    </section>
  )
}

export default PromoBanner
