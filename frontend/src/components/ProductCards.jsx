import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import '../App.css'
import RatingStars from './RatingStars';

const ProductCards = ({ products }) => {
    return (
        <div className="grid grid-cols-5 gap-2.5 p-6 justify-center product_card_root">
            {products.map((product, index) => (
                <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                    {/* Product Image Container */}
                    <div className="aspect-square w-full">
                        <Link to={`/shop/${product._id}`}>
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                            />
                        </Link>
                    </div>

                    <div>
                        <h4>{product.name}</h4>
                        <p>₹ {product.price}</p>
                        <RatingStars rating={product.rating} />
                    </div>
                </div>

                
            ))}
        </div>
    );
}

export default ProductCards;