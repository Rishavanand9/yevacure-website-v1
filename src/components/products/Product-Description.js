import React, { useEffect, useState } from 'react'
import  ProductLogo from "../../assets/Products/MagCure/ProdImg1.png"
import Img1 from "../../assets/Products/YevaCal-D3/ProdImg1.png"
import Img2 from "../../assets/Products/YevaCal-Gel/ProdImg1.png"
import "./product-description.css"

function ProductDescription() {

  const [productImage,setProductImage] = useState(ProductLogo)

  function changeImage(img){
    setProductImage(img)
  }

  return (
    <div className="product-desc-root">
      <div className="product-photos-vertical">
        <img className="product-image-small" src={Img1} alt="error" onMouseEnter={()=>changeImage(Img1)} />
        <img className="product-image-small" src={Img2} alt="error" onMouseEnter={()=>changeImage(Img2)}/>
        <img className="product-image-small" src={Img1} alt="error" onMouseEnter={()=>changeImage(Img1)}/>
        <img className="product-image-small" src={Img2} alt="error" onMouseEnter={()=>changeImage(Img2)}/>
        <img className="product-image-small" src={Img1} alt="error" onMouseEnter={()=>changeImage(Img1)}/>
      </div>
      <div className="product-image-main">
        <img className="product-image" src={productImage} alt="error"/>
      </div>

      <div className="product-description-right-pane">
        <div className = "product-desc-name"> Product Name </div>
        <div className="product-description-text">lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum  </div>
      </div>
    </div>
    
  )
}

export default ProductDescription
