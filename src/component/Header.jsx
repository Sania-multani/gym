import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';





const Header = () => {

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



                    <div className='col-lg-6  cstm-nav '>
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid ">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse   d-flex justify-content-center " id="navbarNavAltMarkup">
                                    <div class="navbar-nav  gap-4">
                                        <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
                                        <NavLink to="about-us" className="nav-link" >About Us</NavLink>
                                        <NavLink to="shop" className="nav-link">Classes</NavLink>
                                        <NavLink to="classes" className="nav-link " aria-disabled="true">Shop</NavLink>
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
                        <NavLink to="login" className="cstm-link"><FontAwesomeIcon icon={faUser} /></NavLink>
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

                                    <NavLink to="cart"> <button className="checkout-button">CHECKOUT →</button> </NavLink>
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





        </>
    )
}
export default Header










