import React, { useState } from 'react'
import ProductCards from './ProductCards'
import products from '../data/products.json'

const TrendingProducts = () => {

    const [visibleProducts, setVisibleProducts] = useState(6)

    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)
    }

    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader mb-12'>
                Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum,
                a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered,
                added, and removed to make it nonsensical and improper Latin.
                The first two words themselves are a truncation of dolorem ipsum.
            </p>
            <ProductCards products={products.slice(0, visibleProducts)} />
            <div className='product__btn mt-20'>
                {visibleProducts <  products.length && (
                    <button className='btn' onClick={loadMoreProducts}>Load More</button>
                )}
            </div>
        </section>
    )
}

export default TrendingProducts
