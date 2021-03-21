import React, { useEffect, useState } from 'react'
import './ImageDisplay.css'
import homeAnimation from '../../assets/homeAnimation.gif'
import withWidth from '@material-ui/core/withWidth'

//Test Images
const Images = [
  'https://www.biosan.com/wp-content/uploads/2019/05/img1-3.jpg',
  'https://dkpo4ygqb6rh6.cloudfront.net/COWSIGNALS_COM/imageresized/4023/8248646f7e35630b2bb4bf597c22b73a/2560_1440_75_fixedjpg/cowsignals_2560px.jpg',
  'https://www.w3schools.com/howto/img_snow_wide.jpg',
  'https://www.w3schools.com/howto/img_mountains_wide.jpg',
]

function ImageDisplay(props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { width } = props
  const isMobile = width == 'xs' || width == 'sm ' ? true : false

  {
    /*
  const handlePrev = e =>{
      if(currentSlide === 0){
        setCurrentSlide(Images.length - 1)
      }else{
        setCurrentSlide(currentSlide -1)
      }
  }
*/
  }

  const handleNext = (e) => {
    if (currentSlide === Images.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      handleNext()
    }, 3000)
  })

  return (
    <div class="slideshow-container">
      <div class="mySlides">
        <img src={homeAnimation} class={isMobile ? 'imgStyle2' : 'imgStyle'} />
      </div>
      {/*
      {Images.map((item, index) => {
        if (index === currentSlide) {
          return (
            <div class="mySlides">
              <img src={item} class={isMobile ? 'imgStyle2' : 'imgStyle'} />
            </div>
          )
        }
      })}
      <a class="prev" onClick={handlePrev}>
        &#10094;
      </a>
      <a class="next" onClick={handleNext}>
        &#10095;
      </a>
      */}
    </div>
  )
}

export default withWidth()(ImageDisplay)
