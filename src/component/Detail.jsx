
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Detail = () => {
    const [quantity, setQuantity] = useState(1);

        const [open, setOpen] = useState(false);
        const wrapperRef = useRef(null);
    
    
        useEffect(() => {
            function handleClickOutside(event) {
                if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                    setOpen(false);
                }
            }
    
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }, []);
    
    
    
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleCart = () => setIsOpen(!isOpen);
    
    
    
        const [isOpe, setIsOpe] = useState(false);
    
        const schedule = [
            { day: 'Monday', time: '06:30 AM - 09:00 PM' },
            { day: 'Tuesday', time: '06:30 AM - 11:00 PM', active: true },
            { day: 'Wednesday', time: '06:30 AM - 09:00 PM' },
            { day: 'Thursday', time: '06:30 AM - 11:00 PM' },
            { day: 'Friday', time: '06:30 AM - 11:00 PM' },
            { day: 'Saturday', time: '09:00 AM - 08:00 PM' },
            { day: 'Sunday', time: 'Closed' },
        ];
    return (
        <>

          <div className='container-fluid mt-4'>
                <div className='row'>
                    <div className='col-lg-3  d-flex justify-content-start align-items-center'>
                        <p className='fs-4 fw-5'>F<span>IT</span></p>
                        <p className='fs-4'>ZONE</p>
                    </div>



                    <div className='col-lg-6  cstm-nav '>
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid ">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse   d-flex justify-content-center " id="navbarNavAltMarkup">
                                    <div class="navbar-nav  gap-4">
                                        <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
                                        <NavLink to="/about-us" className="nav-link" >About Us</NavLink>
                                        <NavLink to="/shop" className="nav-link">Classes</NavLink>
                                        <NavLink to="/classes" className="nav-link " aria-disabled="true">Shop</NavLink>
                                        {/* <NavLink to="contact" className="nav-link " aria-disabled="true">Contact</NavLink> */}
                                        <div
                                            className="contact-dropdown"
                                            onMouseEnter={() => setIsOpe(true)}
                                            onMouseLeave={() => setIsOpe(false)}
                                        >
                                            {/* <span className="nav-link">CONTACTS</span> */}
                                            <NavLink to="/contact" className="nav-link " aria-disabled="true">Contact</NavLink>

                                            {isOpe && (
                                                <div className="dropdown-panel">
                                                    <div className="timetable">
                                                        <h4>Timetable / Open Hours</h4>
                                                        <ul>
                                                            {schedule.map((item, i) => (
                                                                <li key={i} className={item.active ? 'active' : ''}>
                                                                    <span>{item.day}</span>
                                                                    <span>{item.time}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="contact-form">
                                                        <input type="text" placeholder="Your name..." />
                                                        <input type="email" placeholder="Your email..." />
                                                        <textarea placeholder="Your question..." />
                                                        <button className='cstm-send'>SEND QUESTION</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>





                    <div className='col-lg-3 d-flex justify-content-end align-items-center gap-4'>
                        <NavLink to="/login" className="cstm-link"><FontAwesomeIcon icon={faUser} /></NavLink>
                        {/* <FontAwesomeIcon icon={faShoppingCart} /> */}



                        <div className="cart-container">
                            <div className="cart-icon" onClick={toggleCart}>
                                {/* 🛒 <span className="cart-price">$18.60</span> */}
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>



                            {isOpen && (
                                <div className="cart-dropdown">
                                    <div className="cart-item">
                                        <div className="cart-details">
                                            <p className="product-name">High Power Fusion</p>
                                            <p className="product-info">1 × Rs.18.60</p>
                                        </div>
                                        <img
                                            src="/assets/images/img49.jpg"
                                            alt="Product"
                                            className="product-image"
                                        />
                                    </div>

                                    <div className="cart-subtotal">
                                        <strong>Subtotal:</strong> Rs.18.60 <span className="tax-note">(ex. tax)</span>
                                    </div>

                                    <NavLink to="/cart"> <button className="checkout-button">CHECKOUT →</button> </NavLink>
                                </div>
                            )}
                        </div>

                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}


                        <div className="header-search-wrapper" ref={wrapperRef}>
                            <button className="search-icon" onClick={() => setOpen(!open)}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>

                            {open && (
                                <div className="search-dropdown">
                                    <input
                                        type="text"
                                        placeholder="Search the site..."
                                        className="search-input"
                                    />
                                    <button className="inner-search-icon">
                                        <i className="fas fa-search"></i>
                                    </button>
                                    <div className="search-caret" />
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <div className='cstm-cart-page'>
                    <img src="assets/images/img51.jpg" className='img-fluid'></img>
                    <div className='cstm-text-cart'>
                        <p>DETAIL PAGE</p>
                    </div>
                </div>
            </div>



            <div className='container'>
                <div className='row'>
                    <div className=' col-lg-4 cstm-dtel'>
                        <img src="assets/images/img71.png" className='img-fluid'></img>
                    </div>

                    <div className=' col-lg-4   cstm-secnd-dtel'>
                        {/* <p>WOO NINJA</p>
                <p>₹ 32.26</p>  */}

                        <div className="product-detail">
                            <h2 className="product-title">WOO NINJA</h2>
                            <div className="rating">
                                <span className="stars">★★★★☆</span>
                                <a href="#reviews">(2 customer reviews)</a>
                            </div>
                            <div className="price">₹32.56</div>
                            <p className="short-desc">
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                                turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
                                amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                                Mauris placerat eleifend leo.
                            </p>

                            <div className="purchase-row">
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                                <button className="cstm-detl-add-btn">
                                    ADD TO CART
                                </button>
                            </div>

                            <div className="meta">
                                <p><strong>Categories:</strong> Nutrition, Weight Loss, Whey</p>
                                <p><strong>Tag:</strong> On Fire</p>
                            </div>

                        </div>


                    </div>

                    <div className=' col-lg-4  cstm-third-dtel'>
                       <div className="sidebar-container">
      <div className="info-card">
        <span className="icon">💸</span>
        <div>
          <h4>MONEY BACK</h4>
          <p>100% money back guarantee</p>
        </div>
      </div>

      <div className="info-card">
        <span className="icon">🚚</span>
        <div>
          <h4>FREE SHIPPING</h4>
          <p>On all orders over ₹99</p>
        </div>
      </div>

      <div className="info-card">
        <span className="icon">💬</span>
        <div>
          <h4>SUPPORT 24/7</h4>
          <p>Free online support 365/year</p>
        </div>
      </div>
{/* 
      <h3 className="top-rated-title">TOP RATED PRODUCTS</h3> */}

      {/* <div className="product-card">
        <div className="product-info">
          <p>Winner Whey Gold</p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <span>$16.74</span>
        </div>
        <img src="/images/whey-gold.png" alt="Whey Gold" className="product-img" />
      </div> */}

      {/* <div className="product-card">
        <div className="product-info">
          <p>MDG Treadmill</p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <span>$8.37</span>
        </div>
        <img src="/images/treadmill.png" alt="Treadmill" className="product-img" />
      </div> */}
    </div>
                    </div>

                </div>
            </div>


<div className='container mb-5 mt-4'>
    <div className='row'>
        <div className='col-lg-3'>
         <img src="assets/images/img59.jpg" className='img-fluid'></img>
        </div>
         <div className='col-lg-3'>
            <img src="assets/images/img72.jpg" className='img-fluid'></img>
        </div>
         <div className='col-lg-3'>
                <img src="assets/images/img73.jpg" className='img-fluid'></img>
        </div>
         <div className='col-lg-3'>
           <img src="assets/images/img74.jpg" className='img-fluid'></img>
        </div>

    </div>
</div>




 <footer className="footer">
      <div className="footer-container">

        {/* Brand/Logo */}
        <div className="footer-column">
          <h2 className="footer-logo">FitZone</h2>
          <p>Your fitness journey begins here. Train smart. Stay strong.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><Link to="privacy">Privacy Plicy</Link></li>
            <li><Link to="faq">Faq</Link></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Personal Training</a></li>
            <li><a href="#">Group Classes</a></li>
            <li><a href="#">Nutrition Plans</a></li>
            <li><a href="#">Memberships</a></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FitZone. All rights reserved.</p>
      </div>
    </footer>

        </>
    )
}

export default Detail