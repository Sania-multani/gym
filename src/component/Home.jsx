import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useRef } from 'react';
import gsap from 'gsap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaRunning, FaDumbbell, FaPrayingHands, FaHeadphones, FaYoutube } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {



  const swiperRef = useRef(null);

  // Animate elements of a given slide
  const animateSlide = (slideElement) => {
    if (!slideElement) return;

    gsap.fromTo(
      slideElement.querySelector('.custom-trd'),
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      slideElement.querySelector('.custom-get'),
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
    );

    gsap.fromTo(
      slideElement.querySelector('.custom-desc'),
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.4 }
    );

    gsap.fromTo(
      slideElement.querySelector('.custm-btn-expl'),
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.6 }
    );
  };

  // Trigger animation when slide changes
  const handleSlideChange = () => {
    const currentSlide = document.querySelector('.swiper-slide-active');
    animateSlide(currentSlide);
  };

  // Animate the first slide on mount
  useEffect(() => {
    setTimeout(() => {
      const firstSlide = document.querySelector('.swiper-slide-active');
      animateSlide(firstSlide);
    }, 100); // Allow time for Swiper to render
  }, []);



  const teamData = [
    { name: 'DAVID', image: '/assets/images/img5.jpg' },
    { name: 'JENNY', image: '/assets/images/img5.jpg' },
    { name: 'MATHEW', image: '/assets/images/img5.jpg' },
    //   { name: 'ALISA', image: '/assets/images/img5.jpg' },
  ];


  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "assets/images/img11.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      image: "assets/images/img12.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      image: "assets/images/img11.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      image: "assets/images/img10.jpg",
    },

    {
      id: 5,
      name: "Product 1",
      image: "assets/images/img11.jpg", // replace with your image path
    },


    {
      id: 7,
      name: "Product 1",
      image: "assets/images/img11.jpg", // replace with your image path
    },


    {
      id: 8,
      name: "Product 1",
      image: "assets/images/img11.jpg", // replace with your image path
    },


    {
      id: 9,
      name: "Product 1",
      image: "assets/images/img11.jpg", // replace with your image path
    },

  ];



  const programs = [
    { icon: <FaPrayingHands />, title: 'Power Yoga' },
    { icon: <FaDumbbell />, title: 'Functional training' },
    { icon: <FaHeadphones />, title: 'Endurance training' },
    { icon: <FaRunning />, title: 'Agility exercises' },
  ];



  const sideArticles = [
    {
      id: 1,
      title: 'How to strength train in your age',
      date: 'Mar 23, 2020',
      category: 'HEALTH',
      image: "assets/images/img15.jpg",
    },
    {
      id: 2,
      title: 'How to use meditation for weight loss',
      date: 'Mar 23, 2020',
      category: 'HEALTH',
      image: "assets/images/img17.jpg",
    },
    {
      id: 3,
      title: 'Do you need a body checkup before a gym?',
      date: 'Mar 23, 2020',
      category: 'HEALTH',
      image: "assets/images/img15.jpg",
    },

    {
      id: 3,
      title: 'Do you need a body checkup before a gym?',
      date: 'Mar 23, 2020',
      category: 'HEALTH',
      image: "assets/images/img17.jpg",
    },
  ];



  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);


  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop={true}
        speed={2500}
        onSlideChangeTransitionStart={handleSlideChange}
      >
        {['img2.jpg', 'img3.jpg', 'img4.jpg'].map((img, index) => (
          <SwiperSlide key={index}>
            <div className='custom-img-section'>
              <img src={`assets/images/${img}`} className='img-fluid' />
              <div className='custom-text'>
                <button type="button" className='custm-btn-expl mb-4'>EXPLORE NEW</button>
                <p className='custom-trd'>Trendy wear</p>
                <p className='custom-get'>GET EXCLUSIVE GYM</p>
                <p className='custom-desc'>
                  Pretium fusce id velit ut tortor et, ullamcorper cursus nunc. Nullam ipsum eros, dapibus imperdiet suscipit sit amet.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className='custm-sectn'>
        <div className='custom-trainer-sectn'>
          <p className='custm-text-traine'><span className='custm-col'>ADVANCED  </span>FITNESS TRAINERS <span className='custm-col'>AVAILABLE</span></p>
        </div>
      </section>


      <section className='mb-5 container mt-5 cstm-tra'>
        <div className='d-flex  justify-content-center align-items-center cstm-tr row'>
          <div className='col-lg-3 custm-co'>
            <img src="assets/images/img5.jpg" className='img-trainer' />
            <div className='img-div'>
              <p className='fs-3 cstm-da'>DAVID
                <div className="hover-icons">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram ms-3"></i>
                  <i className="bi bi-twitter-x"></i>
                </div>
              </p>
            </div>
          </div>

          <div className='col-lg-3  custm-co'>
            <div className='img-div'>
              <p className='fs-3 cstm-da'>JOHN
                <div className="hover-icons">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram ms-3"></i>
                  <i className="bi bi-twitter-x"></i>
                </div>
              </p>
            </div>
            <img src="assets/images/img7.jpg" className='img-trainer' />


          </div>

          <div className='col-lg-3  custm-co'>
            <img src="assets/images/img8.jpg" className='img-trainer' />
            <div className='img-div'>
              <p className='fs-3 cstm-da'>JENNY
                <div className="hover-icons">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram ms-3"></i>
                  <i className="bi bi-twitter-x"></i>
                </div>
              </p>
            </div>
          </div>

          <div className='col-lg-3  custm-co'>
            <div className='img-div'>
              <p className='fs-3 cstm-da'>ALISHA
                <div className="hover-icons">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram ms-3"></i>
                  <i className="bi bi-twitter-x"></i>
                </div>
              </p>
            </div>
            <img src="assets/images/img9.jpg" className='img-trainer' />
          </div>
        </div>
      </section>



      <div className='cstm-p'>
        <h2 className='cstm-prodt text-center'>TOP PRODUCTS</h2>
      </div>




      <div className="container py-5">
        <div className="row g-3">
          {products.map((product) => (
            <div key={product.id} className=" col-sm-6 col-lg-3 position-relative">
               <Link to="/detail">
              <div className=' product-card  w-100'>
               
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-100 mt-5"
                />
             
                <div className="overlay">

                  <div className="cart-container">
                    <div className="cart-icon" onClick={toggleCart}>
                      <button className="btn btn-dark cstm-add-btn me-2">
                        Add to Cart
                      </button>
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

                </div>
              </div>
               </Link>
            </div>
          ))}
        </div>
      </div>






      <section className="services-section container  mt-3">
        <div className="text-content">

          <h1 className="main-headings">Popular training <br /> programs and plans</h1>
        </div>
        <div className="descriptions">
          <p>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <p>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>
        </div>
      </section>




      <section className="programs-section">
        <div className="programs-container">
          {programs.map((prog, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">{prog.icon}</div>
              <h3 className="program-title">{prog.title}</h3>
              <div className='cstm-circle'>
                <div className="arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </section>




      <section className='container'
      >
        <div className='row g-5'>
          <div className='col-lg-6'>
            {/* <img src="assets/images/img13.jpg" className='img fluid'></img> */}
            <div className="fitness-container">
              <img src="assets/images/img13.jpg" alt="Fitness routine" className="fitness-image" />
              <div className="fitness-overlay">
                <h2>Choose your own fitness routine</h2>
              </div>
            </div>
          </div>


          <div className='col-lg-6 who-we-are'>
            <h4 className="section-subtitle  cstm-fit">WHO WE ARE</h4>
            <h1 className="section-title cstm-fit">Fitness gurus <br /> and enthusiasts</h1>

            <p className="section-paragraph ">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            <p className="section-paragraph ">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            <p className="section-paragraph">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
            </p>



            <button className="about-btn">About Us</button>
          </div>


        </div>

      </section>






      <section className="news-section">
        <div className="news-heading">
          <p className="subheading">WHAT'S NEW</p>
          <h1>Read our news for insights</h1>
        </div>

        <div className="news-wrapper">
          {/* Left side list */}
          <div className="side-news">
            {sideArticles.map(article => (
              <div key={article.id} className="news-item">
                <img src={article.image} alt={article.title} />
                <div className="news-text">
                  <p className="meta">
                    <span className="category">{article.category}</span> • <span>{article.date}</span>
                  </p>
                  <h3>{article.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right side main article */}
          <div className="main-news">
            <img src="assets/images/img14.jpg" alt="Main News" className="main-img" />
            <div className="main-content">
              <span className="category-tag">HEALTH</span>
              <h2 className='cstm-ho'>How to burn 500 calories using a stability ball</h2>
              <p className='cstm-ho'>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt....
                Proin faucibus nec mauris a sodales, sed elementum mi tincidunt....
                Proin faucibus nec mauris a sodales, sed elementum mi tincidunt....
              </p>
              <div className="meta-details">
                <span>Mar 23, 2020</span> • <span>0 Comments</span>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home