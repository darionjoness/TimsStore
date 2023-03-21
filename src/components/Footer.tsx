import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerItems container">
            <div className="footerCustomerService">
                <h4>Customer Service</h4>
                <a href="">Contact Us</a>
                <a href="">Order Status</a>
                <a href="">Shipping</a>
                <a href="">Return Policy & Exchanges</a>
                <a href="">Gift Cards</a>
                <a href="">FAQ</a>
            </div>
            <div className="footerAboutUs">
                <h4>About Us</h4>
                <a href="">All Brands</a>
                <a href="">Careers</a>
                <a href="">Get email Updates</a>
                <a href="">Blog</a>
            </div>
            <div className="footerStores">
                <h4>Stores</h4>
                <a href="">Find a store</a>
                <a href="">Events</a>
                <a href="">Style Help</a>
            </div>
            <div className="footerSocials">
                <h4>Socials</h4>
                <a href="">Instagram</a>
                <a href="">Pinterest</a>
                <a href="">Twitter</a>
                <a href="">Facebook</a>
            </div>
        </div>
    </div>
  )
}

export default Footer