

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {  NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube  } from 'react-icons/fa';


const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: 'Avtar',
    email: 'avtar@example.com',
    location: 'Delhi, INDIA',
    bio: 'Fitness enthusiast. Love protein shakes and gym routines.',
    avatar: '/assets/images/img50.jpg',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(user);
  const [showOrders, setShowOrders] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUser(form);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Or your auth method
    navigate('/login');
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
                                         {/* <NavLink to="contact" className="nav-link " aria-disabled="true">Contact</NavLink> */}
                                          <div
      className="contact-dropdown"
      onMouseEnter={() => setIsOpe(true)}
      onMouseLeave={() => setIsOpe(false)}
    >
      {/* <span className="nav-link">CONTACTS</span> */}
        <NavLink to="contact" className="nav-link " aria-disabled="true">Contact</NavLink>

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



    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <img src={user.avatar} alt="Avatar" className="avatar" />
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
        </div>

        <div className="profile-body">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input name="name" value={form.name} onChange={handleChange} />

              <label>Email</label>
              <input name="email" value={form.email} onChange={handleChange} />

              <label>Location</label>
              <input name="location" value={form.location} onChange={handleChange} />

              <label>Bio</label>
              <textarea name="bio" value={form.bio} onChange={handleChange} />

              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <p><strong>Location:</strong> {user.location}</p>
              <p><strong>Bio:</strong> {user.bio}</p>
              {/* <button onClick={() => setIsEditing(true)}>Edit Profile</button> */}
            </>
          )}

          {/* Additional Buttons */}
          <div className="profile-actions">
            <button onClick={() => setShowOrders(!showOrders)} className="secondary-btn">
              {showOrders ? 'Hide Orders' : 'View Order List'}
            </button>

            <button onClick={() => setShowChangePassword(!showChangePassword)} className="secondary-btn">
              {showChangePassword ? 'Cancel Change Password' : 'Change Password'}
            </button>

            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>

          {/* Order List */}
          {showOrders && (
            <div className="orders-section">
              <h4>Recent Orders</h4>
              <ul>
                <li>Whey Protein – Rs.59.00 – Delivered</li>
                <li>Mass Gainer – Rs.45.00 – Shipped</li>
                <li>Creatine – Rs.22.00 – Processing</li>
              </ul>
            </div>
          )}

          {/* Change Password Form */}
          {showChangePassword && (
            <div className="change-password-form">
              <h4>Change Password</h4>
              <form onSubmit={(e) => { e.preventDefault(); alert('Password changed!'); setShowChangePassword(false); }}>
                <label>Current Password</label>
                <input type="password" required />

                <label>New Password</label>
                <input type="password" required />

                <label>Confirm New Password</label>
                <input type="password" required />

                <button type="submit">Update Password</button>
              </form>
            </div>
          )}
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
  );
};

export default Profile;




