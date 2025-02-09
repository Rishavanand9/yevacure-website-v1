import { Link } from "react-router-dom"
import bannerImg from '../assets/header.png'

const Banner = () => {
    return (
        <div className="section__container header__container">
            <div className="header__content z-30">
                <h4> Upto 20% Discount</h4>
                <h1> HealthCare Products</h1>
                <p>
                    Get up to 20% off on top-quality healthcare products! 
                    Shop from a wide range of medicines, wellness supplements, and medical essentials. 
                    Trusted by thousands, we ensure fast delivery and genuine products at the best prices.
                    Stay healthy, save more! Order now and experience hassle-free pharmacy services!
                </p>
                <button className="btn"><Link to={'/shop'}>Explore Now</Link></button>
            </div>
            <div>
                <img src={bannerImg} alt="bannerImage"/>
            </div>
        </div>
    )
}

export default Banner
