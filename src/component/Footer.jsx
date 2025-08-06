import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaRunning, FaDumbbell, FaPrayingHands, FaHeadphones, FaYoutube } from 'react-icons/fa';
import {  FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   <>
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

export default Footer