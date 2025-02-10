import React from 'react'
import insta from '../assets/instagram-1.jpg'
import insta2 from '../assets/instagram-2.jpg'
import insta3 from '../assets/instagram-4.jpg'
import insta4 from '../assets/instagram-3.jpg'
import insta5 from '../assets/instagram-5.jpg'
import insta6 from '../assets/instagram-6.jpg'


const Footer = () => {
    return (
        <>
            <footer className='section__container footer__container'>
                <div className='footer__col'>
                    <h4>Contact Info</h4>
                    <p>
                        <span><i className='ri-map-pin-2-fill'></i></span>
                        221 B Baker St, LONDON
                    </p>
                    <p>
                        <span><i className='ri-mail-fill'></i></span>
                        yevacure@gmail.com
                    </p>
                    <p>
                        <span><i className='ri-phone-fill'></i></span>
                        +91-1234567890
                    </p>
                </div>

                <div className='footer__col'>
                    <h4>Company</h4>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Careers</a>
                    <a href="/">Our Blogs</a>
                    <a href="/">Terms and Conditions</a>
                </div>

                <div className='footer__col'>
                    <h4>Useful Links</h4>
                    <a href="/">Help</a>
                    <a href="/">Track Your Order</a>
                    <a href="/">Animals</a>
                    <a href="/">Humans</a>
                </div>

                <div className='footer__col'>
                    <h4>Instagram</h4>
                    <div className='instagram__grid'>
                        <img src={insta} alt='instaimg' />
                        <img src={insta4} alt='instaimg' />
                        <img src={insta2} alt='instaimg' />
                        <img src={insta3} alt='instaimg' />
                        <img src={insta5} alt='instaimg' />
                        <img src={insta6} alt='instaimg' />

                    </div>
                </div>
            </footer>

            <div className='footer__bar'>
                Copyright © 2025 by Yevacure. All rights reserved

            </div>
        </>
    )
}

export default Footer
