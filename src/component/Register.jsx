import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import  { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube  } from 'react-icons/fa';

const Register = () => {
      const [formData, setFormData] = useState({
        name:'',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Placeholder for register logic
    console.log('Registered successfully!', formData);
  };


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
  return (
    <>


       <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-3  d-flex justify-content-start align-items-center'>
                        <p className='fs-4 fw-5'>F<span>IT</span></p>
                        <p className='fs-4'>ZONE</p>
                    </div>



                    <div className='col-lg-6  cstm-nav'>
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

    
      <div className="register-page">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
             <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>

        <p className="footer-text">
          Already have an account? <Link to="/login" className="login-link">Login here</Link>
        </p>
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
                <li><a href="#">Programs</a></li>
                <li><a href="#">Trainers</a></li>
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

export default Register