import React from 'react'

import dealsImg from '../assets/deals.png'

const DealsSection = () => {
  return (
    <section className="section__container deals__container">
      <div className='deals__image'>
        <img src={dealsImg} alt="" />
      </div>
      <div className='deals__content'>
        <h5> Get Upto 40% discount </h5>
        <h4>Deals Of the Month</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
          an unknown printer took a galley of type and scrambled it to make a type specim
          en book. It has survived not only five centuries, but also the leap into electronic typesetting, r
          emaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contain
          ing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including v
          ersions of Lorem Ipsum.
        </p>
        <div className='deals__countdown flex-wrap'>
          <div className='deals__countdown__card'>
            <h4>14</h4>
            <p>Days</p>
          </div>
          <div className='deals__countdown__card'>
            <h4>20</h4>
            <p>Hrs</p>
          </div>
          <div className='deals__countdown__card'>
            <h4>11</h4>
            <p>Mins</p>
          </div>
          <div className='deals__countdown__card'>
            <h4>10</h4>
            <p>Secs</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DealsSection
