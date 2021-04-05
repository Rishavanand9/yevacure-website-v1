import React, { useEffect, useState } from 'react'
import ProductLogo from '../../assets/Products/MagCure/ProdImg1.png'
import { Link } from 'react-router-dom'
import './product-list.css'

const images = [
  ['MagCure', '../../assets/Products/MagCure/ProdImg1.png'],
  ['ReproCure', '../../assets/Products/ReproCure/ProdImg1.png'],
  ['YevaCal-D3', '../../assets/Products/YevaCal-D3/ProdImg1.png'],
  ['YevaCal-Gel', '../../assets/Products/YevaCal-Gel/ProdImg1.png'],
  ['YevaClean', '../../assets/Products/YevaClean/ProdImg1.png'],
  ['YevaLiv', '../../assets/Products/YevaLiv/ProdImg1.png'],
  ['YevaminForte', '../../assets/Products/YevaminForte/ProdImg1.png'],
]

function Products() {
  return (
    <div className="product-list-root">
      {images.map((item, index) => {
        return (
          <div className = "flip-card">
          <div className="product-list-card-inner" key={index}>
            
            <div className ="flip-card-front">
            <img className="product-list-image" src={ProductLogo} alt="error" />
            <div className="product-list-container">
              <div className="product-name">Product Name</div>
              <div className="product-description">
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsum
              </div>
            </div>
            <Link to="/products/product-desc">
              <button className="product-list-know-more">Know More</button>
            </Link>
            </div>

            <div className = "flip-card-back">
              <p>lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
            
          </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
